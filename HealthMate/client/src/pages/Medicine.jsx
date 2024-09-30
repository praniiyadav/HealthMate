import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicines = async () => {
      setLoading(true);
      const queryParams = new URLSearchParams(location.search);
      const search = queryParams.get("search");

      try {
        const response = await axios.get(`http://localhost:3000/api/medicines${search ? `?search=${search}` : ''}`);
        setMedicines(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, [location.search]);

  const handleAddMedicine = async (medicineId) => {
    const timeInterval = prompt("Enter time interval in hours:");
    if (!timeInterval) return;

    try {
      await axios.post('http://localhost:3000/api/myMedicines', { medicineId, timeInterval }, { withCredentials: true });
      alert("Medicine added successfully!");
    } catch (error) {
      alert(`Error adding medicine: ${error.message}`);
    }
  };

  const handleViewDetails = (medicineId) => {
    navigate(`/medicines/${medicineId}`);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      {medicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <div key={medicine._id} className="border rounded-lg p-4 bg-white shadow-lg flex flex-col items-center">
              <img src={medicine.ImageURL} alt={medicine.MedicineName} className="mb-3 w-32 h-32 object-cover" />
              <h2 className="text-xl font-semibold text-center mb-2">{medicine.MedicineName}</h2>
              <p className="text-lg font-bold mb-1">Price: ₹{medicine.Price}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleAddMedicine(medicine._id)}
              >
                Add
              </button>
              <button
                className="mt-2 text-sm text-blue-700 underline"
                onClick={() => handleViewDetails(medicine._id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No medicines found.</p>
      )}
    </div>
  );
};

export default Medicine;
