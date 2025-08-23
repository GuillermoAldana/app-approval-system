'use client';
import { Typography } from "@mui/material"
interface ITitleFormProps {
    text: string
}
const TitleForm = ({ text }: ITitleFormProps) => {
    return (
        <Typography variant="h4" gutterBottom>
            {text}
        </Typography>
    )
}
export default TitleForm