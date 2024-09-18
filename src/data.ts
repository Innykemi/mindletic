export interface Feedback {
  user: string;
  comment: string;
  score: number;
}

export interface Psychologist {
  id: string;
  name: string;
  averageScore: number;
  feedback: Feedback[];
}

export let psychologistsData: Psychologist[] = [
  {
    id: '1',
    name: 'Dr. John Smith',
    averageScore: 4.5,
    feedback: [
      { user: 'Alice', comment: 'Very empathetic and insightful.', score: 4.5 }
    ]
  },
  {
    id: '2',
    name: 'Dr. Jane Doe',
    averageScore: 4.2,
    feedback: [
      { user: 'Bob', comment: 'Professional but could be more engaging.', score: 4.2 }
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Brown',
    averageScore: 4.8,
    feedback: [
      { user: 'Charlie', comment: 'Great listener and problem solver.', score: 4.8 }
    ]
  },
  {
    id: '4',
    name: 'Dr. Michael Green',
    averageScore: 4.0,
    feedback: [
      { user: 'Dave', comment: 'Knowledgeable but somewhat distant.', score: 4.0 }
    ]
  },
  {
    id: '5',
    name: 'Dr. Sarah White',
    averageScore: 4.7,
    feedback: [
      { user: 'Eve', comment: 'Warm and highly recommended.', score: 4.7 }
    ]
  }
];
