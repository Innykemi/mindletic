"use client";

import { Typography, Rating, Card, CardContent, CardActions, Button, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Psychologist } from '@/data';

const FeedbackItem: React.FC<Psychologist> = ({ name, averageScore, feedback }) => {

  return (
    <Card sx={{
      minWidth: 275,
      // maxWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ margin: '0 auto' }}>
          <Avatar sx={{ width: 80, height: 80 }} />
        </Box>
        <Typography variant='h3' gutterBottom sx={{ color: '#32627D', fontSize: 20, fontWeight: 500, mb: 0 }}>
          {name}
        </Typography>
        <Box sx={{ mx: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
          <Rating name="score" defaultValue={averageScore} precision={0.2} readOnly />
          <Typography variant="body2">{averageScore}</Typography>
        </Box>
        <Typography variant="body2">
          {feedback[0]?.comment}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small'>View more feedbacks</Button>
      </CardActions> */}
    </Card>
  );
};

export default FeedbackItem;
