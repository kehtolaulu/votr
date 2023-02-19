import { useEffect, useState } from 'react';

import { Database } from '../persistance';
import { WorkoutCard } from './workoutCard';

export const History = (): JSX.Element => {
  const [database, setDatabase] = useState<Database | null>(null);
  const [workouts, setWorkouts] = useState<any>([]);

  useEffect(() => {
    Database.getInstance().then(setDatabase);
  }, []);

  useEffect(() => {
    database?.allWorkouts()
      .then(workouts => setWorkouts(workouts));
  }, [database]);

  return (
    <main>
      <h1>History</h1>
      {workouts.map((w: any) => (
        <WorkoutCard key={w.id} workout={w} />
      ))}
    </main>
  );
};
