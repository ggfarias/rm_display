
const apiURL = 'https://rickandmortyapi.com/api/character'

fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((character) => {
            const characterList = document.getElementById('character-list');

            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
        
            const characterName = document.createElement('h2');
            characterName.textContent = character.name;
        
            const characterImage = document.createElement('img');
            characterImage.src = character.image;
        
            characterCard.appendChild(characterName);
            characterCard.appendChild(characterImage);
            characterList.appendChild(characterCard);
    })})
    .catch((error) => console.error('API request failed:', error));
