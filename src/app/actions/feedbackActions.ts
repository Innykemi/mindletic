import { psychologistsData, calculateAverageScore } from '@/data';

export async function submitFeedbackAction(psychologistName: string, newScore: number, newMessage: string) {
  const psychologist = psychologistsData.find((p) => p.name === psychologistName);

  if (psychologist) {
    psychologist.scores.push(newScore);
    psychologist.feedbacks.push({ message: newMessage, score: newScore });

    return {
      psychologist,
      updatedAverageScore: calculateAverageScore(psychologist),
    };
  } else {
    throw new Error('Psychologist not found');
  }
}

export async function fetchAllPsychologists() {
  return psychologistsData.map((psychologist) => ({
    ...psychologist,
    averageScore: calculateAverageScore(psychologist),
  }));
}
