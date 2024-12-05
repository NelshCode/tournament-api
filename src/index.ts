import express from 'express';
import playerRoutes from './playerRoutes';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON
app.use('/api', playerRoutes); // routes usage

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
