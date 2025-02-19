import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement,Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
 
);

const YoutubeChart2 = () => {
  const labels =["January","February","March","April","May","June","July"]
  const data = {
    labels:labels,
    datasets: [{
      label: 'Monthy View',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(242, 174, 14, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(225, 25, 68)',
        'rgb(223, 121, 18)',
        'rgb(239, 171, 13)',
        'rgb(4, 74, 74)',
        'rgb(5, 108, 176)',
        'rgb(89, 19, 229)',
        'rgb(110, 111, 113)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
 
   
  return (
    <div>
      <Bar data={data} options={config} />
    </div>
  );
};

export default YoutubeChart2;