import FirstSectionSkeleton from "./component/skeletons/FirstSectionSkeleton";
import ProjectsSkeleton from "./component/skeletons/ProjectsSkeleton";

export default function Loading() {
  return (
    <div>
      <FirstSectionSkeleton />
      <ProjectsSkeleton />
    </div>
  );
}
