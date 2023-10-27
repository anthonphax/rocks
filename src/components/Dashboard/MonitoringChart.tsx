import { useMemo } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { Box, Card } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const MonitoringChart = () => {
    const labels = useMemo(() => Array.from({ length: 30 }).map((_, i) => `${i}:${i}`), []);
    const options = useMemo(() => ({
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
    }), [])
    const data: ChartData<"line", number[], string> = useMemo(() => ({
        labels,
        datasets: [
            {
                label: 'Velocidade em m/s',
                data: labels.map(() => faker.number.int({ min: 1, max: 10 })),
                borderColor: 'black',
                backgroundColor: '#FF5C00',
                pointRadius: 5,
                borderWidth: 1,
                pointStyle: 'rectRounded'
            },
        ],
    }), []);

    return (
        <Box marginY={3}>
            <Card elevation={5} sx={{ padding: 2 }}>
                <Line options={options} data={data} />
            </Card>
        </Box>
    )
}

export default MonitoringChart