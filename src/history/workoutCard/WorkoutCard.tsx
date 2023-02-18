import "./index.css";

type Set = {
  repsCount: number;
  weight: number;
  intensity: number;
};

type Exercise = {
  name: string;
  setsCount: number;
  bestSet?: Set;
};

type Workout = {
  exercises?: Exercise[];
  date?: string;
  duration?: string;
  title: string;
};

type Props = {
  workout: Workout;
};

export const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <div className="workout-card">
      <p>{workout.title}</p>
      <p>{workout.date}</p>
      <p>{workout.duration}</p>
      {workout.exercises?.map((exercise) => (
        <div>
          <span>{exercise.setsCount}</span> x <span>{exercise.name}</span>
        </div>
      ))}
    </div>
  );
};
