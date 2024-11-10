import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Regsiter />} />
          <Route exact path="/details/:id" element={<DetailsPages />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
