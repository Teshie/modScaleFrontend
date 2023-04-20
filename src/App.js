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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Test from "./components/BannerFooter";
import BottomFooter from "./components/BottomFooter";
import BannerFooter from "./components/BannerFooter";
function App() {
  return (
    <div class="max-w-none w-screen bg ">
      <div class="h-[48rem] w-full relative z-50 ">
        <img class="h-full w-full" src={headerBackground} alt="logo" />
      </div>
      <div class="absolute z-50 top-4 w-full p-2 flex justify-center space-x-6">
        <Header />
        <Hero />
      </div>
      <div class="relative z-30">
        <Monetize />
        <Deals />
        <PricingModel />
        <RevenueManagement />
        <CustomerReview />
        <BannerFooter />
        <BottomFooter />
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
