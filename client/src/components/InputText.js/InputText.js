import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const InputText = ({ name, control, label, errors }) => {
  return (
    <>
        <Controller
            name={name}
            control={control}
            rules={{
                required: true,
                pattern: /[0-9]*/
            }}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                />
            )}
        />
        {errors[name] && <Typography>{name} needs to be a number.</Typography>}
    </>
  );
};

export default InputText