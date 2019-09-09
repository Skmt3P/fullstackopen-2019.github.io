import React from 'react'
import ReactDOM from 'react-dom'

const Header = course => {
  return <h1> {course} </h1>
}

const Part = (part, exercise) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Total = total => {
  return <p> Number of exercises {total} </p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts
    .map(p => p.exercises)
    .reduce((acc, cur) => acc + cur, 0)

  return (
    <div>
      <Header course={course.name} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />
      <Part part={course.parts[3].name} exercise={course.parts[3].exercises} />
      <Total total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
