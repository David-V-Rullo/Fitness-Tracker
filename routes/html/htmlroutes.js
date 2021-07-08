const router = require('express').Router()
const path = require('path')


//Homepage HTML route
router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../public/index.html'))
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})
//Exercise HTML route
router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../public/exercise.html'))
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})
//Stats HTML route
router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../public/stats.html'))
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})

module.exports = router