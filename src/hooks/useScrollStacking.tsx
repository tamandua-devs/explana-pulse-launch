
import { useEffect, useState, useRef } from 'react';

interface StackingCard {
  index: number;
  element: HTMLElement;
  progress: number;
  isStacked: boolean;
  zIndex: number;
  transform: string;
  shadow: string;
}

export const useScrollStacking = (cardCount: number) => {
  const [stackingCards, setStackingCards] = useState<StackingCard[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(updateCardPositions);
      }
    };

    const updateCardPositions = () => {
      if (!containerRef.current) {
        isScrolling.current = false;
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      const updatedCards: StackingCard[] = cardsRef.current.map((card, index) => {
        if (!card) return null;

        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardHeight = cardRect.height;
        
        // Calculate scroll progress for this card
        const scrollProgress = Math.max(0, Math.min(1, 
          (viewportHeight - cardTop) / (viewportHeight + cardHeight)
        ));

        // Stacking logic: cards start stacking when they're 60% visible
        const stackingThreshold = 0.6;
        const isStacked = scrollProgress > stackingThreshold;
        
        // Calculate transform based on scroll progress and card index
        const stackOffset = index * 20; // Each card offset by 20px
        const parallaxSpeed = 1 + (index * 0.1); // Different speed for each card
        const translateY = isStacked ? 
          -Math.pow(scrollProgress - stackingThreshold, 2) * 200 * parallaxSpeed + stackOffset :
          0;
        
        // Scale effect: cards get slightly smaller as they stack
        const scale = isStacked ? 
          1 - ((scrollProgress - stackingThreshold) * 0.05) :
          1;

        // Rotation for more dynamic effect
        const rotation = isStacked ? 
          (scrollProgress - stackingThreshold) * (index % 2 === 0 ? 1 : -1) :
          0;

        // Dynamic z-index based on position and scroll
        const zIndex = isStacked ? 100 - index : index;

        // Dynamic shadow based on stacking
        const shadowIntensity = isStacked ? 
          Math.min(0.4, (scrollProgress - stackingThreshold) * 2) :
          0.1;
        
        const shadowBlur = 20 + (shadowIntensity * 40);
        const shadowSpread = shadowIntensity * 10;

        return {
          index,
          element: card,
          progress: scrollProgress,
          isStacked,
          zIndex,
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`,
          shadow: `0 ${shadowSpread}px ${shadowBlur}px hsl(0 0% 0% / ${shadowIntensity}), 
                   0 ${shadowSpread * 2}px ${shadowBlur * 2}px hsl(355 85% 60% / ${shadowIntensity * 0.2})`
        };
      }).filter(Boolean) as StackingCard[];

      setStackingCards(updatedCards);
      isScrolling.current = false;
    };

    // Throttled scroll listener
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [cardCount]);

  const setCardRef = (index: number, element: HTMLDivElement | null) => {
    if (element) {
      cardsRef.current[index] = element;
    }
  };

  const getCardStyle = (index: number) => {
    const card = stackingCards.find(c => c.index === index);
    if (!card) return {};

    return {
      transform: card.transform,
      zIndex: card.zIndex,
      boxShadow: card.shadow,
      transition: 'none', // Remove transitions for smooth scroll-based animation
    };
  };

  return {
    containerRef,
    setCardRef,
    getCardStyle,
    stackingCards
  };
};
