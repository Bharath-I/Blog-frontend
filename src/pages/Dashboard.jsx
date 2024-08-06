import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Posts from "../components/Posts";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);

  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div
          className="md:w-56"
          style={{
            background: "linear-gradient(45deg, #E1F9F8, #FFCBFD)",
          }}
        >
          <Sidebar />
        </div>
        <div style={{ flex: 1 }}>
          {tab === "profile" && <Profile />}
          {tab === "posts" && <Posts />}
          {tab === "comments" && <DashComments />}
          {tab === "dash" && <DashboardComp />}
        </div>
      </div>
    </>
  );
}
