module.exports = (app) => {
    const customerDataContoller = require('../controllers/CustomerData.controller.js');

    // Create a new customer
    app.post('/CustomerData', customerDataContoller.create);

    // Retrieve all customers
    app.get('/CustomerData', customerDataContoller.findAll);

    app.get('/CustomerData/:custId', customerDataContoller.findOne);

}