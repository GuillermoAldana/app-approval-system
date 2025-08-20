'use client';

import { Box, Button, Grid, Typography } from '@mui/material';

const Page = () => {
  return (
    <Box sx={{ m: 6 }}>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid size={8}>
          <Typography variant="h3" color="initial" fontWeight={500}>Sistema de aprobacion</Typography>
        </Grid>
        <Grid size={4}>
          <Button variant='contained'>Crear una nueva solicitud</Button>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Page;
