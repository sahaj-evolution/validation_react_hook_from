import React, { useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const Chart3 = () => {
  const [data] = useState({
    labels: ['Bubble'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(194, 116, 161, 0.5)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          { x: 65, y: 75 },
          { x: 75, y: 12 },
          { x: 89, y: 54 },
          { x: 94, y: 23 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 },
        ],
      },
    ],
  });

  return (
    <CDBContainer>
      <h3 className="mt-5">Bubble chart</h3>
      <Bubble data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart3;