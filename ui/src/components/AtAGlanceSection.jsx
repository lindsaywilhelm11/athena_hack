import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function getAverageGenderPayGapData() {
  // THIS IS WHERE API CALL GOES
  const data = [{
    title: "Men", value: 30000, color: "#AAAAFF"
  }, {
    title: "Women", value: 25000, color: "#FFAAAA"
  }]

  return data
}

export function AtAGlanceSection(props) {
  const earnings = getAverageGenderPayGapData()
  return (
    <PieChart
      animate
      label={({ dataEntry: earnings }) => earnings.title}
      labelStyle={{ fontSize: ".4em" }}
      data={earnings} />
  )
}
