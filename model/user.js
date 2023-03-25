const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    application_date: {
        type: Date,
        default: Date.now
    },
    cgpa : {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    viewed : {
        type: Boolean,
        default: false
    },
    revisited : {
        type: Boolean,
        default: false
    },
    bookmarked : {
        type: Boolean,
        default: false
    },
    tandc_enq : {
        type: Boolean,
        default: false
    },
    visited_sponsor : {
        type: Boolean,
        default: false
    },
    followup_enquiry : {
        type: Boolean,
        default: false
    },
    download_brochure : {
        type: Boolean,
        default: false
    },
    aaplied : {
        type: Boolean,
        default: false
    },
    documents_uploaded : {
        type: Boolean,
        default: false
    },
    documents_verified : {
        type: Boolean,
        default: false
    },
    documents_rejected : {
        type: Boolean,
        default: false
    },
    documents_reupload : {
        type: Boolean,
        default: false
    },
    user_accepted : {
        type: Boolean,
        default: false
    },
    user_rejected : {
        type: Boolean,
        default: false
    },
    user_inwaitlist : {
        type: Boolean,
        default: false
    },
    email_sent : {
        type: Boolean,
        default: false
    },
    enquired : {
        type: Boolean,
        default: false
    },
    successful : {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User',user)

module.exports = User