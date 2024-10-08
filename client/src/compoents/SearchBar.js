import * as React from 'react';
import { useState} from 'react';
import "../css/homePage.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function SearchBar() {




  // const [flights, setFlights] = useState([]);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');



  return (
    <span className='filter'>
      <input
        className='inputs'
        type="text"
        placeholder='From where?'
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
      />
      <input
        className='inputs'
        type="text"
        placeholder='Where to?'
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputDateRangeField']}>
          <DateRangePicker
            slots={{ field: SingleInputDateRangeField }}
            name="allowedRange"
          />
        </DemoContainer>
      </LocalizationProvider>
      <input
        className='inputs'
        placeholder='Quantity?'
        id='nbrInp'
        type="number"
      />
      <button className="searchBtn" >Search</button>

    </span>
  );
}

export default SearchBar