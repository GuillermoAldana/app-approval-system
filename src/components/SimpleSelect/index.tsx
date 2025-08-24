"use client";

import { useState, ChangeEvent } from "react";
import { TextField, MenuItem, Box } from "@mui/material";
interface ISimpleSelectProps {
    list: { id: number; name: string }[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: boolean;
}
const SimpleSelect = ({ value, list, handleChange, errors }: ISimpleSelectProps) => {

    return (
        <Box >
            <TextField
                select
                value={Number(value)}
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