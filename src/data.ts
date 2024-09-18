export interface Feedback {
  message: string;
  score: number;
}

export interface Psychologist {
  name: string;
  scores: number[];  // Store individual scores
  feedbacks: Feedback[];
}

export const psychologistsData: Psychologist[] = [
  {
    name: 'Dr. John Smith',
    scores: [4.5],
    feedbacks: [
      { message: 'Very empathetic and insightful.', score: 4.5 }
    ]
  },
  {
    name: 'Dr. Jane Doe',
    scores: [4.2],
    feedbacks: [
      { message: 'Professional but could be more engaging.', score: 4.2 }
    ]
  },
  {
    name: 'Dr. Emily Brown',
    scores: [4.8],
    feedbacks: [
      { message: 'Great listener and problem solver.', score: 4.8 }
    ]
  },
  {
    name: 'Dr. Michael Green',
    scores: [4.0],
    feedbacks: [
      { message: 'Knowledgeable but somewhat distant.', score: 4.0 }
    ]
  },
  {
    name: 'Dr. Sarah White',
    scores: [4.7],
    feedbacks: [
      { message: 'Warm and highly recommended.', score: 4.7 }
    ]
  }
];

// Function to calculate the average score for each psychologist
export const calculateAverageScore = (psychologist: Psychologist) => {
  const totalScore = psychologist.scores.reduce((acc, curr) => acc + curr, 0);
  return totalScore / psychologist.scores.length;
};
