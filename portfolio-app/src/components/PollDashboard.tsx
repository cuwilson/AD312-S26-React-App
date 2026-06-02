import { useContext, useEffect, useRef, useState } from "react"
import { Chart } from "chart.js/auto"
import { ThemeContext } from "./ThemeContext"
import "../css/PollDashboard.css"

function PollDashboard() {
    const { theme } = useContext(ThemeContext)
    const [votes, setVotes] = useState({
        React: 0,
        Vue: 0,
        Angular: 0,
        Svelte: 0,
    })

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const chartInstanceRef = useRef<Chart | null>(null)


    const chartColors =
        theme === "dark"
            ? {
                bar: "#8f7ab8",
                border: "#c7bdd6",
                text: "#f4f4f4",
                grid: "rgba(244, 244, 244, 0.15)",
            }
            : {
                bar: "#b8f2d0",
                border: "#57866b",
                text: "#4a4a4a",
                grid: "rgba(122, 92, 170, 0.15)",
            }


    function handleVote(option: keyof typeof votes) {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [option]: prevVotes[option] + 1,
        }))
    }

    useEffect(() => {
        if (!canvasRef.current) return

        const labels = Object.keys(votes)
        const voteCounts = Object.values(votes)

        chartInstanceRef.current = new Chart(canvasRef.current, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Votes",
                        data: voteCounts,
                        backgroundColor: chartColors.bar,
                        borderColor: chartColors.border,
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: chartColors.text,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: chartColors.text,
                        },
                        grid: {
                            color: chartColors.grid,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: chartColors.text,
                        },
                        grid: {
                            color: chartColors.grid,
                        },
                    },
                },
            },
        })

        // If we created a new Chart on every render without destroying the old one,
        // Chart.js would still have the old chart attached to the same canvas,
        // which can cause canvas rendering errors and memory leaks.
        return () => {
            chartInstanceRef.current?.destroy()
            chartInstanceRef.current = null
        }
    }, [])

    useEffect(() => {
        if (!chartInstanceRef.current) return

        chartInstanceRef.current.data.datasets[0].data = Object.values(votes)
        chartInstanceRef.current.update()
    }, [votes])


    // When the theme changes, we need to update the chart's colors to match the new theme.
    useEffect(() => {
        if (!chartInstanceRef.current) return

        const chart = chartInstanceRef.current

        chart.data.datasets[0].backgroundColor = chartColors.bar
        chart.data.datasets[0].borderColor = chartColors.border

        chart.options.plugins!.legend!.labels!.color = chartColors.text

        chart.options.scales!.x!.ticks!.color = chartColors.text
        chart.options.scales!.x!.grid!.color = chartColors.grid

        chart.options.scales!.y!.ticks!.color = chartColors.text
        chart.options.scales!.y!.grid!.color = chartColors.grid

        chart.update()
    }, [theme])

    return (
        <div className="container poll-container">
            <h1>Dynamic Poll Dashboard</h1>
            <p>Vote for your favorite JavaScript framework:</p>

            <div className="poll-buttons">
                {Object.keys(votes).map((option) => (
                    <button
                        key={option}
                        onClick={() => handleVote(option as keyof typeof votes)}
                    >
                        Vote {option}
                    </button>
                ))}
            </div>

            <div className="chart-wrapper">
                <canvas ref={canvasRef}></canvas>
            </div>
            <div className="poll-results">
                {Object.entries(votes).map(([option, count]) => (
                    <p key={option}>
                        {option}: {count}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default PollDashboard