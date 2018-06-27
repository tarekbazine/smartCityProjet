const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())

const {Schema} = mongoose

mongoose.connect('mongodb://server:123456me@ds219641.mlab.com:19641/smart_city')

var Owner = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: String,
    password: String,
    age: {type: Number, required: true},
    isMale: {type: Boolean, required: true},
    inscriptionDate: {type: String, required: true},
    img: {type: String, required: true},
    rates: {
        total : Number,
        history :[{
            date: {type: Date, required: true},
            rate: {type: Number, required: true},
            text: String,
            rater: {type: Schema.Types.ObjectId, ref: 'Labor'}
        }
        ]},
    address:{
        lat:Number,
        lang:Number,
        value:String
    }
})

restify.serve(router, mongoose.model('Owner', Owner))


var Labor = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: String,
    password: String,
    age: {type: Number, required: true},
    isMale: {type: Boolean, required: true},
    inscriptionDate: {type: String, required: true},
    img: {type: String, required: true},
    rates: {
        total : Number,
        history :[{
            date: {type: Date, required: true},
            rate: {type: Number, required: true},
            text: String,
            rater: {type: Schema.Types.ObjectId, ref: 'Owner'}
        }
    ]},
    address:{
        lat:Number,
        lang:Number,
        value:String
    }
})

restify.serve(router, mongoose.model('Labor', Labor))

var Offer = new mongoose.Schema({

    date: {type: Date, required: true},
    time: {type: Number, required: true},
    lable: {type: String, required: true},
    description: {type: String, required: true},
    nbPosts: {type: Number, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Owner'},
    isActive: {type: Boolean, required: true},
    applicants: [{
        accepted: {type: Boolean, required: true},
        labor: {type: Schema.Types.ObjectId, ref: 'Lobor'}
    }],
    geo:{
        lat:String,
        lang:String
    }

})

restify.serve(router, mongoose.model('Offer', Offer))

app.use(router)

app.listen(3000, () => {
    console.log('Express server listening on port 3000')
})