import React from "react";

const GenderCheckBox = ({ handleCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          htmlFor=""
          className={`cursor-pointer label gap-2 ${
            selectedGender === "boy" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            name=""
            id=""
            checked={selectedGender === "boy"}
            onChange={() => handleCheckBoxChange("boy")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          htmlFor=""
          className={`cursor-pointer label gap-2 ${
            selectedGender === "girl" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            name=""
            id=""
            checked={selectedGender === "girl"}
            onChange={() => handleCheckBoxChange("girl")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
