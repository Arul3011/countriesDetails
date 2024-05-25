import { useEffect, useState } from "react";
import "./App.css";
import Details from "./Details";
import Home from "./Home";
import Head from "./Head";
import { Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  const [url, setUrl] = useState("all");
  const [alret, setAlret] = useState("Loading....");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchq = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/${url}`);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setCount(data);
      } catch (err) {
        setAlret(`${err}`);
        console.clear();
      }
    };
    fetchq();
  }, [url]);
  const [count, setCount] = useState([]);

  return (
    <>
      <Head />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setUrl={setUrl}
              search={search}
              setSearch={setSearch}
              setCount={setCount}
              count={count}
              alret={alret}
            />
          }
        />
        <Route path="/:id" element={<Details count={count} />} />
      </Routes>
    </>
  );
};

export default App;
