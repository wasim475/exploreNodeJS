const mitter = require('node:events');

class FoodisReady extends mitter {}

const foodReady = new FoodisReady();
foodReady.on('food', () => {
  console.log('food is ready');
});
foodReady.on('coolDrink', () => {
  console.log('it is very harmfull for your health');
});
foodReady.emit('coolDrink');