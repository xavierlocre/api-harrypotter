import { useEffect, useState } from 'react';
import './Characters.css';

const Characters = () => {
const [characters, setCharacters] = useState([]);
const [selectedCharacter, setSelectedCharacter] = useState(null);

useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(responseData => {
        let data = responseData;
        setCharacters(data);
    });
}, []);

const openPopup = character => {
    setSelectedCharacter(character);
};

const closePopup = () => {
    setSelectedCharacter(null);
};

return (
    <div className='padre'><h1>Harry Potter</h1>
    <div className="contenedor">
    {characters.slice(0, 25).map(character => (
        <div className="card" key={character.id} onClick={() => openPopup(character)}>
        <h2>{character.name}</h2>
        <img className="foto" id="imagen" src={character.image} alt="personaje" />
        <h3>Casa: {character.house}</h3>
        <h4>Género: {character.gender}</h4>
        <h4>Especie: {character.species}</h4>
        </div>
    ))}

    {selectedCharacter && (
        <div className="popup">
        <div className="popup-content">
            <h2>{selectedCharacter.name}</h2>
            <img className='foto2' src={selectedCharacter.image} alt="personaje" />
            <div className='peqcard'>
            <h3>Fecha de Nacimiento: {selectedCharacter.dateOfBirth}</h3>
            <h3>Ascendencia: {selectedCharacter.ancestry}</h3>
            <h3>Patronus: {selectedCharacter.patronus}</h3>
            <h3>Actor: {selectedCharacter.actor}</h3>
            </div>
            <button onClick={closePopup}>Cerrar</button>
        </div>
        </div>
        
    )}
    </div>
    </div>
);
};

export default Characters;