import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import MyMedicine from '../components/MyMedicine'

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab")?.trim();
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-56 md:flex">
        {/*Sidebar */}
        <DashSidebar />
      </div>
      {/*profile.. */}
      {tab === "profile" && <DashProfile />}
      {tab === "MyMedicine" && <MyMedicine/> }
    </div>
  );
}
