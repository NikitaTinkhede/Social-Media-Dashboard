import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function LinkedinChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Looping Tension',
        data: [65, 59, 80, 81, 26, 25, 40],
        fill: false,
        borderColor: 'rgb(225, 20, 20)',
      },
    ],
  };

  const options = {   
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 2,
        loop: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: '102%', height: '350px' }}>
      <h2 style={{color:'black'}}>My Line Chart with Looping Tension</h2>
      <Line data={data} options={options} />
    </div>
  );
}