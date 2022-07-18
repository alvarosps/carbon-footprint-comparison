import React from 'react';
import { Box, Modal, Typography } from '@material-ui/core';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LearnMoreModal = ({ isModalOpen, handleCloseModal, emissionData }) => {
    const busCarbonEmission = emissionData ?  emissionData.busConsumption.emissions : '';
    const vehicleCarbonEmission = emissionData ? emissionData.carConsumption.emissions : '';
    const unit = emissionData ? emissionData.usingMetricSystem ? 'Liter' : 'Gallon' : '';

    return (
        <Modal
            open={isModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="learn-more-modal"
            aria-describedby="learn-more-about-public-vs-private-transport-carbon-emissions-modal"
            disableEnforceFocus
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    The Carbon Footprint of Transportation
                </Typography>
                {emissionData && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <br />
                    As concern about climate change has grown, individuals are becoming increasingly conscious of their impact on the environment.
                    <br />
                    With the data you provided, we could calculate that the Carbon Emissions with Public transport were {busCarbonEmission} kg CO2 per {unit}.
                    <br />
                    Usually a bus capacity is up to 40 passengers, that means that the carbon footprint of each passenger is {(busCarbonEmission/40).toFixed(2)} kg CO2 per {unit}.
                    <br />
                    Private transport carbon footprint for each person (using the same vehicle as average data) would be {vehicleCarbonEmission} kg CO2 per {unit}.
                    <br />
                    Can you see the difference? Using public transport can have a huge impact!
                    <br />
                    Even better, if possible, you can use a bike some days, which will be great for your health and for the environment!
                </Typography>}
                <hr />
                <Typography id="modal-modal-description-final" sx={{ mt: 2 }} style={{ marginTop: '10px'}}>
                    Public transportation offers an immediate alternative for individuals
                    seeking to reduce their energy use and carbon footprints. 
                    This action far exceeds the benefits of other energy
                    saving household activities, such as using energy efficient
                    light bulbs or adjusting thermostats.
                    <br /><br />
                    The <a href='https://www.visualcapitalist.com/wp-content/uploads/2022/02/carbon-cost-of-transportation-ds.jpg' target='_blank'>infographic</a> charts the carbon footprint of transportation per passenger-kilometer for different vehicles based on data from the UK Government’s methodology paper for greenhouse gas reporting.
                    <br /><br />
                    For a more complete information, please there are some articles that can help you better understand why using Public transport reduces carbon emissions!
                    <li>
                        <ul>
                            <a href='https://www.visualcapitalist.com/comparing-the-carbon-footprint-of-transportation-options/' target='_blank'>Comparing the Carbon Footprint of Transportation Options</a>
                        </ul>
                        <ul>
                            <a href='https://www.apta.com/wp-content/uploads/Resources/resources/reportsandpublications/Documents/greenhouse_brochure.pdf'>Public Transportation Reduces Greenhouse Gases and Conserves Energy</a>
                        </ul>
                    </li>
                </Typography>
            </Box>
        </Modal>
    );
}

export default LearnMoreModal;