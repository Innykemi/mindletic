"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FeedbackList from '@/components/FeedbackList';
import { Typography } from '@mui/material';
import PsychologistChart from '@/components/Chart';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#32627D', fontWeight: 700 }}>
        Psychologist Feedback Summary
      </Typography>
      <PsychologistChart />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FeedbackList />
      </Box>
    </Container>
  );
}
