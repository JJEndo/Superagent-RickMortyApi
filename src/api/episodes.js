import superagent from 'superagent';

async function getEpisodes() {
    try {
        const response = await superagent.get('https://rickandmortyapi.com/api/episode');
        return response.body.results.map(episode => ({ id: episode.id, name: episode.name }));
    } catch (error) {
        console.error('Error al obtener episodios:', error);
        return [];
    }
}

export default getEpisodes; // Cambia a export default
