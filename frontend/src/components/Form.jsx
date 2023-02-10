import React, { useState } from 'react'

let init = {
    first: "",
    second: "",
  };
const Form = ({handleSubmit}) => {
    const [formDet, setFormDet] = useState(init);
    const handlefirst = (e) => {
        const { name, value } = e.target;
        setFormDet({ ...formDet, [name]: value });
      };

  return (
    <>
        <form onSubmit={(event) => handleSubmit(event, formDet)}>
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
    </>
  )
}

export default Form