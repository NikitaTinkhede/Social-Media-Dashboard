import {Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS,ArcElement, CategoryScale, LinearScale, DoughnutController, PointElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    DoughnutController,
    PointElement,
    Title,
    Tooltip,
    Legend
)

function YoutubeChart1() {
    const data = {
        labels: [
          'Total likes',
          'Total shares',
          'Total comments',
          'Total subscribers'
        ],
        datasets: [{
          label: 'Over View',
          data: [300,466, 77, 123],
          backgroundColor: [
            'rgba(192, 26, 62, 0.8)',
            'rgb(75, 20, 60)',
            'rgb(210, 203, 187)',
            'rgb(205, 136, 25)'
          ],
          hoverOffset: 4
        }]
      };
      const config = {
        type: 'doughnut',
        data: data,
      };
  return (
    <div>
      <Doughnut data={data} config={config}/>
    </div>
  )
}

export default YoutubeChart1;