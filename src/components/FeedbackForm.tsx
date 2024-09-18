'use client';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useFeedback } from '@/app/context/FeedbackContext';

const FeedbackForm: React.FC = () => {
  const { submitFeedback } = useFeedback();
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !score || !feedback) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      await submitFeedback(name, parseFloat(score), feedback);
      setMessage('Feedback submitted successfully!');
    } catch (error) {
      setMessage('Failed to submit feedback.');
    }

    setName('');
    setScore('');
    setFeedback('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h6">Submit Feedback</Typography>
      <TextField
        label="Psychologist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        type="number"
        inputProps={{ min: 0, max: 5, step: 0.1 }}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
      {message && <Typography variant="body2" sx={{ mt: 2 }}>{message}</Typography>}
    </Box>
  );
};

export default FeedbackForm;
