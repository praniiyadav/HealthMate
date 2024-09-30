import React from "react";
import { Button, Carousel } from "flowbite-react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleViewMedicine = () => {
    navigate(`/medicines/`);
  };

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
        </Carousel>
      </div>
      <div className="p-8 bg-[#f0f8ff] shadow-md text-center">
        <h1 className="text-4xl text-[#007bff] mb-2">
          Your Health, Our Priority
        </h1>
        <p className="text-lg text-[#555]">
          Discover the best medicines and healthcare products curated just for
          you.
        </p>
        <div className="mt-5 flex justify-center">
          <Link to="/medicines">
            <Button className="py-2 px-5 text-white bg-[#007bff] rounded-lg hover:bg-[#91bcea] transition-colors duration-300">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 p-10 bg-[#e9f5ff] shadow-md text-center">
        <h2 className="text-3xl text-[#333] mb-2">
          Welcome to Our Online Pharmacy
        </h2>
        <p className="text-base text-[#555]">
          We are dedicated to providing you with the best healthcare products
          and services. Whether you're looking for prescription medicines,
          over-the-counter drugs, or health supplements, we've got you covered.
        </p>
      </div>
      <div className="mb-10 mt-10 p-5 bg-[#e9f5ff]	shadow-md flex justify-center gap-5">
        <div className="text-center p-5 bg-white rounded-lg shadow-md flex-1">
          <i className="fas fa-truck text-4xl text-[#007bff] mb-3"></i>
          <h3 className="text-xl text-[#333] mb-2">Fast Delivery</h3>
          <p className="text-base text-[#555]">
            Get your medicines delivered to your doorstep quickly and safely.
          </p>
        </div>
        <div className="text-center p-5 bg-[#ffffff] rounded-lg shadow-md flex-1">
          <i className="fas fa-shield-alt text-4xl text-[#007bff] mb-3"></i>
          <h3 className="text-xl text-[#333] mb-2">Trusted Quality</h3>
          <p className="text-base text-[#555]">
            All our products are sourced from reputable manufacturers and
            suppliers.
          </p>
        </div>
        <div className="text-center p-5 bg-white rounded-lg shadow-md flex-1">
          <i className="fas fa-user-md text-4xl text-[#007bff] mb-3"></i>
          <h3 className="text-xl text-[#333] mb-2">Expert Advice</h3>
          <p className="text-base text-[#555]">
            Our team of pharmacists and healthcare professionals are here to
            help you.
          </p>
        </div>
      </div>
    </>
  );
}
