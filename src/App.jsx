import { Header } from "./Header";
import { Total } from "./Total";
import { Content } from "./Content";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
const part_01 = {
  part: "Fundamentals of React",
  exercises: 10,
};

const part_02 = {
  part: "Using props to pass data",
  exercises: 7,
};

const part_03 = {
  part: "State of a component",
  exercises: 14,
};

const courseData = [part_01, part_02, part_03];
  return (
    <div>
      <Header course={course} />
      <Content
        courseData={part_01}
        exercises1={exercises1}
        courseData={part_02}
        exercises2={exercises2}
        courseData={part_03}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
