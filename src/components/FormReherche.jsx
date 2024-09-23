import { useState } from "react";

function FormRecherche(){

const [location, setLocation] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(location)
    if(!location){
        alert("veuillez entrer une localisation")
    }
    }

    return(
        <form onSubmit={handleSubmit}>
            <i className="fa-solid fa-location-dot"></i>
                <input
                className="input"
                type="text"
                name="location"
                placeholder="Marseille, France"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <input className="button" type="submit" value="Rechercher" />
                <button className="rechercher" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>

    )
}
export default FormRecherche;