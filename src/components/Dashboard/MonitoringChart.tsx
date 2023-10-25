import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { Box, Card } from '@mui/material'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = Array.from({ length: 160 }).map((_, i) => `${i}:${i}`);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Velocidade da esteira',
        },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'Velocidade em m/s',
            data: labels.map(() => faker.number.int({ min: 1, max: 10 })),
            borderColor: '#FF5C00',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
        },
    ],
};


const MonitoringChart = () => {
    return (
        <Box marginY={3}>
            <Card elevation={5} sx={{ padding: 2 }}>
                <Line options={options} data={data} />
            </Card>
        </Box>
    )
}

export default MonitoringChart