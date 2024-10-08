"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { psychologistsData, calculateAverageScore } from '@/data';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PsychologistChart: React.FC = () => {
  const labels = psychologistsData.map((p) => p.name);
  const averageScores = psychologistsData.map((p) => calculateAverageScore(p));

  const data = {
    labels,
    datasets: [
      {
        label: 'Average Score',
        data: averageScores,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Bar data={data} />
    </div>
  );
};

export default PsychologistChart;
