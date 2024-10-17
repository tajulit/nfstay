"use client"
import { Chart } from "chart.js/auto"
import { useRef, useEffect } from 'react'



const Holidays = () => {

    const chartRef = useRef(null)



    const data = [{
        label: "Liquidity",
        data: 25,
        color: "#20E19F"
    },
    {
        label: "Properties",
        data: 50,
        color: "#9945FF"
    },
    {
        label: "STAY",
        data: 25,
        color: "#5F90D1"
    }
    ]


    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }
            const ctx = document.getElementById('holidaysChart').getContext('2d');
            const holidaysChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [{
                        label: 'My First Dataset',
                        data: data.map(item => item.data),
                        backgroundColor: data.map(item => item.color),
                        hoverOffset: 4
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            chartRef.current.chart = holidaysChart



        }
    }, [])









    return (
        <div className="flex flex-col gap-5 border rounded-lg shadow">
            <div className="w-full flex items-center justify-between border-b-2 p-4">
                <h4 className="text-lg font-bold text-black 2xl:text-2xl">Total Holdings</h4>
                <h4 className="text-lg font-bold text-[#0C0839] opacity-60 2xl:text-2xl">$14,520</h4>
            </div>
            <div className="flex flex-col p-8 gap-5">
                <div className="p-4 bg-[#ECEEFB] rounded-full max-w-52 self-center">
                    <canvas id="holidaysChart" ref={chartRef}></canvas>
                </div>
                <div className="flex flex-col gap-2 px-12">
                    {
                        data.map((item, key) => (
                            <div key={key} className="flex items-center justify-between">
                                <div className="flex items-center gap-2 2xl:text-lg">
                                    <div className="w-3.5 h-3.5 rounded-full " style={{ border: `3px solid ${item.color}` }}></div>
                                    <p className="text-black opacity-60 font-medium">{item.label}</p>
                                </div>
                                <p className={` font-bold 2xl:text-lg`} style={{color:item.color}}>{item.data}%</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Holidays