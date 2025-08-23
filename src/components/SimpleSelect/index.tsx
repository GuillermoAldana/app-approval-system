"use client";

import { useState, ChangeEvent } from "react";
import { TextField, MenuItem, Box } from "@mui/material";
interface ISimpleSelectProps {
    list: { id: number; name: string }[];
    handleChange: () => void;
}
const SimpleSelect = ({ list, handleChange }: ISimpleSelectProps) => {

    return (
        <Box >
            <TextField
                select
                value={list}
                onChange={handleChange}
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