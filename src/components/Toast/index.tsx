import { Alert, Snackbar } from "@mui/material";
interface IToastMessageProps {
    toastOpen: boolean;
    setToastOpen: (value: boolean) => void;
    message: string;
}

const ToastMessage = ({ toastOpen, setToastOpen, message }: IToastMessageProps) => {
    return (
        <Snackbar
            open={toastOpen}
            autoHideDuration={3000} // 3 segundos
            onClose={() => setToastOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
            <Alert severity="success" onClose={() => setToastOpen(false)}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default ToastMessage;