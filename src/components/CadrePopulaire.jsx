import populairesData from "../data/populaires.json"

function CadrePopulaire() {

  const populaires = populairesData.populaires;
  
  return (
    <section className="cadre-populaire">
      <div className="plus">
        <div className="plus-content">
          <h2>Les plus populaires</h2>
        </div>
        <div className="titre-content">
          <i className="fa-solid fa-chart-line"></i>
        </div>
      </div>

      <div className="populaire">
      { populaires.map((populaire,index) => 
            (
        <article className="cadre-content" key={index}>
          <div className="card-img">
          <img src={require(`../images/${populaire.src}`)} alt={populaire.alt} />
          </div>
          <div className="cadre-star">
            <div className="cadre-i">
              <h3>{populaire.title}</h3>
              <p>{populaire.price}</p>
            </div>
            <div className="star">
            {(() => {
                const stars = [];
                for (let i = 0; i < 5; i++) {
                  stars.push(
                    <i
                      key={i}
                      className={`fa-solid fa-star ${i < populaire.stars ? "bleu" : "grise"}`}
                    ></i>
                  );
                }
                return stars;
              })()}
            </div>
          </div>
        </article>
 )
            
)}
      
      </div>
    </section>
  );
}

export default CadrePopulaire;
