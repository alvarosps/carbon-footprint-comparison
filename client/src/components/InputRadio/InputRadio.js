import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const InputRadio = ({
    name,
    control,
    label,
    options,
}) => {
    const generateRadioOptions = () => {
        return options.map((singleOption, index) => (
            <FormControlLabel
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
                key={index}
            />
        ));
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <RadioGroup value={value} onChange={onChange}>
                        {generateRadioOptions()}
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}

export default InputRadio;