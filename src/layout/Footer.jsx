
import "../style.css";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="footer-content">
          <span className="footer-titre">À propos</span>
         
              <a href="fonctionnement" title="Fonctionnement du site">Fonctionnement du site</a>
              <a href="conditions" title="Conditions générales">Conditions générales de vente</a>
              <a href="donnees" title="Données et confidentialité">Données et confidentialité</a>
         
        </div>
        <div className="footer-content">
          <span className="footer-titre">Nos Hébergements</span>
        
              <a href="charte" title="Charte qualité">Charte qualité</a>
              <a href="proposer-hotel" title="Soumettre votre hôtel">Proposer votre hôtel</a>
        
        </div>
        <div className="footer-content">
          <span className="footer-titre">Assistance</span>
        
              <a href="centre-aide" title="Centre d'aide">Centre d'aide</a>
              <a href="contact" title="Nous contacter">Nous contacter</a>
        
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
