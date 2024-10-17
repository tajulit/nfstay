'use client'
import { useState, useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const YearPlan = () => {
    const chartRef = useRef(null)
    const [yearPlan, setYearPlan] = useState([])

    // Initial parameters
    let initialAmount = 20000
    let annualAppreciation = 0.02 // 2% annual appreciation
    let netDividendYield = 0.1486 // 14.86% net dividend yield
    let holdingPeriod = 6 // 6 years including year 0

    // Function to calculate earnings for each year
    const calculateYearPlan = () => {
        let plan = []
        let totalAmount = initialAmount

        for (let year = 0; year < holdingPeriod; year++) {
            let earningsFromDividend = totalAmount * netDividendYield
            totalAmount += totalAmount * annualAppreciation + earningsFromDividend
            plan.push({
                year: year,
                totalAmount: totalAmount.toFixed(2)
            })
        }
        return plan
    }

    // Function to update the chart
    const updateChart = () => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }

            const ctx = chartRef.current.getContext('2d')

            // Extract labels (years) and data (total amounts) for the chart
            const labels = yearPlan.map((data) => data.year == 0 ? "Today" : `Year ${data.year}`)
            const data = yearPlan.map((data) => data.totalAmount)

            // Create a new chart
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Total Amount',
                        data: data,
                        fill: true,
                        backgroundColor: '#efeeff',
                        borderColor: '#954AFC',
                        pointRadius:0,
                        tension: 0.1,
                        
                    }]
                },
                
                options: {
                    plugins:{
                        legend:{
                            display:false
                        },
                    },
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false,
                        },
                        x: {
                            border: {
                                dash: [6, 6],
                            },
                           ticks:{
                            font: {
                                size: 10
                            },
                            padding:15,

                           },
                            title: {
                                display: false,
                                text: 'Year',
                            },
                        },
                    },
                },
            })

            chartRef.current.chart = newChart
        }
    }

    // Calculate the year plan and update the chart when component mounts
    useEffect(() => {
        const plan = calculateYearPlan()
        setYearPlan(plan)
    }, [])

    // Update the chart whenever yearPlan changes
    useEffect(() => {
        if (yearPlan.length > 0) {
            updateChart()
        }
    }, [yearPlan])

    return (


        <div className="flex w-full h-52 relative ">
            <canvas ref={chartRef}></canvas>
        </div>

    )
}

export default YearPlan
