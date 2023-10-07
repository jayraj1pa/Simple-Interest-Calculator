// Importing necessary components from MUI (Material-UI)
import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';

// Importing external CSS styles
import './App.css';

// Define the main App component
function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setlsPrincipleValid] = useState(true)
  const [isRateValid,setlsRateValid] = useState(true)
  const [isYearvalid,setlsYearValid] = useState(true)



  const validInput = (e)=>{
      const {name,value} = e.target
      if(!!value.match(/^[0-9]+$/)){
        if(name==="principle"){
          setPrinciple(value)
          setlsPrincipleValid(true)
        }else if(name==="rate"){
          setRate(value)
          setlsRateValid(true)
       }else if(name==='year'){
        setYear(value)
        setlsYearValid(true)
       }
        }else{
        if(name==="principle"){
          setPrinciple(value)
          setlsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setlsRateValid(false)
      }else if(name==='year'){
        setYear(value)
        setlsYearValid(false)
      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
        alert("please fill the form completely")
    }else{
      setInterest(principle*rate*year/100)
    }
  }


  const handleResest = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setlsPrincipleValid(0)
    setlsRateValid(0)
    setlsYearValid(0)
  }



  return (
    // Outer container with dark background, centered content
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      {/* Main content container */}
      <div style={{ width: "500px" }} className="bg-light p-5 rounded">
        {/* Title */}
        <h1>Simple Interest Calculator</h1>
        {/* Subtitle */}
        <p>Calculate your simple interest Easily</p>

        {/* Interest card */}
        <div style={{ height: "150px" }} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow">
          {/* Total Simple Interest */}
          <h1>₹ {' '} {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>

        {/* Form for user input */}
        <form className="mt-5" onSubmit={handleSubmit}>
          {/* Principal Amount input */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principal Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>{validInput(e)}} />
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invaliduser input
            </div>
          }
          {/* Rate of Interest input */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate Of Interest (p.a) %" variant="outlined"  value={rate || ""} name='rate' onChange={(e)=>{validInput(e)}} />
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invaliduser input
            </div>
          }

          {/* Time Period input */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time period (Yr)" variant="outlined" value={year || ""}  name='year' onChange={(e)=>{validInput(e)}}/>
          </div>

          {
            !isYearvalid &&
            <div className='mb-3 text-danger fw-bolder'>
              *invaliduser input
            </div>
          }


          {/* Buttons for Calculate and Reset */}
          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{ height: "70px", width: "200px" }} variant="contained" 
            disabled={isPrincipleValid && isRateValid && isYearvalid?false:true}
            >Calculate</Button>
            <Button onClick={handleResest} style={{ height: "70px", width: "200px" }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
