// Register the datalabels plugin
Chart.register(ChartDataLabels);

const ctx = document.getElementById("performanceChart").getContext("2d");

new Chart(ctx, 
{
    type: "bar",
    data: 
    {
        labels: 
        [
            "Resident Evil 4", "Horizon Forbidden West", "Frostpunk 2",
        ],
        datasets: 
        [
            {
                label: "RTX 2080 TI",
                data: [50, 45, 40],
                backgroundColor: "gray",
                barThickness: 45,
            },
            {
                label: "RTX 3090 TI",
                data: [90, 80, 66],
                backgroundColor: "lime",
                barThickness: 45,
            },  
            {
                label: "RTX 4090",
                data: [155, 120, 90],
                backgroundColor: "limegreen",
                barThickness: 45,
            },
            {
                label: "RTX 5090",
                data: [180, 140, 110],
                backgroundColor: "red",
                barThickness: 45,
            },
        ]
    },
    options: 
    {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "white",
                    font: { size: 16 },
                    boxWidth: 20,
                    padding: 10,
                    usePointStyle: false,
                }
            },
            datalabels: {
                anchor: "center", // Position the label in the center of the bar
                align: "center", // Align the label in the center
                color: "white", // Use black for better contrast inside the bars
                font: {
                    size: 12,
                    weight: "bold"
                },
                formatter: (value) => {
                    return value; // Show just the FPS value
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: { size: 14 },
                bodyFont: { size: 12 },
                padding: 10
            }
        },
        scales: {
            x: {
                ticks: { 
                    color: "white", 
                    font: { size: 14 }
                },
                grid: { 
                    color: "#222",
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                max: 200,
                ticks: { 
                    color: "white", 
                    font: { size: 14 }
                },
                grid: { 
                    color: "#222" 
                },
                title: { 
                    display: true, 
                    text: "FPS", 
                    color: "white", 
                    font: { size: 16 } 
                }
            }
        }
    }
});