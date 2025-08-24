"use client";

import { useState, ChangeEvent } from "react";
import { TextField, MenuItem, Box } from "@mui/material";
interface ISimpleSelectProps {
    list: { id: number; name: string }[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: boolean;
    name: string;
}
const SimpleSelect = ({ value, name, list, handleChange, errors }: ISimpleSelectProps) => {

    return (
        <Box >
            <TextField
                select
                value={value}
                name={name}
                onChange={handleChange}
                helperText={errors ? "Campo obligatorio" : ""}
                fullWidth
            >
                {list.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                        {type.name}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}
export default SimpleSelect