import React, { useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import Form from "../components/Form";

const Home = () => {
  const [carrystr, setCarrystr] = useState([]);
  const [sumstr, setSumstr] = useState([]);

  const handleSubmit = async (e, formDet) => {
    e.preventDefault();
    let data = await axios.post(`https://addnumbers.onrender.com`, formDet);
    setCarrystr(data.data.carryingarr);
    setSumstr(data.data.sumarr);
  };

  return (
    <div className="outerbox">
      <div className="headerbox">
        <h1 className="heading">Step Addition</h1>
      </div>
      <Form handleSubmit={handleSubmit}></Form>
      <div className="ansouterbox">
      <div className="ansinnerbox">
      {sumstr.length > 0 ? <>
          <p className="yellow">&#123;</p>
          {sumstr?.map((el, index) => {
            return (
              <div className="innerchat" key={index}>
                <span className="cyan">{`step${index}:`} </span>
                <span className="yellow">&#123;"carryString": </span>
                <span className="orange">{carrystr[index]}</span>
                <span className="yellow">, "sumString": </span>
                <span className="orange">{el} </span>
                <span className="yellow">&#125;</span>
              </div>
            );
          })}
          <p className="yellow">&#125;</p> 
        </>: null}
        </div>
      </div>
    </div>
  );
};

export default Home;
