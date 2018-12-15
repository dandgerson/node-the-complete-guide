'use strict';

// node modules
const path = require('path');

// third party libs
const express = require('express');
const bodyParser = require('body-parser');

// helper custom modules
const rootDir = require('./util/path');

// app instance
const app = express();

// app configs
app.set('views', 'views');
app.set('view engine', 'ejs');
// config parsing data
app.use(bodyParser.urlencoded({extended: false}));
// config static paths
app.use(express.static(path.join(rootDir, 'public')));

// routers
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');

app.use('/admin', adminRoutes.routes);
app.use(mainRoutes.routes);
// middlewares
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: false,
  });
});

app.listen(3000);