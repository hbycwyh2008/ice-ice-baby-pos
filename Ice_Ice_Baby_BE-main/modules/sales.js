const mongoose = require('mongoose');
const SalesModel = require('../models/sales');

// 不要有 mongoose.connect 或 mongoose.createConnection

/**
 * Register data into mongo db.
 * @param {Object} obj object to create
 * @returns create result
 */
function create(obj) {
  return new Promise((resolve, reject) => {
    SalesModel
      .create(obj)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

/**
 * Search data from mongo db.
 * @param {Object} query search condition
 * @returns search result
 */
function find(query) {
  return new Promise((resolve, reject) => {
    SalesModel
      .find(query)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

/**
 * Update existing data that match the query to given object.
 * @param {Object} query search condition
 * @param {Object} obj object to replace
 * @returns update result
 */
function update(query, obj) {
  return new Promise((resolve, reject) => {
    SalesModel
      .updateMany(query, obj)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

/**
 * Delete object in mongo db
 * @param {Object} query search condition
 * @returns delete result
 */
function del(query) {
  return new Promise((resolve, reject) => {
    SalesModel
      .deleteMany(query)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

module.exports = { create, find, update, del };
