import { Grid } from "@mui/material"
import CardStatus from "../Card"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
const StatusCard = () => {
    return (
        <Grid container spacing={1} sx={{ marginTop: 4, gap: 1 }}>
            <Grid size={3}>
                <CardStatus title={'Total Solicitudes'} details="100" icon={<ArticleOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Pendientes'} details="25" icon={<AccessTimeOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Aprobadas'} details="70" icon={<CheckCircleOutlineOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Rechazadas'} details="5" icon={<HighlightOffOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
        </Grid >
    )
}
export default StatusCard