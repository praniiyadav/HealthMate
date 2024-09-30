import mongoose from 'mongoose';

const myMedicineSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true },
  timeInterval: { type: Number, required: true },  // Time interval in hours
});

const MyMedicine = mongoose.model('MyMedicine', myMedicineSchema);
export default MyMedicine;
