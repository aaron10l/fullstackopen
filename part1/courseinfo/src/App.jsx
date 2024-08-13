const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.name1} exercises={props.exercises1}  />
      <Part part={props.name2} exercises={props.exercises2}  />
      <Part part={props.name3} exercises={props.exercises3}  />
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises: {props.count1 + props.count2 + props.count3} </p>
  )
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content name1={course.parts[0].name} exercises1={course.parts[0].exercises} name2={course.parts[1].name} exercises2={course.parts[1].exercises} name3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total count1={course.parts[0].exercises} count2={course.parts[1].exercises} count3={course.parts[2].exercises} />
    </div>
  )
}

export default App
