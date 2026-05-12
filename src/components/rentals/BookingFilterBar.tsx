"use client";

import type { FC, ChangeEvent } from "react";
import { useState } from "react";

export const BookingFilterBar: FC = () => {
  const [experienceType, setExperienceType] = useState("all");
  const [dateRange, setDateRange] = useState("");
  const [groupSize, setGroupSize] = useState("2");

  const handleExperienceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setExperienceType(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateRange(event.target.value);
  };

  const handleGroupSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroupSize(event.target.value);
  };

  return (
    <div className="bg-surface-container border-b border-outline-variant sticky top-24 z-40">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div>
            <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Experience Type
            </label>
            <select
              value={experienceType}
              onChange={handleExperienceChange}
              className="mt-3 w-full bg-transparent border-0 border-b border-outline py-2 text-body-md text-on-surface focus:ring-0 focus:border-primary"
            >
              <option value="all">All Experiences</option>
              <option value="atv">ATV Rentals</option>
              <option value="horse">Horse Sessions</option>
              <option value="guided">Guided Experiences</option>
            </select>
          </div>
          <div>
            <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Date Range
            </label>
            <input
              type="date"
              value={dateRange}
              onChange={handleDateChange}
              className="mt-3 w-full bg-transparent border-0 border-b border-outline py-2 text-body-md text-on-surface focus:ring-0 focus:border-primary"
            />
          </div>
          <div>
            <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
              Group Size
            </label>
            <input
              type="number"
              min="1"
              value={groupSize}
              onChange={handleGroupSizeChange}
              className="mt-3 w-full bg-transparent border-0 border-b border-outline py-2 text-body-md text-on-surface focus:ring-0 focus:border-primary"
            />
          </div>
          <button className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md uppercase tracking-widest">
            Filter Results
          </button>
        </div>
      </div>
    </div>
  );
};
