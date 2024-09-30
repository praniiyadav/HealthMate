import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import myMedicineRoutes from "./routes/myMedicineRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true, // Allow credentials
};

// Use CORS middleware
app.use(cors(corsOptions));


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  // .then(() => {
  //   const testData = [
  //     {
  //       MedicineName: "Pandol",
  //       AgeGroup: "Below 18, 18+,30+",
  //       Symptoms: "Fever, Headache, Mild to Moderate pain",
  //       Description:
  //         "Panadol is paracetamol (acetaminophen), a widely used over-the-counter analgesic (pain reliever) and antipyretic (fever reducer)",
  //     },
  //     {
  //       MedicineName: "Metaformin",
  //       AgeGroup: "18+",
  //       Symptoms: "High Blood Sugar",
  //       Description:
  //         "used to control high blood sugar in people with type 2 diabetes. It helps improve insulin sensitivity and reduce glucose production in the liver.",
  //     },
  //     {
  //       MedicineName: "Liv-52",
  //       AgeGroup: "18+",
  //       Symptoms: "Liver Disorders, Loss of Appetite, Hepatitis",
  //       Description:
  //         "Promotes appetite, improves digestion, liver damage, jaundice, Hepatitis A & B",
  //     },
  //     {
  //       MedicineName: "Maltovita",
  //       AgeGroup: "Below 18 and 18+",
  //       Symptoms: "Nutritional Deficiencies, Fatigue, Weakness",
  //       Description: "",
  //     },
  //     {
  //       MedicineName: "Ibuprofen",
  //       AgeGroup: "Below 18",
  //       Symptoms: "Inflammation (e.g., arthritis, sprains)",
  //       Description:
  //         " (NSAID) used to reduce fever, pain, and inflammation. Inhibits COX-1 and COX-2 enzymes involved in prostaglandin production.",
  //     },
  //     {
  //       MedicineName: "Lisinopril",
  //       AgeGroup: "18+",
  //       Symptoms:
  //         "Hypertension (high blood pressure), heart failure, and to improve survival after a heart attack.",
  //       Description:
  //         "An ACE inhibitor that relaxes blood vessels, reducing blood pressure and improving blood flow.",
  //     },
  //     {
  //       MedicineName: "Atenolol",
  //       AgeGroup: "18+",
  //       Symptoms:
  //         "Hypertension (high blood pressure), angina (chest pain), and heart rhythm disorders",
  //       Description:
  //         "A beta-blocker that reduces heart rate and blood pressure by blocking adrenaline effects on the heart.",
  //     },
  //     {
  //       MedicineName: "Atarax",
  //       AgeGroup: "18+",
  //       Symptoms:
  //         "Anxiety, itching from allergies, nausea, and as a preoperative sedative.",
  //       Description:
  //         "An antihistamine used to treat anxiety, nausea, and allergies, and to induce sedation. It works by blocking histamine receptors in the body.",
  //     },
  //     {
  //       MedicineName: "Shelcal",
  //       AgeGroup: "30+",
  //       Symptoms:
  //         "Calcium deficiency, osteoporosis, and conditions related to weak bones.",
  //       Description:
  //         "A calcium and vitamin D3 supplement used to prevent or treat calcium deficiency and support bone health.",
  //     },
  //   ];
  //   return Medicine.insertMany(testData);
  // })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/myMedicines", myMedicineRoutes); 

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
