

import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
    MedicineName: { type: String },
    ImageURL :{type: String},
    Composition:{type: String},
    Introduction: {type:String},
    Benefits: {type:String},
    Description: { type: String },
    HowToUse:{type:String},
    SafetyAdvice: {type:String},
    Packaging: {type:String},
    Quantity: {type:String},
    Price:{type: Number},
    PrimaryUse:{type:String},
    Storage: {type:String},
    Symptoms: {type:String},
    SideEffects: {type:String},
    AlcoholInteraction: {type:String},
    PregnancyInteraction: {type:String},
    DrivingInteraction: {type:String},
    Manufacturer: {type:String},
    Q_A: {type:String}
});

const Medicine = mongoose.model('Medicine', medicineSchema);
export default Medicine;
