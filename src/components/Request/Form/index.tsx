"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Grid,
    CardContent,
    Card,
    Skeleton,
} from "@mui/material";
import TitleForm from "../../Title/TitleForm";
import { IRequestType } from "@/features/types";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { selectedRequestTypes, setRequestTypes } from "@/features/RequestType";
import SimpleSelect from "../../SimpleSelect";
import { useForm } from "@/hook/useForm";
import ToastMessage from "@/components/Toast";
import { useRouter } from "next/navigation";

interface IRequestForm {
    types: IRequestType[]
}
export const RequestForm = ({ types }: IRequestForm) => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(selectedRequestTypes);
    const router = useRouter();
    //consumo acciones desde hook
    const { handleSubmit, formData, handleChange, errors, loading, toastOpen, setToastOpen } = useForm();

    //guardo tipos en redux
    useEffect(() => { dispatch(setRequestTypes(types)) }, []);

    if (loading) {
        return (
            <Box>
                <Skeleton variant="text" height={40} />
                <Skeleton variant="rectangular" height={56} sx={{ my: 1 }} />
                <Skeleton variant="rectangular" height={56} sx={{ my: 1 }} />
                <Skeleton variant="rectangular" height={100} sx={{ my: 1 }} />
                <Skeleton variant="rectangular" height={56} sx={{ my: 1 }} />
                <Skeleton variant="rectangular" height={56} sx={{ my: 2 }} />
            </Box>)
    }
    return (
        <Box display="flex" justifyContent="center" alignItems="center" p={4}>
            <Card sx={{ p: 4, maxWidth: 600, width: "100%", boxShadow: "none", border: '1px solid #d3d3d3' }}>
                <CardContent>
                    <TitleForm text={'Nueva Solicitud de Aprobación'} />
                    <Typography variant="body2" color="initial">Registre su solicitud completando todos los campos</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <Typography variant="caption" color="initial">Solicitante</Typography>
                                <TextField
                                    fullWidth
                                    name="requester"
                                    value={formData.requester}
                                    onChange={handleChange}
                                    error={errors.requester}
                                    helperText={errors.requester ? "Campo obligatorio" : ""}
                                />
                            </Grid>
                            <Grid size={12}>
                                <Typography variant="caption" color="initial">Título de la solicitud</Typography>
                                <TextField
                                    fullWidth
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    error={errors.title}
                                    helperText={errors.title ? "Campo obligatorio" : ""}
                                />
                            </Grid>
                            <Grid size={12}>
                                <Typography variant="caption" color="initial">Descripción</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    error={errors.description}
                                    helperText={errors.description ? "Campo obligatorio" : ""}
                                />
                            </Grid>

                            <Grid size={12}>
                                <Typography variant="caption" color="initial">Tipo de solicitud</Typography>
                                <SimpleSelect name={'type'} list={data} value={formData.type} errors={errors.type} handleChange={handleChange}></SimpleSelect>
                            </Grid>

                            <Grid size={6}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    color="secondary"
                                    onClick={() => router.push("/")}
                                >
                                    Volver a la Home
                                </Button>
                            </Grid>
                            <Grid size={6}>
                                <Button type="submit" variant="contained" fullWidth>
                                    Enviar solicitud
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <ToastMessage message={"Su solicitud ha sido enviada para aprobación"} toastOpen={toastOpen} setToastOpen={setToastOpen} />
        </Box >
    );
}

export default RequestForm;