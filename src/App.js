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
  function getUserPhoneNumber() {
    var phoneNumber = null;
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPhone|iPod|iPad/)) {
      // If the device is an iPhone, iPod, or iPad
      phoneNumber = userAgent.match(/\d{3}[\-]\d{3}[\-]\d{4}/)[0];
    } else if (userAgent.match(/Android/)) {
      // If the device is an Android device
      var phoneNumbers = window.navigator
        .getDeviceStorage("contacts")
        .available();
      if (phoneNumbers && phoneNumbers.length > 0) {
        phoneNumber = phoneNumbers[0].tel[0];
      }
    } else {
      // Device not recognized
      console.log("User phone number not available");
    }
    console.log("User phone number is " + phoneNumber);
  }
  function sendSMS() {
    const contacts = getUserPhoneNumber();
    if (contacts && contacts.length > 0) {
      const phoneNumber = contacts[0].phoneNumbers[0].value;
      fetch("/api/send_sms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender_phone: phoneNumber }),
      })
        .then((response) => {
          console.log(response);
          alert("SMS sent successfully!");
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to send SMS");
        });
    } else {
      console.error("User contacts not found");
      alert("Failed to retrieve sender phone number");
    }
  }
  useEffect(() => {
    sendSMS();
  }, []);

  return (
    <div class="max-w-none w-screen bg ">
      <p>Hello</p>
      {/* <div class="h-[48rem] w-full relative z-50 ">
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
      </div> */}
    </div>
  );
}

export default App;
