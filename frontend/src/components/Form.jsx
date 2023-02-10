import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'

let init = {
    first: "",
    second: "",
  };
const Form = ({handleSubmit,loading}) => {
    const [formDet, setFormDet] = useState(init);

    // filling the formData
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
        <Button type="submit" className="submitbtn" isLoading={loading} loadingText="Loading" colorScheme='teal'
    variant='outline'>
          Generate Steps
        </Button>
      </form>
    </>
  )
}

export default Form