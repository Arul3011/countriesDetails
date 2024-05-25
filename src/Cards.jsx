import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const filteredData = props.count.filter((nam) => {
    if (!props.search) return true;
    return (
      nam &&
      nam.name &&
      nam.name.common.toLowerCase().includes(props.search.toLowerCase())
    );
  });
  return (
    <div className="mt-10 mx-auto text-slate-700 flex justify-evenly al flex-wrap gap-y-5 container">
      {filteredData.length === 0
        ? props.alret
        : filteredData.map((val, index) => (
            <Link
              to={`/${val.name.common}`}
              key={index}
              className="bg-white shadow-[1px_1px_5px_gray] w-72 h-auto rounded overflow-hidden cursor-pointer hover:shadow-[1px_1px_20px_gray]"
            >
              <img
                src={val.flags.svg}
                className="w-full h-auto"
                alt={val.name.common}
              />
              <div className="p-4 mt-2">
                <h4 className="font-bold p-1">{val.name.common}</h4>
                <p className="p-1">
                  Population: <span>{val.population}</span>
                </p>
                <p className="p-1">
                  Region: <span>{val.region}</span>
                </p>
                <p className="p-1">
                  Capital: <span>{val.capital}</span>
                </p>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Cards;
