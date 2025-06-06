const User = require('./user.model');
const Book = require('./book.model');
const Author = require('./author.model');
const Genre = require('./genre.model');
const Review = require('./review.model');
const UserBook = require('./userBook.model');

// Initialize associations
const models = {
  User,
  Book,
  Author,
  Genre,
  Review,
  UserBook
};

// Call associate function for each model that has it
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

module.exports = models; 