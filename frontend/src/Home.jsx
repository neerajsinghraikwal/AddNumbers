import React, { useState } from "react";
import "./Home.css";

let init = {
  first: "",
  second: "",
};
const Home = () => {
  const [formDet, setFormDet] = useState(init);
  const handlefirst = (e) => {
    const { name, value } = e.target;
    setFormDet({ ...formDet, [name]: value });
  };

  return (
    <div className="outerbox">
      <div className="headerbox">
        <h1 className="heading">Step Addition</h1>
      </div>
      <form>
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
    </div>
  );
};

export default Home;
