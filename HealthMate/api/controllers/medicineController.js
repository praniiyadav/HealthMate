// medicineController.js
import Medicine from '../models/medicine.js';

export const getAllMedicines = async (req, res, next) => {
    try {
        const { search } = req.query;  // Extract search term from query parameters

        let medicines;
        if (search) {
            // If there's a search query, find medicines by symptoms or medicine name
            medicines = await Medicine.find({
                $or: [
                    { Symptoms: { $regex: search, $options: "i" } },  // Case insensitive search in symptoms
                    { MedicineName: { $regex: search, $options: "i" } } // Case insensitive search in medicine name
                ]
            });
        } else {
            medicines = await Medicine.find();  // Fetch all medicines if no search query
        }

        res.json(medicines);
    } catch (error) {
        console.error("Error fetching medicines: ", error.message);
        next(error);
    }
};

export const getMedicineById = async (req, res, next) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.json(medicine);
    } catch (error) {
        console.error("Error fetching medicine: ", error.message);
        next(error);
    }
};

