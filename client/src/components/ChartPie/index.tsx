import React from 'react'
import { VictoryPie } from 'victory'
// x e y = quantidadee

type dataPie = {
  x: number | string
  y: number
}

type PropsChartPie = {
  data: Array<dataPie>
  labels: Array<string>
  backgroundColor: Array<string>
  title?: string
}

const ChartPie: React.FC<PropsChartPie> = props => {
  return (
    <VictoryPie
      colorScale={props.backgroundColor}
      data={props.data}
      radius={50}
      padAngle={5}
      innerRadius={120}
      style={{ labels: { fill: 'white', fontSize: 20, fontWeight: 'bold' } }}
    />
  )
}

export default ChartPie
