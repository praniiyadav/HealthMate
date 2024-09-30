import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import {Button} from 'flowbite-react'

const MedicineDetail = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:3000/api/medicines/${id}`
        );
        setMedicine(response.data);
      } catch (error) {
        setError("Failed to load medicine details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (!medicine)
    return (
      <p className="text-center text-gray-600">
        No medicine details available.
      </p>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        {medicine.MedicineName}
      </h1>
      <div className="flex flex-col items-center">
        <img
          src={medicine.ImageURL || "/path/to/default-image.jpg"}
          alt={medicine.MedicineName}
          className="w-64 h-64 object-cover mb-4"
        />
        <div className="flex">
          <p className="text-lg font-bold mt-2">Price: ₹{medicine.Price}</p>
          <Link><Button gradientDuoTone="purpleToBlue" className="ml-2 w-20 ">Add</Button> </Link>
        </div>

        <div className="mt-4 max-w-4xl">
          <p>
            <strong>Composition:</strong> {medicine.Composition || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Introduction:</strong> {medicine.Introduction || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Benefits:</strong> {medicine.Benefits || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Description:</strong> {medicine.Description || "N/A"}
          </p>
          <p className="mt-2">
            <strong>How To Use:</strong> {medicine.HowToUse || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Safety Advice:</strong> {medicine.SafetyAdvice || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Packaging:</strong> {medicine.Packaging || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Quantity:</strong> {medicine.Quantity || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Primary Use:</strong> {medicine.PrimaryUse || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Storage:</strong> {medicine.Storage || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Symptoms:</strong> {medicine.Symptoms || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Side Effects:</strong> {medicine.SideEffects || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Alcohol Interaction:</strong>{" "}
            {medicine.AlcoholInteraction || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Pregnancy Interaction:</strong>{" "}
            {medicine.PregnancyInteraction || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Driving Interaction:</strong>{" "}
            {medicine.DrivingInteraction || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Manufacturer:</strong> {medicine.Manufacturer || "N/A"}
          </p>
          <p className="mt-2">
            <strong>Q&A:</strong> {medicine.Q_A || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetail;
