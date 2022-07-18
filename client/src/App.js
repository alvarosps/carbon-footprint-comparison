import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import EmissionsResults from './components/EmissionsResults/EmissionsResults';
import Form from './components/Form/Form';
import LearnMoreModal from './components/LearnMoreModal/LearnMoreModal';

function App() {
  const [emissionsData, setEmissionsData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const getEmissionsData = (emissions) => {
    setEmissionsData(emissions);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Compare Public Transport and Private Transport Carbon Emissions</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ textAlign: 'center', fontWeight: 'bold'}}>
          Want to know how much you can help the environment using Public Transport instead of Private Transport? Fill the form below and check the results!
        </div>
        <div className="App">
          <Form getEmissionsData={getEmissionsData} />
          {emissionsData && <EmissionsResults emissionsData={emissionsData} buttonOnClick={handleOpenModal} />}
        </div>
      </Box>
      <LearnMoreModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} emissionData={emissionsData} />
    </>
  );
}

export default App;
