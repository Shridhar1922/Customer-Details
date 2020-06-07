const Joi = require('joi');
const _ = require('lodash');
const CustomerData = require('../models/CustomerData.model.js');

// Create and Save a new CustomerData
exports.create = (req, res) => {
    // Validate request
    if(!req.body.cust_id) {
        return res.status(400).send({
            message: "Customer Id can not be empty"
        });
    }
    if(!req.body.cust_name) {
        return res.status(400).send({
            message: "Customer Name can not be empty"
        });
    }

    if(!req.body.age) {
        return res.status(400).send({
            message: "Customer age can not be empty"
        });
    }

    if(!req.body.sex) {
        return res.status(400).send({
            message: "Customer Sex can not be empty"
        });
    }
console.log("sdddddd",req.body.address)

    // Create a CustomerData
    const CustData = new CustomerData({
        cust_id: req.body.cust_id,
        cust_name: req.body.cust_name,
        age:req.body.age,
        sex:req.body.sex,
        address:req.body.address
    });

    // Save CustomerData in the database
    CustData.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the CustomerData."
        });
    });
};


// Retrieve and return all CustomerData from the database.
exports.findAll = (req, res) => {
    const pagination=parseInt(req.query.pagination);

    const page=parseInt(req.query.page);  

    CustomerData.find({},{},{
      limit:pagination,
      skip:(page-1)*pagination,
      sort:{createdAt:-1},
      projection: { address: 0 }
    })
    .then(CustomerData => {
       
        res.send({
            success: true,
            message: "All CustomerData details",
            data:CustomerData
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CustomerData."
        });
    });
};

exports.findOne = (req, res) => {
    CustomerData.findById(req.params.custId)
    .then(CustomerData => {
        if(!CustomerData) {
            return res.status(404).send({
                message: "CustomerData not found with id " + req.params.custId
            });            
        }
        res.send(_.pick(CustomerData, ['_id', 'cust_id', 'address']));
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerData not found with id " + req.params.custId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving CustomerData with id " + req.params.custId
        });
    });
};

