const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { username: 'Reagan', password: 'imababy'},
        { username: 'Lyla', password: 'imatoddler'},
        { username: 'Katelyn', password: 'imanadult'}
    ])
})



module.exports = router


