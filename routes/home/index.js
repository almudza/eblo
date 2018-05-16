/**
 * ================================= Home Front Route ==============================
 * =================================================================================
 */

const express = require('express');
const router = express.Router();

/**
 * ============================================================================
 * ====================== Overide Home Layouts Settings ======================
 */
router.get('/*', (req, res, next) => {

    req.app.locals.layout = 'home';
    next();

});

router.get('/', (req, res) => {

    res.render('home/index');
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

router.get('/login', (req, res) => {

    res.render('home/login');
});


// Exports router
module.exports = router;