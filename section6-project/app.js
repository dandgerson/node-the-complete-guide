'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', '/views');

const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');

app.use('/admin', adminRoutes.users);
app.use(mainRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: false,
  });
});

app.listen(3000);