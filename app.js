const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');


const app = express();
app.use(express.json())

const connectDB = async () => {
    mongoose.connect("mongodb+srv://blkbox:anshbouboleche@cluster0.3wzymdh.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("connection is successful");
        })
        .catch((err) => {
            console.log(err + "not connected");
        });
}

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.post('/users', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        application_date: new Date(),
        cgpa: req.body.cgpa,
        city: req.body.city,
        age: req.body.age
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
    if (req.query.view) {
        const users = await User.find({
            viewed: true,
            revisited : false,
            bookmarked: false,
            tandc_enq: false,
            visited_sponsor: false,
            followup_enquiry: false,
            download_brochure:false,
            aaplied: false,
            documents_uploaded: false,
            documents_verified: false,
            documents_rejected: false,
            documents_reupload: false,
            user_accepted: false,
            user_rejected: false,
            user_inwaitlist: false,
            email_sent: false,
            enquired: false,
            successful: false
        });
        res.send(users);
        return
    }
    res.send("not found")
})

app.get('/', async (req, res) => {
    if (req.query.revisited) {
        const users = await User.find({
            viewed: true,
            revisited : true,
            bookmarked: false,
            tandc_enq: false,
            visited_sponsor: false,
            followup_enquiry: false,
            download_brochure:false,
            aaplied: false,
            documents_uploaded: false,
            documents_verified: false,
            documents_rejected: false,
            documents_reupload: false,
            user_accepted: false,
            user_rejected: false,
            user_inwaitlist: false,
            email_sent: false,
            enquired: false,
            successful: false
        });
        res.send(users, users.length);
        return
    }
    res.send("not found")
})







app.listen(3000, () => {

    console.log('Server running on port 3000');
    connectDB();
})

