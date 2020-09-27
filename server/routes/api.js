let express = require('express');
let router = express.Router();

// middleware for all requests sent to /api
router.use((req, res, next) => {
    next();
});

// requests sent to /api handled here
router.get('/', (req, res) => {
    res.send("API is functional");
});

module.exports = router;


