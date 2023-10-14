import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <h1 className="header" data-testid="randomName">
      {title}
    </h1>
  );
}
