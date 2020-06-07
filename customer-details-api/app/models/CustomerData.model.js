const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    cust_id: String,
    cust_name: String,
    age:Number,
    sex:String,
    address:{  type: Object},
    created_date:{type:String},
    updated_date:{type:String}
}, {
    timestamps: true
});

CustomerSchema.pre('save', function(next){
    now=new Date();
    this.updated_date=now.toLocaleString("en-US", {
        timeZone: "Asia/Calcutta"
      });
    if(!this.created_date){
        this.created_date=now.toLocaleString("en-US", {
            timeZone: "Asia/Calcutta"
          });
    }
    next();
    
})

module.exports = mongoose.model('CustomerData', CustomerSchema);