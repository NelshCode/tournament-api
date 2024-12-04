import express from 'express';
import PlayerService from './PlayerService';

const router = express.Router();

router.post('/players', (req, res) => {
  const { pseudo } = req.body;
  try {
    PlayerService.addPlayer(pseudo);
    res.status(201).json({ message: `Added player : ${pseudo}` });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/players/:pseudo/points', (req, res) => {
  const { pseudo } = req.params;
  const { points } = req.body;
  try {
    PlayerService.updatePoints(pseudo, points);
    res.status(200).json({ message: `Points updated for : ${pseudo}` });
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

router.get('/players/:pseudo', (req, res) => {
  const { pseudo } = req.params;
  const player = PlayerService.getPlayer(pseudo);
  if (!player) {
    res.status(404).json({ error: `Player "${pseudo}" does not exists` });
  } else {
    res.status(200).json(player); // Inclut maintenant le classement
  }
});

router.get('/players', (req, res) => {
  const players = PlayerService.getAllPlayers();
  res.status(200).json(players);
});

router.delete('/players', (req, res) => {
  PlayerService.deleteAllPlayers();
  res.status(200).json({ message: 'All players were deleted.' });
});

export default router;
