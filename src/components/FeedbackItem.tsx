"use client";

import { Typography, Rating, Card, CardContent, Box, Avatar } from '@mui/material';
import { Psychologist, calculateAverageScore } from '@/data';

const FeedbackItem: React.FC<Psychologist> = ({ name, scores, feedbacks }) => {
  const averageScore = calculateAverageScore({ name, scores, feedbacks });

  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ margin: '0 auto' }}>
          <Avatar sx={{ width: 80, height: 80 }} />
        </Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: '#32627D', fontSize: 20, fontWeight: 500, mb: 0 }}
        >
          {name}
        </Typography>
        <Box sx={{ mx: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Use the calculated average score */}
          <Rating name="average-score" value={averageScore} precision={0.2} readOnly />
          <Typography variant="body2">{averageScore.toFixed(1)}</Typography>
        </Box>
        <Typography variant="body2">
          {/* Display the first feedback message */}
          {feedbacks[0]?.message || 'No feedback available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackItem;
