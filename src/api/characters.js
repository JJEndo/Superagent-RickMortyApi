import superagent from 'superagent';

async function getCharacters() {
    try {
        const response = await superagent.get('https://rickandmortyapi.com/api/character');
        return response.body.results.map(character => ({ id: character.id, name: character.name }));
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        return [];
    }
}

export default getCharacters; // Cambia module.exports a export default
