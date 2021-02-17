import React from 'react'
import { Pie } from 'react-chartjs-2'

type PropsChartPie = {
  data: Array<number>
  labels: Array<string>
  backgroundColor: Array<string>
  title?: string
}

const ChartPie: React.FC<PropsChartPie> = props => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: props.backgroundColor,
        data: props.data,
        borderColor: 'rgba(255, 255, 255, 0.574)',
        borderWidth: '1'
      }
    ]
  }
  return (
    <Pie
      data={data}
      options={{
        title: {
          display: true,
          text: props.title ? props.title : '',
          fontSize: 20
        },
        borderColor: 'rgba(0, 0, 0, 0.1)',
        legend: {
          display: false,
          position: 'right'
        }
      }}
    />
  )
}

export default ChartPie
