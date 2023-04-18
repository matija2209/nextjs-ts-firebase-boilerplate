import React, { CSSProperties, useState } from 'react'
import { BounceLoader } from 'react-spinners'

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

function Spinzo({loading}:{loading:boolean}) {
    let [color, setColor] = useState("#D06300");

  return (
    <BounceLoader
        color={color}
        loading={loading}
        cssOverride={override}  
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Spinzo