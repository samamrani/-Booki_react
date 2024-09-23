import React from 'react';
import hotelsData from '../data/hotels.json';

const CadreHebergement = () => {
  const hotels = hotelsData.hotels;

  return (
    <section id="hebergement" class="cadre-hebergement">
      <div className="titre-content">
        <h2>Hébergements à Marseille</h2>
      </div>
      <div className="content">
        {hotels.map((hotel, index) => (
          <article className="card" key={index}>
            <img src={require(`../images/${hotel.src}`)} alt={hotel.alt} />
            <div className="cadre-star">
              <h3>{hotel.name}</h3>
              <p>{hotel.price}</p>
            </div>
            <div className="star">
              {(() => {
                const stars = [];
                for (let i = 0; i < 5; i++) {
                  stars.push(
                    <i
                      key={i}
                      className={`fa-solid fa-star ${i < hotel.stars ? "bleu" : "grise"}`}
                    ></i>
                  );
                }
                return stars;
              })()}
            </div>
          </article>
        ))}
        <h3>Afficher plus</h3>
      </div>
    </section>
    
  );
};

export default CadreHebergement;
