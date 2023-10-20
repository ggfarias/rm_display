
let randomEpisodeNumber = 0

function changeEpisodeNumber () {
    return Math.floor(Math.random() * 52)
}

function handleButtonClick() {
    randomEpisodeNumber = changeEpisodeNumber();
    const resultElement = document.getElementById('random-number')
    resultElement.textContent = `Episode number: ${randomEpisodeNumber}`;

    const apiEpisodesURL = `https://rickandmortyapi.com/api/episode/${randomEpisodeNumber}`

    fetch(apiEpisodesURL)
    .then((res) => res.json())
    .then((data) => {
        const episode = data;
        const randomEpisodeInfo = document.getElementById('random-episode-info');

        const episodeName = document.createElement('h3');
        episodeName.textContent = episode.name;
        
        const episodeCode = document.createElement('h5');
        episodeCode.textContent = episode.episode;

        const episodeAirDate = document.createElement('p');
        episodeAirDate.textContent = episode.air_date;

        randomEpisodeInfo.innerHTML = ''; 

        randomEpisodeInfo.appendChild(episodeName)
        randomEpisodeInfo.appendChild(episodeCode)
        randomEpisodeInfo.appendChild(episodeAirDate)
    })
    .catch((error) => console.error('API request failed:', error));
}


