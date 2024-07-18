"use client";

import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-[10px] px-6 py-3 capitalize shadow-none ${active === filter.value ? "bg-primary-100" : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 hover:dark:bg-dark-300"}`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
