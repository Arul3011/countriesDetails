import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = ({ count }) => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-5">
      <Link to={'/'} className="shadow-[1px_1px_5px_gray] px-5 py-2 rounded" >BACK</Link>
    <div className="container mx-auto w-100 flex justify-around items-center sm:h-[80vh]">
      {count
        .filter((val) => {
          return id === val.name.common || id == val.cca3;
        })
        .map((item) => (
          <div className="flex flex-col sm:flex-row ">
            <div className="w-100 sm:w-1/2 flex justify-center items-center">
              <img src={item.flags.svg} className=" p-5 w-fit h-full drop-shadow-2xl z-0" alt={item.name.common} />
            </div>
            <div className=" w-100 sm:w-1/2 flex justify-center mt-5 items-start">
                <div className="p-5 ">
                  <h1 className=" font-bold text-2xl">{item.name.common}</h1>
                  <p className="text-xl">Native Name: {item.name.common}</p>
                  <p className="text-xl">Pouplation: {item.population}</p>
                  <p className="text-xl">Sub Region: {item.subregion}</p>
                  <p  className="text-xl">Capital: {item.capital}</p>
                  <br />
                  {Object.keys(item.currencies).map(val => <p  className="text-xl" key={val}>Currencies: {item.currencies[`${val}`].name}</p>)}
                  <p className="text-2x1">Languages:{Object.keys(item.languages).map(key => <span className="text-x1"> {item.languages[`${key}`]},</span>)}</p>
                  <h1  className="text-xl font-semibold">Border Countries:</h1>
                  <div className="w-100 mt-5 flex flex-wrap" >
                    {item.borders && item.borders.map((val)=> <Link to={`/${val}`} className="m-2 px-4 py-2 rounded shadow-[1px_1px_5px_gray]">{val}</Link>)}
                  </div>
                </div>

            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Details;
