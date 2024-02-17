import React from 'react'
import { ChartComponent , StockChartPeriodsDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const StackedChart = ({height, width}) => {
  return (
    <ChartComponent
    height={height}
    width={width}
    >
    </ChartComponent>
  )
}

export default StackedChart