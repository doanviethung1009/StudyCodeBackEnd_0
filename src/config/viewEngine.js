const path = require('path') //import path
const express = require('express') //import express

const configViewEngine = (app) => {
    // app.set('views', path.join(__dirname, './../views'))
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    // congig static files: css, image, js
    // app.use(express.static(path.join(__dirname, './../public'))); //  "public" off of current is root
    app.use(express.static(path.join('./src/', 'public')));
};

module.exports = configViewEngine;