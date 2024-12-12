import express from 'express';
import { getCharacters, getLocations, getEpisodes } from '../api/index.js';

const router = express.Router();

// Ruta para personajes
router.get('/characters', async (req, res) => {
    const data = await getCharacters();
    res.json(data);
});

// Ruta para ubicaciones
router.get('/locations', async (req, res) => {
    const data = await getLocations();
    res.json(data);
});

// Ruta para episodios
router.get('/episodes', async (req, res) => {
    const data = await getEpisodes();
    res.json(data);
});

export default router; // Exportación por defecto
