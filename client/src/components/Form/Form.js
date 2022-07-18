import React from 'react';
import axios from 'axios';
import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import InputText from '../InputText.js/InputText';
import InputDropdown from '../InputDropdown/InputDropdown';
import InputRadio from '../InputRadio/InputRadio';

const defaultValues = {
    unitSystem: "",
    distanceWorkHome: "",
    fuelType: "",
    vehicleFuelConsumption: "",
};

const unitOptions = [
    {
        "label": "Metric System",
        "value": "metric",
    },
    {
        "label": "Imperial System",
        "value": "imperial"
    },
];

const fuelOptions = [
    {
        "label": "Gasoline",
        "value": "gasoline",
    },
    {
        "label": "Ethanol",
        "value": "ethanol",
    },
    {
        "label": "Diesel",
        "value": "diesel",
    },
];

const Form = ({ getEmissionsData }) => {
    const methods = useForm({ defaultValues: defaultValues });
    const { handleSubmit, reset, control } = methods;
    const onSubmit = async (data) => {
        const response = await axios.get("http://localhost:8000/calculate-emissions", {
            params: data
        });
        getEmissionsData(response.data);
    };

    return (
        <Paper
            style={{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
                margin: "10px 30px",
                width: "100%"
            }}
        >
            <Typography variant="h6">Vehicle Data</Typography>
            <InputRadio name={"unitSystem"} control={control} label={"Unit System"} options={unitOptions} />
            <InputText name="distanceWorkHome" control={control} label="Distance Work-Home" />
            <InputDropdown name="fuelType" control={control} label="Choose your vehicle Fuel type" options={fuelOptions} />
            <InputText name="vehicleFuelConsumption" control={control} label="Enter your vehicle Fuel Consumption (km/L or miles/gallons)" />
            <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                {" "}
                Submit{" "}
            </Button>
            <Button onClick={() => reset()} variant={"outlined"}>
                {" "}
                Reset{" "}
            </Button>
        </Paper>
    );
};

export default Form;