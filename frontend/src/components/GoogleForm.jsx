import React, { useState } from "react";

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    partyName: "",
    address: "",
    contactName: "",
    contactNumber: "",
    whatsappNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // backend api
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Google Form</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter Contact Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-medium">Address</label>
          <input
            type="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-medium">Contact Name</label>
          <input
            type="contactName"
            name="text"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter contact name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-gray-700 font-medium">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter contact number"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700 font-medium">Whatsapp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter whatsapp number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GoogleForm;
