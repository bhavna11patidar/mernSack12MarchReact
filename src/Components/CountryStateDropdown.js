import React, {useState,useEffect} from 'react'

export default function CountryStateDropdown() {
  const [country, setCountries]=useState("");
  const [cstate, setCState]=useState([]);
  const [selectedState,setSelectedState]=useState("");

  useEffect(()=>{
      if(country==="India"){
        setCState(["Maharashtra", "Up","Rajstahan", "MP"]);
      }else  if(country==="Us"){
        setCState(["Arizona", "Arkansas ","California"]);
      } else if(country==="Pak"){
        setCState(["Islamabaad","Multan", "Peshawar"]);
      }else if(country==="China"){
        setCState(["Biji", "Oji"]);
      }
  },[country]);
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="col-md-6">
          <h4>State Country Dropdown</h4>
          <label>Countries</label>
          <select className="form-control" onChange={(e)=>setCountries(e.target.value)}>
            <option>-</option>
            <option>India</option>
            <option>Us</option>
            <option>Pak</option>
            <option>China</option>
          </select>
          <br></br>
          <label>Select State</label>
          <select className="form-control" onChange={(e)=>setSelectedState(e.target.value)}>
          <option>-</option>
            {cstate.map((el,index)=>{
                return (<option key={index}> {el} </option>)
            })}
          </select>
          <br></br>
          <p>Selected Coutry Is {country} && state is {selectedState}</p>
       </div>
     </div>
    </div>
  )
}
