import React from "react";
import "./home.css";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";

export const Home = () => {
  return (
    <>
    <Category />
      <Card />
    </>
  );
};
