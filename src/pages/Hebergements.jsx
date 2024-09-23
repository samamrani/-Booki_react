import React from "react";

import Recherche from "../components/Recherche";
import FormRecherche from "../components/FormReherche";
import Filter from "../components/Filters";
import CadreHebergement from "../components/CadreHebergement";
import CadrePopulaire from "../components/CadrePopulaire";
import Activite from "../components/Activite";
import "../style.css";

function Hebergements() {
    return (
      <main>
        <section className="section-recherche">
          <Recherche />  
          <FormRecherche />
          <Filter /> 
        </section>
        <div id="hebergements" className="cadre-hebergement-populaire">
          <CadreHebergement />
          <CadrePopulaire />
        </div>
          <Activite />
       </main>
    );
}

export default Hebergements;
