const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const loginrt = require("./login")
const homert = require("./home")
const gamedetrt = require("./gamedetails")
const creatert = require("./creategame")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", loginrt)

router.use("/", homert)

router.use("/home/", gamedetrt)



module.exports = router;
