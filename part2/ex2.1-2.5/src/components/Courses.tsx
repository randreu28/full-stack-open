import Course from "./Course";
import type { CourseType } from "../App";

type Props = {
  courses: CourseType[];
};

export default function Courses({ courses }: Props) {
  return (
    <>
      {courses.map((course, key) => (
        <Course key={key} course={course} />
      ))}
    </>
  );
}
