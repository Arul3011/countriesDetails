import React from "react";

import Container from "./Container";
import Cards from "./Cards";
import { Outlet } from "react-router-dom";
const Home = (props) => {
  return (
    <div>
      <Container
        setUrl={props.setUrl}
        search={props.search}
        setSearch={props.setSearch}
        setCount={props.setCount}
      />
      <Cards count={props.count} search={props.search} alret={props.alret} />
    </div>
  );
};

export default Home;
