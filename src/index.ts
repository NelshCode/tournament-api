import express from 'express';
import playerRoutes from './playerRoutes';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware pour parser les JSON
app.use('/api', playerRoutes); // Utilisation des routes

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
