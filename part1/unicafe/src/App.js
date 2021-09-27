import React, { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, value}) => <>{text} {value} <br /></>

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

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }) 
  

  const clickGood = () => setStatistics({...statistics, good: statistics.good+1} )
  const clickBad = () => setStatistics({...statistics, bad: statistics.bad+1} )
  const clickNeutral= () => setStatistics({...statistics, neutral: statistics.neutral+1} )

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={clickGood} text="Good"  />
      <Button onClick={clickNeutral} text="Neutral"  />
      <Button onClick={clickBad} text="Bad"  />
      <br />
      <h1>Statistics</h1>
      <p>
        <Statistic text="Good" value={statistics.good} />
        <Statistic text="Neutral" value={statistics.neutral} />
        <Statistic text="Bad" value={statistics.bad} />
        <Avg statistics={statistics} />
      </p>
    </div>
  )
}

export default App;