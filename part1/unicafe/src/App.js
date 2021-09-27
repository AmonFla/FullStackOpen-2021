import React, { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const Buttons = ({actions}) =>{
  return(
    <>
      <Button onClick={actions.clickGood} text="Good"  />
      <Button onClick={actions.clickNeutral} text="Neutral"  />
      <Button onClick={actions.clickBad} text="Bad"  />
    </>
  )
}

const StatisticLine= ({text, value}) => <><td>{text}</td><td>{value}</td></>

const Statistics = ({statistics}) => {
  const score = {good:1, neutral:0,bad:-1}
  const all = statistics.good+statistics.neutral+statistics.bad 
  if ( all  !== 0)
    return ( 
        <>
          <table>
            <tbody>
              <tr><StatisticLine text="Good" value={statistics.good} /></tr>
              <tr><StatisticLine text="Neutral" value={statistics.neutral} /></tr>
              <tr><StatisticLine text="Bad" value={statistics.bad} /></tr>
              <tr><StatisticLine text="All" value={all} /></tr>
              <tr><StatisticLine text="Average" value={(statistics.good*score.good+statistics.neutral*score.neutral+statistics.bad*score.bad) / all}/></tr>
              <tr><StatisticLine text="Positive" value={statistics.good *100 / all}/></tr>
            </tbody>
          </table>
        </> 
    )
  return(
    <p>
      No feedback given
    </p>
  );
}


const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }) 
  

  const clickActions = {
    clickGood: () => setStatistics({...statistics, good: statistics.good+1} ),
    clickBad: () => setStatistics({...statistics, bad: statistics.bad+1} ),
    clickNeutral: () => setStatistics({...statistics, neutral: statistics.neutral+1} )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons actions={clickActions} />
      <br />
      <h1>Statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App;