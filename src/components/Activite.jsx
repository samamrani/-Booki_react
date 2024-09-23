
function Activite() {

const activites = [
  {src: "vieux-port.jpg", title: "Vieux-Port"},
  {src: "fort-de-pomegues.jpg", title: "Fort de Pomègues"},
  {src: "parc-national.jpg", title: "Parc national des Calanques"},
  {src: "notre-dame.jpg", title: "Notre-Dame-de-la-Garde"}
]

  return (
    <section id="activite" className="activites_marseille">
      <div className="titre-content">
        <h2>Activités à Marseille</h2>
      </div>
      
      <div className="activite">

        { activites.map((activite,index) => (
          <article className="activite-card" key="index"> 
            <img src={require(`../images/${activite.src}`)} alt={activite.alt}/>
            <h3 className="activite-titre">{activite.title}</h3>
          </article>
        ))}
       
      </div>
    </section>
  );
}

export default Activite;
