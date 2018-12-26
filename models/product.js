'use strict';

const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = callback => {
  fs.readFile(p, (err, data) => {
    if (err) return callback([]);
    callback(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor({ title, imageUrl, desctiption, price }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.desctiption = desctiption;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        // eslint-disable-next-line no-console
        console.log('save error', err);
      });
    });
  }
  
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};