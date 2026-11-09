import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  valor: number;
  sufixo?: string;
  duracaoMs?: number;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  valor,
  sufixo = '',
  duracaoMs = 1800,
}) => {
  const [contagem, setContagem] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duracaoMs, 1);
            // Ease out cubic: 1 - pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * valor);
            setContagem(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setContagem(valor);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [valor, duracaoMs]);

  // Formata com separador de milhar brasileiro (ponto)
  const valorFormatado = contagem.toLocaleString('pt-BR');

  return (
    <span ref={elementRef} className="tabular-nums">
      {valorFormatado}
      {sufixo}
    </span>
  );
};
