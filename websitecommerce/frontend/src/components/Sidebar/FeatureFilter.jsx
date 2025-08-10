import React from "react";

const FeatureFilter = () => {
  const features = ["Waterproof", "Wireless", "Bluetooth", "Noise Cancelling"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Features</h3>
      {features.map((feature, idx) => (
        <label key={idx} className="flex items-center gap-2">
          <input type="checkbox" />
          {feature}
        </label>
      ))}
    </div>
  );
};

export default FeatureFilter;
