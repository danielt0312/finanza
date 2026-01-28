import { useState } from 'react'
import './App.css'

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

let top100Films = [
  { label: 'Lol' },
];

export default () => {
  return (
    <Card maxWidth={false}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            Solicitud de Bienes Materiales
          </Typography>

          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
