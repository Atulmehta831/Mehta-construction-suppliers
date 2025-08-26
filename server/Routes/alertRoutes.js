const express = require ('express');
const router = require('express').Router();
const Alert = require ('../Models/Alert');

router.get('/',async(req,res)=>{
    try{
        const latestAlert = await Alert.findOne().sort({date:-1});
        res.json(latestAlert);
    } catch(err) {
        res.status(500).json({error:'Failed to fetch alert'});
    }
});
router.post('/',async (req,res)=>{
    try{
        
        const newAlert = new Alert(req.body);
        await newAlert.validate();
        await newAlert.save();
        res.status(201).json(newAlert);

    } catch(err){
        res.status(500).json({error : 'failed'});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const deleteAlert = await Alert.findByIdAndDelete(req.params.id);
        if(!deleteAlert) return res.status(404).json({message:'Alert not found'});
        res.status(200).json({ message: 'Alert deleted successfully' });
    } catch(err){
         res.status(500).json({ error: 'Deletion failed' });
    }
});
module.exports = router;