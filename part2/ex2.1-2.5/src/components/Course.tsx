import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

type Props = {
  course: {
    id: number;
    name: string;
    parts: {
      name: string;
      exercises: number;
    }[];
  };
};

export default function Course({ course }: Props) {
  return (
    <div>
      <Header>{course.name}</Header>
      <Content parts={course.parts} />
      <Total exercises={[...course.parts.map(({ exercises }) => exercises)]} />
    </div>
  );
}
