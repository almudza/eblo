/**
 * ===================== Module Express App ======================
 * ===============================================================
 */
const express = require('express');
const app = express(); // init app
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');


// Set mongoDB mongoose
mongoose.connect('mongodb://localhost:27017/blog-cms').then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));


// Set Public Folder use /static url
app.use('/static', express.static(path.join(__dirname,'public')));

// Set View
app.set('views', path.join(__dirname, 'views'));

// Set Engine Express-Hadlebars
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

/**
 * ========================= Require Router =======================
 * ================================================================
 */
// Load Route
const homeRoute = require('./routes/home/index');
const adminRoute = require('./routes/admin/index');
const adminPosts = require('./routes/admin/posts');

// Use Route
app.use('/', homeRoute);
app.use('/admin', adminRoute);
app.use('/admin/posts', adminPosts);





/**
 * ========================= Server Port ==========================
 * ================================================================
 */

const host = '127.0.0.1';
const port = process.env.PORT || 4500;
app.listen(port, host, () => {
    console.log(`server run on port http://${host}:${port}`);
});