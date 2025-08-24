import { Grid } from "@mui/material"
import CardStatus from "../../../Card"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useAppSelector } from "@/store/hook";
import { selectedRequest } from "@/features/Form";

const StatusCard = () => {
    const { requests } = useAppSelector(selectedRequest);

    const pending = requests.filter((r) => r.status === "1").length;
    const approve = requests.filter((r) => r.status === "2").length;
    const reject = requests.filter((r) => r.status === "3").length;

    return (
        <Grid container spacing={1} sx={{ marginTop: 4, gap: 1 }}>
            <Grid size={3}>
                <CardStatus title={'Total Solicitudes'} details={requests.length} icon={<ArticleOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Pendientes'} details={pending} icon={<AccessTimeOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Aprobadas'} details={approve} icon={<CheckCircleOutlineOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
            <Grid size={3}>
                <CardStatus title={'Rechazadas'} details={reject} icon={<HighlightOffOutlinedIcon fontSize={"small"} sx={{ color: "#737373" }} />}></CardStatus>
            </Grid>
        </Grid >
    )
}
export default StatusCard