import { useState, useEffect } from "react";
import "./App.css";
import { EtCalendar } from 'et-calendar-react';
// import {
//     convertToGC,
//     toEthiopianDateString,
//     toEthiopianMonthString,
//     toEthiopianDayString} from ' gc-to-ethiopian-calendar'
    import { EthDateTime, limits,  } from 'ethiopian-calendar-date-converter'
    // import {   getEthiopicDate,   etchangetolong,   etchangetofull,   etchangetomedium,   etchangetoshort, } from "./dateconverter.js"
    // import EthioDate from 'eth-calendar';
function App() {
    
    const [selectedDate, setSelectedDate] = useState(null);

    
    const [ethiopianDate, setEthiopianDate] = useState(null); // State to store the Ethiopian date

    
  const handleDateChange = (newDate) => {
    const fullDateString = newDate.$d; // Assuming formatObject is where the data resides
    const year = newDate.$y;
    const month = newDate.$M; // Months are zero-indexed in JS
    const day = newDate.$D + 1;

    const dateObject = new Date(year, month, day);
    setSelectedDate(newDate);

    const convertedEthiopianDate = EthDateTime.fromEuropeanDate(dateObject);
 
    const formattedEthiopianDate = convertedEthiopianDate.toString({
     
      day: "numeric",
      month: "long",
      year: "numeric",
      lang:"am",
      era: "ethiopic-amete-alem",
    }); // Update the Ethiopian date state
    setEthiopianDate(formattedEthiopianDate);
  };
    

    
    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                

                <form >
                    <h1>Date picker</h1>
                    
                    <div className="ui divider"></div>
                    <div className="ui form">
                        
                        <EtCalendar
      value={selectedDate}
      onChange={handleDateChange}
      calendarType={true} 
      lang="am" 
      style={{
        width: '100%', 
        borderRadius: '10px',
        backgroundColor: '#fff5e6', 
        border: '1px solid #dbab5f', 
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
       
        color: '#4a4a4a' // Darker gray for text
      }}
    />                
     {ethiopianDate && ( // Display only if Ethiopian date is available
                            <p>Ethiopian Date: {ethiopianDate}</p>
                        )}
                    </div>
                </form>
               
            </div>{" "}
        </>
    );
}

export default App;
