import React from "react";
import { ISelectProps } from "@components/common/Select/types";
import s from "./index.module.scss";

const Select: React.FC<ISelectProps> = ({ label, value, items, onChange }) => {
  return (
    <label className={s.root}>
      <span className={s.label}>{label}</span>
      <select className={s.select} value={value} onChange={onChange}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
