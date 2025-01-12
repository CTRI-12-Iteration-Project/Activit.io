import React, { useContext, useEffect } from 'react'
import ActivityCard from './ActivityCard.jsx';
import { TeamsContext } from '../App.jsx';

function TotalActivityDisplay() {
  // Total teams data from App.jsx
  const teamsContextData = useContext(TeamsContext);
  console.log('Context data', teamsContextData);

  // Setting initial state to everything
  const [totalActivities, setTotalActivities] = React.useState(teamsContextData);

  // Goals: Update after we render current users info
  useEffect(() => setTotalActivities(teamsContextData), [teamsContextData])

  // Parsing out every activity from each team and storing into arr
  const totalActivitiesCards = totalActivities.reduce((totalArr, currTeam) => {
    for (const activity of currTeam.teamActivities) {
      totalArr.push(
        <ActivityCard 
          key={currTeam.teamName + activity}
          teamName={currTeam.teamName}
          teamMembers={currTeam.teamMembers}
          activity={activity}
        />
      )
    }
    return totalArr;
  }, [])
  

  return (
    <div className='total-activity-display flex-column flex-center container-card'>
      <h1>Total Activity Display</h1>
      
      {totalActivitiesCards.length 
        ? totalActivitiesCards
        : <h2>Make some plans!</h2>}
    </div>
  )
}

export default TotalActivityDisplay
