import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

let init = {
  first: "",
  second: "",
};

const Home = () => {
  const [formDet, setFormDet] = useState(init);
  const [carrystr, setCarrystr] = useState([]);
  const [sumstr, setSumstr] = useState([]);
  const handlefirst = (e) => {
    const { name, value } = e.target;
    setFormDet({ ...formDet, [name]: value });
  };

  const handleSubmit = async (e) => {
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
      <form onSubmit={handleSubmit}>
        <div className="numberdiv">
          <h6 className="firstnum">First number</h6>
          <input
            type={"number"}
            className="firstnumber"
            onInput={handlefirst}
            required
            name="first"
            value={formDet.first}
          ></input>
        </div>
        <div className="numberdiv">
          <h6 className="firstnum">Second number</h6>
          <input
            type={"number"}
            className="firstnumber"
            onInput={handlefirst}
            required
            name="second"
            value={formDet.second}
          ></input>
        </div>
        <button type="submit" className="submitbtn">
          Generate Steps
        </button>
      </form>
      <div className="ansouterbox">
        <div className="ansinnerbox">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
