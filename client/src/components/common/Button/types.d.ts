import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  attach?: "left" | "right";
  // [key: string]: any;
}
