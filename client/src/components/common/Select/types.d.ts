import React from "react";

interface ISelectProps extends React.ButtonHTMLAttributes<HTMLSelectElement> {
  items: any[];
  label?: string;
  // [key: string]: any;
}
