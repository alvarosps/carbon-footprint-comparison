import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import './EmissionsResults.css';

const EmissionsResults = ({ emissionsData }) => {
    return (
        <div className='emissions-results'>
          <div className='emissions-results-header'>Emissions Results (Annual)</div>
          <CardContent style={{ border: "1px solid lightgray", width: "250px", marginTop: "25px" }}>
            <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              Public Transport (Bus)
            </Typography>
            <Typography variant='h5' component="div">
              {emissionsData.busConsumption.emissions} 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              kgCO2e/yr
            </Typography>
            <Typography variant='h5' component="div">
              {emissionsData.busConsumption.biodieselConsumption} {emissionsData.usingMetricSystem ? "L" : "gallons"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              Liters of diesel used
            </Typography>
          </CardContent>
          <CardContent style={{ border: "1px solid lightgray", width: "250px"}}>
            <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              Private Transport
            </Typography>
            <Typography variant='h5' component="div">
              {emissionsData.carConsumption.emissions}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              kgCO2e/yr
            </Typography>
            <Typography variant='h5' component="div">
              {emissionsData.carConsumption.fuelConsumption} {emissionsData.usingMetricSystem ? "L" : "gallons"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              Liters of {emissionsData.carConsumption.fuelType} used
            </Typography>
          </CardContent>
        </div>
    )
}

export default EmissionsResults;