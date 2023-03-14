import React from 'react'
import {useStateContext} from '../../contexts/ContextProvider';
import {ChartHeader,Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Pie" description="Project Cost Breakdown"/>
      <PieChart data={pieChartData} hight="full" id="chart-pie" legendVisibility/>
    </div>
  )
}

export default Pie