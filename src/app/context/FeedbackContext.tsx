import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAllPsychologists, submitFeedbackAction } from '../actions/feedbackActions';
import { Psychologist } from '@/data'

interface FeedbackContextType {
  data: Psychologist[] | null; 
  loading: boolean;
  error: boolean;
  submitFeedback: (name: string, score: number, message: string) => Promise<void>;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to manage the psychologists' data
  const [data, setData] = useState<Psychologist[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchAllPsychologists();
        setData(result);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Function to submit feedback and update the state
  const submitFeedback = async (name: string, score: number, message: string) => {
    try {
      const result = await submitFeedbackAction(name, score, message);
      setData((prevData) => {
        if (!prevData) return prevData; // If data is null, return null
        return prevData.map((p) =>
          p.name === result.psychologist.name
            ? { ...p, scores: result.psychologist.scores, feedbacks: result.psychologist.feedbacks }
            : p
        );
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <FeedbackContext.Provider value={{ data, loading, error, submitFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
