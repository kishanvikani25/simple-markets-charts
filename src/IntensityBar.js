import React, { useEffect, useState } from 'react'
import * as d3 from "d3";

export const IntensityBar = ({ company }) => {

    const [chartData, setData] = useState(null)
    const formatData = (data) => {
        const lastEightQuarters = data.slice(0, 16).filter((data, index) => index % 2 === 0)
        const formattedData = lastEightQuarters.map(({ date, period, revenueGrowth }) => ({
            date,
            period,
            revenueGrowth,
        }))
        setData(formattedData)
    }

    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/financial-growth/${company}?period=quarter&limit=80&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`)
            .then(response => response.json())
            .then(data => formatData(data))

        return setData(null)
    }, [company])

    if (!chartData) return null

    const domainValues = chartData.map(data => data.revenueGrowth)
    const opacityScale = d3.scaleLinear()
        .domain([d3.min(domainValues), d3.max(domainValues)])
        .range([0.4, 1]);

    console.log(chartData.map(data => data.revenueGrowth.toFixed(2)))

    return (
        <svg width="620" height="120">
            <defs>
                <linearGradient id="gradient">
                    {chartData.map((data, index) => (
                        <stop key={data.date} offset={`${12.5 * index}%`} stop-color="#000080" stop-opacity={opacityScale(data.revenueGrowth)}></stop>
                    ))}
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="600" height="20" fill="url(#gradient)" stroke="black" stroke-width="1" rx="7" ry="7" />
        </svg>
    )
}
