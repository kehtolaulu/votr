type Set = {
  repsCount: number;
  weight: number;
  intensity: number;
};

type Exercise = {
  name: string;
  setsCount: number;
  bestSet: Set;
};

type Workout = {
  exercises: Exercise[];
  date: Date;
  duration: Date;
  title: string;
};

type Props = {
  workout: Workout;
};

export const WorkoutCard: React.FC<Props> = ({workout}) => {
  return (
    <div>
      {workout.title}
    </div>
  )
};
