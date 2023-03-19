import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent{
  render() {
    const {id,height,width,color,data,type,currentColor} = this.props
    return(
      <SparklineComponent 
        id={id} 
        height={height} 
        width={width} 
        type={type}
        lineWidth={1} 
        valueType="Numeric" 
        fill={color} 
        dataSource={data} 
        xName="x" 
        yName="y" 
        border={{color: currentColor, width: 2}}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${y}',
          trackLineSettings: {
            visible: true
          },
        }}
        markerSettings={{visible: ['All'],size: 2.5, fill: currentColor}}
        
      >
      
        <Inject services={[SparklineTooltip]}></Inject>
      
      </SparklineComponent>
    )
  }
}






















































export default SparkLine