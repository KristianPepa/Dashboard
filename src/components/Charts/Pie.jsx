import React from 'react'
import {AccumulationChartComponent,AccumulationDataLabel,AccumulationLegend,AccumulationSeriesCollectionDirective,AccumulationSeriesDirective, AccumulationTooltip, Inject, PieSeries} from '@syncfusion/ej2-react-charts';
import {useStateContext} from '../../contexts/ContextProvider';

const Pie = ({id,data,height,legendVisibility}) => {
  const {currentMode} = useStateContext();

  return (
    <AccumulationChartComponent
      height={height}
      id={id}
      legendSettings={{visible: legendVisibility,background: "white"}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[AccumulationLegend,PieSeries,AccumulationDataLabel,AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
        
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          radius="70%"
          explode
          explodeOffset='10%'
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff'
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie