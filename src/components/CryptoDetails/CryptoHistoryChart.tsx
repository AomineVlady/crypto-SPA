import React, { useState } from 'react';
import { VictoryChart } from 'victory';
import { VictoryLine } from 'victory-line';
import { VictoryZoomContainer } from 'victory-zoom-container';
import { ICryptoHistoryItem } from '../../models/ICryptoDetail';
import { ChartWrapper } from './style';

interface CryptoHistoryChartProps {
  history: ICryptoHistoryItem[] | [],
}

const CryptoHistoryChart: React.FC<CryptoHistoryChartProps> = ({ history }) => {
  const [zoomDomain, setZoomDomain] = useState();

  const handleZoom = (domain: any) => {
    setZoomDomain(domain)
  }

  const chartData = history.map(item => {
    return {
      x: new Date(item.date),
      y: parseFloat(item.priceUsd)
    }
  })

  return (
    <ChartWrapper>
      <VictoryChart
        width={1050}
        height={500}
        containerComponent={
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" }
          }}
          data={chartData}
        />

      </VictoryChart>
    </ChartWrapper>
  )
}

export default CryptoHistoryChart;
