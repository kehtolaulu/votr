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
      <p className="workout-card__title">{workout.title}</p>
      <p className="workout-card__date">{workout.date}</p>
      <p className="workout-card__duration">
        <img
          src={`${process.env.PUBLIC_URL}/schedule.svg`}
          style={{ height: "20px", marginRight: "4px" }}
        />
        {workout.duration}
      </p>
      <br />
      {workout.exercises?.map((exercise) => (
        <p>
          <span>{exercise.setsCount}</span> x <span>{exercise.name}</span>
        </p>
      ))}
    </div>
  );
};
