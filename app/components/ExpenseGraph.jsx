import styles from "@/app/style/statistics.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        padding: 20,
      }
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 2000) - 1000);
};

export const data = {
  labels,
  datasets: [
    {
      borderRadius: 8,
      label: 'Rented',
      borderColor: '#f32b1f',
      backgroundColor: '#f32b1e',
      data: generateRandomData(),

    },
    {
      borderRadius: 8,
      label: 'Services',
      borderColor: '#0062ff',
      backgroundColor: '#0062ff',
      data: generateRandomData(),

    },
  ],
};

export default function ExpenseGraph() {
  return (
    <div className={styles.StatisticsComponent}>
      <div className={styles.tableHeader}>
        {/* <h1>Expenses</h1>
        <input type="date" name="graph" className={styles.dateFilter} /> */}
      </div>
     <Bar options={options} data={data} />
    </div>
  );
}
