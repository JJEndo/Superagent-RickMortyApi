import superagent from 'superagent';

async function getLocations() {
    try {
        const response = await superagent.get('https://rickandmortyapi.com/api/location');
        return response.body.results.map(location => ({ id: location.id, name: location.name }));
    } catch (error) {
        console.error('Error al obtener ubicaciones:', error);
        return [];
    }
}

export default getLocations; // Cambia module.exports a export default

