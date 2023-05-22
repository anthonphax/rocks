import './App.css';
import * as React from 'react';

import MenuJson from './navigation/menu.js';
import MenuNavigation from './navigation/MenuNavigation.js';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const App = () => {
  return (
    <>
    <div className="App">
    <div className="App-header">
    <h1>Escolha a Usina</h1>
      <ButtonGroup size="large" aria-label="large button group">
        <Button variant="contained">1</Button>
        <Button variant="contained">2</Button>
        <Button variant="contained">3</Button>
        <Button variant="contained">{MenuRoundedIcon} 4</Button>
      </ButtonGroup>
    </div>
    </div>

    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <h1>Texto {MenuRoundedIcon}</h1>
      </Box>
          
    </div>
    </>
  );
}

export default App;
