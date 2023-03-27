const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()


const app = express();
app.use(cors())
app.use(express.json())

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGOURL)
        .then(() => {
            console.log("connection is successful");
            // User.deleteMany({tandc_enq:true, visited_sponsor:false,followup_enquiry:false})
        })
        .catch((err) => {
            console.log(err + "not connected");
        });
}

app.post('/users', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        application_date: new Date(),
        cgpa: req.body.cgpa,
        city: req.body.city,
        age: req.body.age,
        applied: req.body.applied
    });
    await user.save()
        .then((result) => {
            res.status(201).json({
                message: "User created successfully",
                user: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "User not created",
                error: err
            });
        });
});

app.get('/', async (req, res) => {
    const key = req.query.quer
    if (key) {
        const obj = {
            [key]: true
        }
        // console.log(obj);
        const users = await User.find(obj);
        // console.log(users);
        res.send(users);
        return
    }
    res.send("not found")
})

app.get('/count/', async (req, res) => {
    const key = req.query.quer
    if (key) {
        const obj = {
            [key]: true
        }
        // console.log(obj);
        const users = await User.find(obj);
        const len =  users.length 
        // console.log(users);
        res.status(200).send({len});
        return
    }
    res.send("not found")
})

app.get('/count/nodes', async (req, res) => {
    const key1 = req.query.quer1
    const key2 = req.query.quer2
    if (key1 && key2) {
        const obj = {
            [key1]: true,
            [key2]: true

        }
        // console.log(obj);
        const users = await User.find(obj);
        const len =  users.length 
        // console.log(users);
        res.status(200).send({len});
        return
    }
    res.send("not found")
})




app.post('/set_user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        application_date: new Date(),
        cgpa: req.body.cgpa,
        city: req.body.city,
        age: req.body.age,
        viewed: req.body.viewed,
        revisited: req.body.revisited,
        bookmarked: req.body.bookmarked,
        tandc_enq: req.body.tandc_enq,
        visited_sponsor: req.body.visited_sponsor,
        followup_enquiry: req.body.followup_enquiry,
        download_brochure: req.body.download_brochure,
        applied: req.body.applied,
        documents_uploaded: req.body.documents_verified,
        documents_verified: req.body.documents_verified,
        documents_rejected: req.body.documents_rejected,
        documents_reupload: req.body.documents_reupload,
        user_accepted: req.body.user_accepted,
        user_rejected: req.body.user_rejected,
        user_inwaitlist: req.body.user_inwaitlist,
        email_sent: req.body.email_sent,
        enquired: req.body.enquired,
        successful: req.body.successful
    })

    await user.save()
    .then((result) => {
        res.status(201).json({
            message: "User created successfully",
            user: result
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: "User not created",
            error: err
        });
    });
})

// app.get('/', async (req, res) => {
//     if (req.query.revisited) {
//         const users = await User.find({
//             viewed: true,
//             revisited : true,
//             bookmarked: false,
//             tandc_enq: false,
//             visited_sponsor: false,
//             followup_enquiry: false,
//             download_brochure:false,
//             applied: false,
//             documents_uploaded: false,
//             documents_verified: false,
//             documents_rejected: false,
//             documents_reupload: false,
//             user_accepted: false,
//             user_rejected: false,
//             user_inwaitlist: false,
//             email_sent: false,
//             enquired: false,
//             successful: false
//         });
//         res.send(users, users.length);
//         return
//     }
//     res.send("not found")
// })
app.listen(3000, () => {
    console.log('Server running on port 3000');
    connectDB();
})

