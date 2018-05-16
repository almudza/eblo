/**
 * ============================ Admin Router ==================================
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
 * ================================= Route Admin ==============================
 */



router.get('/', (req, res) => {

    res.render('admin/index');

});



// Exports Module
module.exports = router;