const express = require('express');
const router = express.Router();

// Example route for fetching owner information
router.get('/getall', (req, res) => {
    res.send('List of all owners');
});

// Example route for creating a new owner record
router.get('/Registation', (req, res) => {
    res.send('Create a new owner record');
});

router.post('/centerowner_registation', async (req, res) => {
    const data = new Model({
        Center_name : req.body.Center_name,
        Center_address : req.body.Center_address,
        email : req.body.email,
        pincode : req.body.pincode,
        password : req.body.password,
        mobile : req.body.mobile,
        profile_pic : req.body.profile_pic,
        service: req.body.service,
        Center_id : req.body.Center_id
    });
    
    try {
        const dataToSave = await data.save();
        res.status(201).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: 'Error saving food center', error });
    }
});


module.exports = router;
