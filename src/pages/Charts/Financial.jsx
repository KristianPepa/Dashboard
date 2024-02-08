import React from 'react'
import {ChartHeader} from '../../components';
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,HiloSeries,Category,Tooltip,ILoadedEventArgs,DateTime,Zoom,Logarithmic, Crosshair} from '@syncfusion/ej2-react-charts';
import {financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date('2017,1,1')

function filterValue(value){
  if(value.x >= date1){
    return value.x,value.high,value.x
  }
}
const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
  const {currentMode} = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Financial" description="AAPLE Historical"/>
      <ChartComponent
        id="financial-chart"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        background={currentMode === 'Dark' ? "#33373E" : ""}
        crossHair={{enable: true, shared: true}}
        tooltip={{enable: true}}
      >
        <Inject services={[HiloSeries,Tooltip,DateTime,Zoom,Logarithmic,Crosshair]}/>
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="y"
            type="Hilo"
            low="low"
            high="high"
            name="Apple Inc"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial