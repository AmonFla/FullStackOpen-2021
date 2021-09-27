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

const StatisticLine= ({text, value}) => <>{text} {value} <br /></>

const Avg = ({statistics}) => {
  const score = {good:1, neutral:0,bad:-1}
  const all = statistics.good+statistics.neutral+statistics.bad 
  return (
    <>
      All: {all} <br />
      Average: {(statistics.good*score.good+statistics.neutral*score.neutral+statistics.bad*score.bad) / all} <br />
      Positive: {statistics.good *100 / all}
    </>
  ) 
}

const Statistics = ({statistics}) => {
  if (statistics.good+statistics.neutral+statistics.bad  !== 0)
    return ( 
        <p>
          <StatisticLine text="Good" value={statistics.good} />
          <StatisticLine text="Neutral" value={statistics.neutral} />
          <StatisticLine text="Bad" value={statistics.bad} />
          <Avg statistics={statistics} />
        </p> 
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