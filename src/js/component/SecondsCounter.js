import React from "react";

const SecondsCounter = (props) => {
  // Function to format seconds with leading zeros
  const formatSeconds = (seconds) => {
    let secondString = seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 6,
      useGrouping: false
    });
    // Insert space characters between each number
    return secondString.split('');
  };
  return (
    <>                                 
      <div className="container text-center m-5 p-3 div">
        <div className="d-flex align-items-center justify-content-center">
        <i className="fa-regular fa-clock align-items-center reloj me-1 border rounded px-3 py-4"></i>
        <div className="d-inline-flex">
          {formatSeconds(props.seconds).map((number, index) => (
            <div key={index} className="border border-dark rounded bg-danger py-1 px-3 m-1">
              {number}
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

  

//const SecondsCounter = (props) => {
 // return (
   // <>
     // <div className="container text-center mt-5 div">
      //  <i className="fa-regular fa-clock reloj me-3 align-conten-center"></i>
       // {`${props.millon}`}  {`${props.decenasDeMiles}`}  {`${props.miles}`}{" "}
       // {`${props.decenas}`} {`${props.centenas}`} {`${props.unidades}`}
      //</div>
    //</>
  //);
//};

// const SecondsCounter = (props) => {
//   const formattedSeconds = props.seconds.toString().padStart(6, '0'); // Formatea los segundos con 6 dígitos y ceros a la izquierda

//   return (
//     <div className='container text-center mt-5 div'>{formattedSeconds}</div>
//   );
// };

export default SecondsCounter;
