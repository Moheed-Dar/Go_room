"use client";
import React, { useState } from "react";
import { User, Edit, Save, X, Home } from "lucide-react";
import Footer from "../Components/Footer";
import Link from 'next/link';
const UserDetails = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [editingField, setEditingField] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    phone: "",
    email: "",
  });
  // these are using in my navbar
  const tabs = [
    { id: "personal", label: "Personal Details" },
    { id: "security", label: "Security Settings" },
    { id: "trading", label: "Order Travelers" },
    { id: "customization", label: "Customization Preferences" },
    { id: "payment", label: "Payment Methods" },
  ];
  //these are use in input section
  const personalDetails = [
    { label: "Full Name", placeholder: "Name", key: "fullName" },
    { label: "Display Name", placeholder: "Display Name", key: "displayName" },
    { label: "Phone", placeholder: "Phone", key: "phone" },
    { label: "Email Address", placeholder: "Email", key: "email" },
    {
      label: "Date Of Birth",
      placeholder: "Date of Birth",
      key: "DateofBirth",
    },
    { label: "Nationality", placeholder: "Nationality", key: "Nationality" },
    { label: "Address", placeholder: "Address", key: "Address" },
    { label: "Gender", placeholder: "Gender", key: "Gender" },
    {
      label: "Passport Details",
      placeholder: "Passport Details",
      key: "PassportDetials",
    },
  ];
  const SecurityDetails = [
    {
      label: "Passkeys",
      name: "Signin",
      key: "fullName",
      value:
        "Easily and securely access your account without having to remember passwords",
    },
    {
      label: "Two-factor authentication",
      name: "Signin",
      key: "displayName",
      value:
        "Increase your account’s security by setting up two-factor authentication.",
    },
    {
      label: "Active sessions",
      name: "Signin",
      key: "phone",
      value:
        "Selecting “Sign out” will sign you out from all devices except this one. This can take up to 10 minutes.",
    },
    {
      label: "Delete Account",
      name: "Delete Account",
      key: "email",
      value: "Permanently delete your Booking.com account",
    },
  ];

  const OthersTravel = [
    {
      name: "Signin",
      key: "fullName",
      value: "Add info about the people you’re travelling with.z",
    },
  ];

  const CustomPre = [
    {
      label: "Currency",
      name: "Currency",
      key: "Currency",
      value: "USD",
    },
    {
      label: "Language",
      name: "language",
      key: "language",
      value: "Amercian English.",
    },
  ];
  const pmethod = [
    {
      label: "Payment Card",
      name: "Add Card",
      key: "Currency",
      value: "Pay with new Card.",
    },
  ];

  const handleEdit = (key) => setEditingField(key);
  const handleSave = () => setEditingField(null);
  const handleCancel = () => setEditingField(null);
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <div className="relative max-w-full">
      <div className="max-w-full mx-3 md:mx-10 mt-10 p-4 border mb-20  border-black">
        <div className="bg-gray-900 p-4 flex flex-wrap gap-3 justify-between">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 border-b-2 border-transparent"
                }
                focus:outline-none
                ${index === 0 ? "rounded-tl-lg" : ""}
                ${index === tabs.length - 1 ? "rounded-tr-lg" : ""}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-b-md   shadow-md">
          {activeTab === "personal" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="md:text-2xl text-lg font-semibold">
                  Personal Details
                </h2>
                <User className="w-8 h-8 p-1 cursor-pointer border border-gray-600 bg-gray-200 rounded-full text-gray-600" />
              </div>

              <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 py-5 border-black border-b"
                  >
                    <p className="text-black font-medium">{item.label}</p>

                    {editingField === item.key ? (
                      <input
                        type="text"
                        value={formData[item.key]}
                        onChange={(e) =>
                          handleInputChange(item.key, e.target.value)
                        }
                        className="w-full cursor-pointer py-2 border rounded-lg border-gray-600 ps-5"
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={item.placeholder}
                        value={formData[item.key]}
                        disabled
                        className="w-full py-2 border cursor-pointer rounded-lg border-gray-300 ps-5 bg-gray-100 text-gray-600"
                      />
                    )}

                    <div className="text-gray-800 flex justify-end">
                      {editingField === item.key ? (
                        <div className="flex gap-2 ">
                          <button
                            onClick={handleSave}
                            className="px-3 py-2 text-sm cursor-pointer text-green-600 hover:text-green-800 hover:bg-green-50  rounded-md flex items-center gap-1"
                          >
                            <Save className="w-4 h-4" />
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-3 py-2 text-sm cursor-pointer text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md flex items-center gap-1"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(item.key)}
                          className="px-3 py-2 text-sm text-blue-600 cursor-pointer hover:text-blue-800 hover:bg-blue-50 rounded-md flex items-center gap-1"
                        >
                          <Edit className="w-4 h-4 " />
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            {activeTab === "security" && (
              <>
                <div className="p-6">
                  <h2 className="md:text-2xl text-lg font-semibold">
                    Security Settings
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 mx-10 sm:grid-cols-2 gap-4">
                  {SecurityDetails.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 py-5 border-black border-b"
                    >
                      <p className="text-black font-medium">{item.label}</p>

                      <p
                        readOnly
                        className="w-full cursor-pointer col-span-3 py-2 md:mx-20 bg-white"
                      >
                        {item.value}
                      </p>

                      <div className="text-gray-800 flex justify-end">
                        <button className="text-black underline">
                          {item.name}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            {activeTab === "trading" && (
              <>
                <div className="p-6">
                  <h2 className="md:text-2xl text-lg font-semibold">
                    Others Travelers
                  </h2>
                </div>
                <div className="grid md:grid-cols-1 mx-10 sm:grid-cols-2 gap-4">
                  {OthersTravel.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 py-5 border-black border-b"
                    >
                      <p className="text-black ">{item.value}</p>
                      <div className="text-gray-800 flex justify-end">
                        <button className="text-white bg-black py-3 px-5 ">
                          Add Transfer +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div>
            {activeTab === "customization" && (
              <>
                <div className="p-6">
                  <h2 className="md:text-2xl text-lg font-semibold">
                    Customization Preferences
                  </h2>
                </div>
                <div className="grid md:grid-cols-1 mx-10 sm:grid-cols-2 gap-4">
                  {CustomPre.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 py-5 border-black border-b"
                    >
                      <p className="text-black font-medium">{item.label}</p>
                      <p
                        readOnly
                        className="w-full cursor-pointer justify-center col-span-1 py-2 md:mx-20 bg-white"
                      >
                        {item.value}
                      </p>
                      <div className="text-gray-800 flex justify-end">
                        <button className="text-black underline">
                          {item.name}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div>
            {activeTab === "payment" && (
              <>
                <div className="p-6">
                  <h2 className="md:text-2xl text-lg font-semibold">
                    Payment Method
                  </h2>
                </div>
                <div className="grid md:grid-cols-1 mx-10 sm:grid-cols-2 gap-4">
                  {pmethod.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 py-5 border-black border-b"
                    >
                      <p className="text-black font-medium">{item.label}</p>
                      <p
                        readOnly
                        className="w-full cursor-pointer justify-center col-span-1 py-2 md:mx-20 bg-white"
                      >
                        {item.value}
                      </p>
                      <div className="text-gray-800 flex justify-end">
                        <button className="text-black underline">
                          {item.name}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="grid w-full fixed bottom-0 grid-cols-3 items-center mt-20 bg-gray-100 py-3 justify-between  px-5">
        <div>
          <a className="font-semibold text-sm md:text-md">Accessibility</a>
        </div>
        <div>
          <a className=" font-semibold justify-center  text-sm md:text-md flex  ">
            All rights recerved 2025@go_room
          </a>
        </div>
        <div>
          <a className="font-semibold justify-end flex text-sm md:text-md items-center">
            Legal Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
