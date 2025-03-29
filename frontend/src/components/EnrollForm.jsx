import React, { useState } from "react";

const areas = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function EnrollmentForm() {
  const reasonsList = [
    "Price High",
    "Quality Not Matching",
    "Pack Size Issue",
    "Right Person Not Available",
    "Product Already Present",
    "Not in Rice Business",
    "Payment Terms",
    "Other"
  ];

  const ddCodeOptions = [
    "Price Hike",
    "Packaging Issue",
    "Quality Mismatch",
    "Other"
  ];

  const initialFormState = {
    partyName: "",
    address: "",
    contactName: "",
    contactNumber: "",
    whatsappNumber: "",
    areaData: areas.reduce((acc, area) => {
      acc[area] = {
        interested: false,
        ddCode: "",
        ddCodeOther: "",
        weeklyConsumption: "",
        orderQty: "",
        reason: "",
        otherReason: ""
      };
      return acc;
    }, {})
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleAreaChange = (area, field, value) => {
    setFormData((prev) => ({
      ...prev,
      areaData: {
        ...prev.areaData,
        [area]: {
          ...prev.areaData[area],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    setFormData(initialFormState); // Reset form after submission
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">NBD - Enrollment Form</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Party Name" className="border p-2 rounded w-full" value={formData.partyName} onChange={(e) => setFormData({ ...formData, partyName: e.target.value })} />
        <input type="text" placeholder="Address" className="border p-2 rounded w-full" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        <input type="text" placeholder="Contact Name" className="border p-2 rounded w-full" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} />
        <input type="text" placeholder="Contact Number" className="border p-2 rounded w-full" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} />
        <input type="text" placeholder="WhatsApp Number" className="border p-2 rounded w-full" value={formData.whatsappNumber} onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })} />
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Area-Wise Data</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Area</th>
              <th className="border p-2">Interested</th>
              <th className="border p-2">DD Code</th>
              <th className="border p-2">Weekly Consumption</th>
              <th className="border p-2">Order Qty</th>
              <th className="border p-2">Reason (if not enrolled)</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area) => (
              <tr key={area} className="border">
                <td className="border p-2 text-center font-semibold">{area}</td>
                <td className="border p-2 text-center">
                  <input type="checkbox" checked={formData.areaData[area].interested} onChange={(e) => handleAreaChange(area, "interested", e.target.checked)} />
                </td>
                <td className="border p-2 text-center">
                  <select
                    className="border rounded p-1 w-full"
                    value={formData.areaData[area].ddCode}
                    onChange={(e) => handleAreaChange(area, "ddCode", e.target.value)}
                  >
                    <option value="">Select DD Code</option>
                    {ddCodeOptions.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                  {formData.areaData[area].ddCode === "Other" && (
                    <input
                      type="text"
                      className="border p-1 rounded mt-1 w-full"
                      placeholder="Specify Other DD Code"
                      value={formData.areaData[area].ddCodeOther}
                      onChange={(e) => handleAreaChange(area, "ddCodeOther", e.target.value)}
                    />
                  )}
                </td>
                <td className="border p-2 text-center">
                  <input type="number" className="border rounded p-1 w-full" value={formData.areaData[area].weeklyConsumption} onChange={(e) => handleAreaChange(area, "weeklyConsumption", e.target.value)} />
                </td>
                <td className="border p-2 text-center">
                  <input type="number" className="border rounded p-1 w-full" value={formData.areaData[area].orderQty} onChange={(e) => handleAreaChange(area, "orderQty", e.target.value)} />
                </td>
                <td className="border p-2">
                  <select
                    className="border rounded p-1 w-full"
                    value={formData.areaData[area].reason}
                    onChange={(e) => handleAreaChange(area, "reason", e.target.value)}
                  >
                    <option value="">Select Reason</option>
                    {reasonsList.map((reason, idx) => (
                      <option key={idx} value={reason}>{reason}</option>
                    ))}
                  </select>
                  {formData.areaData[area].reason === "Other" && (
                    <input
                      type="text"
                      className="border p-1 rounded mt-1 w-full"
                      placeholder="Specify Other Reason"
                      value={formData.areaData[area].otherReason}
                      onChange={(e) => handleAreaChange(area, "otherReason", e.target.value)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}