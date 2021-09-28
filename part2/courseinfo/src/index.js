import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      { course.parts.map( part => <Part key={part.id} part={part} /> ) } 
    </div>
  )
}

const Total = ({ course }) => {
  return(
    <p>Number of exercises {course.parts.reduce((sum, part) => sum+part.exercises, 0)}</p>
  ) 
}

const Course = ({course}) =>{
  return(
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3, 
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4, 
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
