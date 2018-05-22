/**
 * ============================ Admin Posts Router ==================================
 * ============================================================================
 */

const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');


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

    Post.find({}).then(posts => {
        res.render('admin/posts', {posts: posts});       
    }, err => console.log(err));

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

    let allowComments = true;

    if(req.body.allowComments) {
        allowComments = true;
    } else {
        allowComments = false;
    }

    const newPost = Post({
        title: req.body.title,
        status: req.body.status,
        allowComments: allowComments,
        body: req.body.body
    });
   
    newPost.save().then(savedPost => {
        
        console.log(savedPost);
        
        res.redirect('/admin/posts');
    }).catch(error => {
        
        console.log(error);
    });
});

/**
 * ================================= Route Get Edit Posts ==============================
 */
router.get('/edit/:id', (req, res) => {

    Post.findById({_id:req.params.id}).then(post => {
        
        res.render('admin/posts/edit', {
            post
        });
    }).catch(err => console.log(err));
});

// Exports Module
module.exports = router;