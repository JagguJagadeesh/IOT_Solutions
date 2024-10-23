import React from 'react';
import {RotatingLines} from 'react-loader-spinner';

function Spinner() {
  return (
    <div className='text-center text-black'>
        <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Spinner