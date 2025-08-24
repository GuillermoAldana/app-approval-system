import { Card, CardContent, Grid, Typography } from "@mui/material"
import { ReactNode } from "react";
interface ICardStatusProps {
    title: string;
    details: string;
    mount?: string;
    icon: ReactNode;
}
const CardStatus = (props: ICardStatusProps) => {
    const { title, details, mount, icon } = props;
    return (
        <Card sx={{ boxShadow: '#0000001a', border: '1px solid #0000001a', backgroundColor: '#fafafa', p: 1, borderRadius: 4 }}>
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid>
                        <Typography variant="body2" color="initial">{title}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body2" color="initial">{icon}</Typography>
                    </Grid>
                    <Grid size={12} mt={2}>
                        <Typography variant="h6" color="initial">{details}</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography variant="body2" color="initial">{mount}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}
export default CardStatus