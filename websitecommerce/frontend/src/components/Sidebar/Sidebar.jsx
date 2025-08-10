import React from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import FeatureFilter from "./FeatureFilter";
import PriceFilter from "./PriceFilter";
import ConditionFilter from "./ConditionFilter";
import RatingFilter from "./RatingFilter";

const Sidebar = () => {
  return (
    <aside className="w-1/4 space-y-6">
      <CategoryFilter />
      <BrandFilter />
      <FeatureFilter />
      <PriceFilter />
      <ConditionFilter />
      <RatingFilter />
    </aside>
  );
};

export default Sidebar;
