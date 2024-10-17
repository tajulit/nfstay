"use client"
import { useEffect, useRef } from 'react'
import { Chart } from "chart.js/auto"

const Graph = () => {

    const currencyRateChart = {
        labels: [

            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',"11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25"
            
        ],
        data: [10, 80, 60, 65, 50, 70, 75, 40, 45, 60, 70, 30,40, 50, 60, 65, 50, 70, 75, 40, 45, 60, 70, 30,40],
    }
    const chartRef = useRef(null);
    const updateChart = () => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }

            const ctx = chartRef.current.getContext("2d")
            const { labels, data } = currencyRateChart

            const newChart = new Chart(ctx, {
                backgroundColor: "#fff",
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Stay Value',
                        data: data,
                        fill: true,
                        backgroundColor: '#f5f5ff',
                        borderColor: '#685bff',
                        pointRadius:0,
                        tension: 0.5
                    }]
                },
                options: {
                    plugins: {
                        
                        legend: {
                            display: false
                        },
                        
                        customCanvasBackgroundColor: {
                            color: 'lightGreen',
                        }
                    },
                    
                      
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero:true,
                            display: false,
                            grid: {
                                display: false
                            },
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            display: false,
                        }
                    }
                }
            })

            chartRef.current.chart = newChart

        }
    }

    useEffect(() => {
        updateChart()  // Update chart when component is mounted or when currentFilter changes
    }, [])

    return (
        <div className="flex  h-full relative rounded-lg overflow-hidden">
            <canvas ref={chartRef}></canvas>
        </div>
    )






}

export default Graph