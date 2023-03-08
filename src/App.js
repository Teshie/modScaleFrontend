import "./App.css";
import logo from "./assets/logo.png";
import headerBackground from "./assets/headerbg.png";
import avatar from "./assets/avatar.svg";
import illust from "./assets/illust.png";
import illustration from "./assets/illustration.png";
import Monetize from "./components/Monetize";
import Deals from "./components/Deals";
import PricingModel from "./components/PricingModel";
import RevenueManagement from "./components/RevenueManagement";
import CustomerReview from "./components/CustomerReview";
import Subscription from "./components/Subscription";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/emails/users/", { email })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for subscribing!",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.email,
        });

        // console.log(err);
      });
  };
  return (
    <div className="w-full bg ">
      <div className="h-[46rem] w-full relative z-50">
        <img className="h-full w-full" src={headerBackground} alt="logo" />
      </div>
      <div className="absolute z-50  top-4 w-full p-2 flex justify-center space-x-6">
        <Header />
        <Hero />
      </div>
      <div className=" relative z-30">
        <Monetize />
        <Deals />
        <PricingModel />
        <RevenueManagement />
        <div className="flex justify-center items-center mb-10 text-4xl font-bold">
          <p>Why customers love us?</p>
        </div>
        <CustomerReview />
        <Subscription />
      </div>
      <div>
        <img
          class="absolute top-16 right-0 bottom-0 z-10"
          src={avatar}
          alt="Background image"
        />
      </div>
    </div>
  );
}

export default App;
