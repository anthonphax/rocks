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


const Login = () => {
    return (
    <div className="Auth-form-container">
        <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-fields">
            <div className="form-group mt-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                />
            </div>
            <p className="forgot-password text-right mt-2">
            Forgot <a className="esqueceu" href="#"> password</a>
          </p>
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
     
      
    </div>
    )
}

export default Login