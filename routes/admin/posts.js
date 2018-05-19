/**
 * ============================ Admin Posts Router ==================================
 * ============================================================================
 */

const express = require('express');
const router = express.Router();


/**
 * ============================================================================
 * ====================== Overide Admin Layouts Settings ======================
 */
router.get('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';
    next();

});



/**
 * ================================= Route All Posts ==============================
 */
router.get('/', (req, res) => {

    res.render('admin/posts/index');

});

/**
 * ================================= Route Get Create Posts ==============================
 */
router.get('/create', (req, res) => {
   
    res.render('admin/posts/create');
});


/**
 * ================================= Route Post Create Posts ==============================
 */
router.post('/create', (req, res) => {

    console.log(req.body);
})

// Exports Module
module.exports = router;