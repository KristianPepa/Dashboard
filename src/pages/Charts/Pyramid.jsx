import React from 'react'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection,
  IAccResizeEventArgs, AccumulationLegend
} from '@syncfusion/ej2-react-charts';
import {ChartHeader} from '../../components';
import {PyramidData} from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';

const Pyramid = () => {
  const {currentMode} = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Pyramid" description="Food Comparison Chart"/>
      <AccumulationChartComponent
        id="pyramid-chart"
        tooltip={{enable: true}}
        legendSettings={{background: "white"}}
        background={currentMode === 'Dark' ? '#33373E' : ''}
      >
        <Inject services={[AccumulationDataLabel,AccumulationTooltip,PyramidSeries,AccumulationSelection,AccumulationLegend]}/>
        <AccumulationSeriesCollectionDirective
          
        > 
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName='x'
            yName='y'
            type="Pyramid"
            name="Food"
            width='45%'
            height='80%'
            explode
            gapRatio={.03}
            emptyPointSettings={{mode: "Drop", fill: "red"}}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text"
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid