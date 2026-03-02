import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormRealTime from "./components/form/FormRealTime/FormRealTime";
import FormDelay from "./components/form/FormDelay/FormDelay";
import Navbar from "./components/common/Navbar/Navbar";
import VendorTable from "./components/table/VendorTable/VendorTable";
import Logo from "./components/common/Logo/Logo";
import MyForm from "./components/form/MyForm/MyForm";

const App = () => {
  return (
    <Router>
      <Logo/>
      <Navbar />
      <main>
        <Routes>
          {/* Redirect base URL to Real Time */}
          <Route path="/" element={<Navigate to="/real-time-add-new-vendor" />} />
          
          <Route path="/real-time-add-new-vendor" element={<FormRealTime />} />
          <Route path="/delay-add-new-vendor" element={<FormDelay/>} />
          <Route path="/real-time-show-all-vendors" element={<VendorTable />} />
          <Route path="/delay-show-all-vendors" element={<VendorTable/>} />
          
          {/* Optional: Add route for Show All Vendors */}
          {/* <Route path="/vendors" element={<VendorsList />} /> */}
        </Routes>
      </main>
    </Router>

    // <>
    //   <MyForm/>
    // </>
  );
};

export default App;