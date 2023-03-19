import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, RangeColorSettingDirective, RangeColorSettingsDirective, } from '@syncfusion/ej2-react-charts'
import {ChartHeader} from '../../components';
import {ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis,colorMappingData,rangeColorMapping} from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';


const ColorMapping = () => {
  const {currentMode} = useStateContext();


  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Color Mapping" description="USA CLIMATE - WEATHER BY MONTH"/>
      <ChartComponent
        id="color-chart"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        legendSettings={{background: 'white', mode: "Range"}}
        background={currentMode === 'Dark' ? '#33373E' : ''}
        tooltip={{enable: true}}
      >
        <Inject services={[Legend,Category, Tooltip, ColumnSeries]}/>
        <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              xName="x"
              yName='y'
              name="Usa"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10
              }}
            >

            </SeriesDirective>

        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item,index) => 
            <RangeColorSettingDirective key={index} {...item}/>
          )}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  )
}

export default ColorMapping