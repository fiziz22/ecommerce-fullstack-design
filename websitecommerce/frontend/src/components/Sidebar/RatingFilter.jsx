import React from "react";

const RatingFilter = () => {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Rating</h3>
      {ratings.map((rating) => (
        <label key={rating} className="flex items-center gap-2">
          <input type="checkbox" />
          {"⭐".repeat(rating)}
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
