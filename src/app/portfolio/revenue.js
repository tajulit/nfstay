"use client"
import { useState,useRef, useEffect } from "react"
import { Chart } from 'chart.js/auto'


const Revenue = () => {

    const [currentFilter, setCurrentFilter] = useState("M")
    const chartRef = useRef(null)

    const filters = [
        "D", "W", "M", "Y"
    ]

    const filterData = {
        "D": {
            // Changed time labels to day labels
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            data: [.0205, 0.221, 0.0015, 0.122, 0.0320, 0.223, 0.1111],
        },
        "W": {
            // Updated to show week labels
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
            data: [50, 60, 55, 65, 70, 75, 80],
        },
        "M": {
            // Updated to show months
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [80, 70, 60, 85, 90, 65, 75, 88, 92, 68, 85, 80],
        },
        "Y": {
            // Updated to show years
            labels: ['2020', '2021', '2022', '2023', '2024'],
            data: [500, 600, 550, 620, 700],
        },
    };
    

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }

            const ctx = chartRef.current.getContext("2d")
            const { labels, data } = filterData[currentFilter]

            const newChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Revenue $',
                        data: data,
                        fill: true,
                        backgroundColor: '#efeeff',
                        borderColor: '#954AFC',
                        borderRadius: 10,
                        barThickness:50,
                      
                    }]
                },
                
                options: {
                    
                    maintainAspectRatio:false,
                    scales:{
                        y:{
                            display:false,
                        
                        },
                        x:{
                            border:{
                                dash: [6,6]
                            }
                        }
                       
                       
                    },
                    
                    plugins: {
                      
                        legend: {
                            display: false
                        },
                        
                    }
                }
            })

            const toolTip = (context)=>{
                const {chart, tooltip} = context
                console.log(chart)


            }
            chartRef.current.chart = newChart
        }
    }
    , [currentFilter])



    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow border w-full">
            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col md:flex-row gap-7 items-center justify-between">
                    <div className="flex flex-col w-full sm:w-fit  gap-3">
                        <h1 className="font-semibold text-sm text-[#0C0839] 2xl:text-lg">Monthly Revenue</h1>
                        <div className="flex">
                            <h2 className="font-bold text-xl 2xl:text-3xl">$5,800</h2>
                            <span className="px-4 py-1.5 rounded-full text-[#27AE60] bg-[#6FCF971A] 2xl:text-base">+10.6%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 flex-wrap">
                        {
                            filters.map((filter, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentFilter(filter)}
                                    className={`px-3 py-1 rounded text-sm 2xl:text-base font-medium ${currentFilter === filter ? "bg-[#954AFC] text-white" : "text-black bg-white"} transition-all`}>
                                    {filter}
                                </button>
                            ))
                        }
                    </div>
                </div>
               
                <div className="flex overflow-x-auto h-64 relative">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    )
}

export default Revenue