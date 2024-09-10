
const express = require('express');
const router = express.Router();
const FoodCenter = require('../Models/FoodCenter');

//Get all Food centers details
router.get('/getfoodCenterinfo', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get foodcenter by ID
router.get('/getfoodCenterinfo/:Center_id', async (req, res) => {
    try {
        const data = await Model.findOne({ Center_id: req.params.Center_id });
        
        if (!data) {
            return res.status(404).json({ message: 'Food center not found' });
        }
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Post all food center datails
router.post('/postfoodcenterinfo', async (req, res) => {
    const data = new Model({
        Center_name: req.body.Center_name,
        Center_address: req.body.Center_address,
        time: req.body.time,
        service: req.body.service,
        direction: req.body.direction,
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
