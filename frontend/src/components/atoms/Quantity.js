import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from "@mui/material/TextField";



export default function Qunatity(){
  const options = [
    { label: '1', id: 1 },
    { label: '2', id: 2 },
    { label: '3', id: 2 },
    { label: '4', id: 2 },
    { label: '5', id: 2 },
    { label: '6', id: 2 },
    { label: '7', id: 2 },
    { label: '8', id: 2 },
    { label: '9', id: 2 },
    { label: '10+', id: 2 },
  ];
return(

<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={options}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Qunatity" />}
/>
    )
}


