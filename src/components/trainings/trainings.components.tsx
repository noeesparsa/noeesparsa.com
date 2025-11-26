import trainings from "../../resources/trainings.json";
import TrainingBadge from "./trainingBadge.components";

const Trainings = () => {
  return (
    <div className="flex flex-row gap-4 w-full">
      {trainings.map((training) => (
        <TrainingBadge
          hoverContent={training.description}
          key={training.id}
          status={training.status}
          title={training.title}
        />
      ))}
    </div>
  );
};

export default Trainings;
