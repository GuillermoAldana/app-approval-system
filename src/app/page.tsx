'use client';

import StatusCard from '@/components/Request/Content/Status';
import TableRequest from '@/components/Request/Content/Table';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/approvals");
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h4" fontWeight={500}>
            Sistema de Aprobación
          </Typography>
          <Typography variant="h6" color='#737373' fontWeight={400} fontSize={'1rem'}>
            Gestiona y supervisa todas las solicitudes de aprobación de manera eficiente.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          display="flex"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          mt={{ xs: 2, md: 0 }}
        >
          <Button variant="contained" onClick={handleClick}>
            + Crear una nueva solicitud
          </Button>
        </Grid>
      </Grid>
      <StatusCard />
      <TableRequest />
    </>
  );
};

export default Page;