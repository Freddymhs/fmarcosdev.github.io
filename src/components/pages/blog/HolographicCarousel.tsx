import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface CardData {
  id: number;
  title: string;
}

export default function HolographicCarousel({
  cards = [],
  cardAction,
}: {
  cards: CardData[];
  cardAction: (id: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ rows: 1, columns: 3 });

  useEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;

      const { clientHeight, clientWidth } = containerRef.current;

      const rows = Math.min(4, Math.max(1, Math.floor(clientHeight / 180)));
      const columns = Math.min(6, Math.max(1, Math.floor(clientWidth / 200)));

      setDimensions({ rows, columns });
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const cardsPerGroup = dimensions.rows * dimensions.columns;
  const groupedCards = [];

  for (let i = 0; i < cards.length; i += cardsPerGroup) {
    groupedCards.push(cards.slice(i, i + cardsPerGroup));
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-xl border border-indigo-100 overflow-hidden"
    >
      {cards.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-lg">No hay tarjetas para mostrar</p>
        </div>
      ) : (
        <Carousel
          showArrows={groupedCards.length > 1}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
          infiniteLoop={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index) => (
            <button
              onClick={onClickHandler}
              className={`inline-block w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                isSelected ? "bg-indigo-600 scale-125" : "bg-indigo-300"
              }`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          )}
        >
          {groupedCards.map((group, groupIndex) => (
            <div key={groupIndex} className="p-4">
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${dimensions.columns}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${dimensions.rows}, minmax(0, 1fr))`,
                  height: `${dimensions.rows * 180}px`,
                }}
              >
                {group.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => cardAction(card.id)}
                    className={`
                      rounded-xl border-2 border-indigo-200 bg-white/80 backdrop-blur-sm
                      cursor-pointer p-4 flex flex-col items-center justify-center text-center
                      transition-all duration-300 hover:shadow-xl hover:border-indigo-400
                      hover:bg-white hover:scale-[1.02] shadow-md
                    `}
                  >
                    <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                      <span className="text-2xl text-indigo-600">📋</span>
                    </div>
                    <span className="text-sm font-medium text-gray-800 leading-tight break-words line-clamp-3">
                      {card.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      )}

      {groupedCards.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-md">
          <span className="text-sm font-medium text-indigo-600">
            Grupo{" "}
            {groupedCards.findIndex((group) =>
              group.some((card) => card.id === groupedCards[0][0]?.id)
            ) + 1}{" "}
            de {groupedCards.length}
          </span>
        </div>
      )}
    </div>
  );
}
