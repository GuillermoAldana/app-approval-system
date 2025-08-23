"use client";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    const goHome = () => {
        router.push("/");
    };

    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
            <AppBar position="static" color="primary" sx={{
                backgroundColor: "#ffffff",
                color: "#000000da",
                borderBottom: "1px solid #c6c6c6",
                boxShadow: 'none'
            }}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: "pointer", fontWeight: "bold", letterSpacing: 1 }}
                        onClick={goHome}
                    >
                        ApprovePro
                    </Typography>

                    <Button color="inherit" onClick={goHome}>
                        Solicitudes
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
