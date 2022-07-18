import { AppBar, Box, CardContent, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import EmissionsResults from './components/EmissionsResults/EmissionsResults';
import Form from './components/Form/Form';

function App() {
  const [emissionsData, setEmissionsData] = useState(null);
  const getEmissionsData = (emissions) => {
    setEmissionsData(emissions);
  };

  useEffect(() => {
    console.log('emissionsData', emissionsData)
  }, [emissionsData])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Compare public transport and private transport carbon emissions</Typography>
        </Toolbar>
      </AppBar>
      <div className="App">
        <Form getEmissionsData={getEmissionsData} />
        {emissionsData && <EmissionsResults emissionsData={emissionsData} />}
      </div>
    </Box>
  );
}

export default App;
