const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createGame,getAllAdmin,getGames, updateGame, deleteOneGame, getGameById, getMyGames } = require('../controller/gameController');


router.get('/admin',auth, getAllAdmin);

router.get('/my',auth, getMyGames)

router.get('/', getGames);

router.get('/:id',getGameById)

router.post('/',auth, createGame);

router.patch('/:id',auth, updateGame);

router.delete('/:id',auth, deleteOneGame);



module.exports = router;
