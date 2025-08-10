import React from "react";

const ConditionFilter = () => {
  const conditions = ["New", "Used", "Refurbished"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Condition</h3>
      {conditions.map((cond, idx) => (
        <label key={idx} className="flex items-center gap-2">
          <input type="checkbox" />
          {cond}
        </label>
      ))}
    </div>
  );
};

export default ConditionFilter;
