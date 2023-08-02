import React, { useState, useEffect } from "react";
import Card from "./Card/Cards";

function Profesionales() {
  const totalCards = 9; 
  const cardsToShow = 6; 

  const initialCardsData = [
    {
      name: "Mauro Lomardo",
      occupation: "Rapero",
      imageSrc:
        "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
    },
    {
        name: "Mauro Lombard",
        occupation: "Raper",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
      {
        name: "Mauro Lombardo",
        occupation: "Rapero",
        imageSrc:
          "https://i.pinimg.com/1200x/20/1e/35/201e351e0dbeed7e93908c1eeb263f5d.jpg",
      },
    
  ];

  const [showAllCards, setShowAllCards] = useState(false);
 

 
  const handleVerMasClick = () => {
    setShowAllCards(true);
  };

 
  const handleVerMenosClick = () => {
    setShowAllCards(false);
  };

  return (
    <section className="team">
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Team</h2>
            <hr />
            <p className="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.
            </p>
          </div>
          <div className="row people">
            {initialCardsData
              .slice(0, showAllCards ? totalCards : cardsToShow)
              .map((cardData, index) => (
                <Card
                  key={index}
                  name={cardData.name}
                  occupation={cardData.occupation}
                  imageSrc={cardData.imageSrc}
                />
              ))}
          </div>
          {!showAllCards && cardsToShow < totalCards && (
            <div className="text-center">
              <button
                onClick={handleVerMasClick}
                className="btn btn-primary"
              >
                Ver más
              </button>
            </div>
          )}
          {showAllCards && (
            <div className="text-center">
              <button
                onClick={handleVerMenosClick}
                className="btn btn-secondary"
              >
                Ver menos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profesionales;
