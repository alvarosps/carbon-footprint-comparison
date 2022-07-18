const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

const gallonsInALiter = 3.78541;
const milesInAKm = 1.60934;

const formatNumber = (number) => {
    let formattedNumber = parseFloat(number).toFixed(2);
    
    return formattedNumber;
}

const calculateDistanceTraveledInAYear = (distance, daysPerMonth = 20) => {
    // Estimating 20 days per month, but can be changed in the args
    return distance * daysPerMonth * 12;
};

const calculateBusConsumption = (distanceWorkHome, useMetricSystem) => {
    const averageDieselLiterPerKm = 4;
    const averageDieselGallonPerKm = averageDieselLiterPerKm * gallonsInALiter;
    const biodieselKgCO2perGallon = 9.45;
    const distanceTraveledInAYear = calculateDistanceTraveledInAYear(distanceWorkHome);

    const biodieselConsumption = useMetricSystem ? averageDieselGallonPerKm * distanceTraveledInAYear : averageDieselLiterPerKm * distanceTraveledInAYear;
    const emissions = useMetricSystem ? biodieselConsumption * biodieselKgCO2perGallon : biodieselConsumption * biodieselKgCO2perGallon * gallonsInALiter;

    return {
        biodieselConsumption: formatNumber(biodieselConsumption),
        emissions: formatNumber(emissions),
    };
};

const calculateCarConsumption = (distanceWorkHome, averageFuelConsumption, fuelType, useMetricSystem) => {
    const distanceTraveledInAYear = calculateDistanceTraveledInAYear(distanceWorkHome);
    const emissionsKgCO2perGallon = {
        gasoline: 8.78,
        ethanol: 5.75,
        biodiesel: 9.45,
    };

    const fuelConsumption = (averageFuelConsumption * distanceTraveledInAYear).toFixed(2);
    const emissions = useMetricSystem ? fuelConsumption * emissionsKgCO2perGallon[fuelType] : fuelConsumption * emissionsKgCO2perGallon[fuelType] * gallonsInALiter;

    return {
        fuelConsumption: formatNumber(fuelConsumption),
        emissions: formatNumber(emissions),
        fuelType: fuelType,
    };
};

app.get('/calculate-emissions', async (req, res) => {
    let { distanceWorkHome, vehicleFuelConsumption, fuelType, unitSystem } = req.query;
    distanceWorkHome = parseFloat(distanceWorkHome).toFixed(2);
    averageFuelConsumption = parseFloat(vehicleFuelConsumption).toFixed(2);
    useMetricSystem = unitSystem === 'metric';

    const busConsumption = calculateBusConsumption(distanceWorkHome, useMetricSystem);
    const carConsumption = calculateCarConsumption(distanceWorkHome, averageFuelConsumption, fuelType, useMetricSystem);

    res.status(200).json({ busConsumption, carConsumption, usingMetricSystem: useMetricSystem });
});

app.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server running on port ${port}.`);
});