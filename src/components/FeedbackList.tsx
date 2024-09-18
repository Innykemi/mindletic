"use client";

import React, { useState, useEffect } from 'react';
import { List, ListItem, Paper, Typography, CircularProgress, Alert, Rating, Box } from '@mui/material';
import { psychologistsData, Psychologist } from '../data';
import FeedbackItem from './FeedbackItem';

const FeedbackList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Psychologist[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const feedbackPerPage = 3;

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      try {
        setData(psychologistsData);
        setLoading(false);
      } catch (e) {
        setError('Failed to load data');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  const indexOfLastFeedback = currentPage * feedbackPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbackPerPage;
  const currentFeedback = data.slice(indexOfFirstFeedback, indexOfLastFeedback);
  console.log(currentFeedback, "currentFeedback")

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 3
    }}>
      {currentFeedback.map((psy: Psychologist, index: number) => (
        <Box key={index}>
          <FeedbackItem {...psy} />
        </Box>
      ))}
    </Box>
  );
};

export default FeedbackList;
