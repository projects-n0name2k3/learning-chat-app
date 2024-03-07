import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className="cursor-pointer label gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            name=""
            id=""
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className="cursor-pointer label gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            name=""
            id=""
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
