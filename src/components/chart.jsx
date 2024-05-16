import React from "react";
import {Line} from "react-chartjs-2";
import {CategoryScale, Chart, LinearScale, LineElement, PointElement} from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


export const LineChart = ({data, data2 = 0}) => {
    let lineChartData

    if (data.length === 0) data = [0, 0]
    if (data2 && data2.length === 0) data2 = [0, 0]

    if (data.length === 1) data = [0, ...data]
    if (data2 && data2.length === 1) data2 = [0, ...data2]

    if (data2) {
        lineChartData = {
            labels: data2.map(a => {
                if (a === 260) {
                    return "win"
                }
                return a
            }),
            datasets: [
                {
                    data: data || [],
                    borderColor: "rgba(51,229,255,0.76)",
                    lineTension: 0.5
                },
                {
                    data: data2 || [],
                    borderColor: "#ff33dd",
                    lineTension: 0.5,
                    borderWidth: 5
                }
            ]
        };
    } else {
        lineChartData = {
            labels: data.map(a => a),
            datasets: [
                {
                    data: data || [],
                    borderColor: "#68ff6b",
                    lineTension: 0.5
                }
            ]
        };
    }

    return (
        <Line
            type="line"
            width={160}
            height={60}
            options={{
                animation: false,
                title: {
                    display: false,
                    text: "Рекорд",
                    fontSize: 20
                },
                legend: {
                    display: false,
                },
                scales: {
                    y: {
                        min: 0
                    }
                }

            }}
            data={lineChartData}
        />
    );
};
