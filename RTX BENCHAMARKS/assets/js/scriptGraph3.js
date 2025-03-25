// Register the datalabels plugin
Chart.register(ChartDataLabels);

// Function to create a chart for a given resolution
function createChart(canvasId, resolutionData, title, yAxisLabel) {
    const ctx = document.getElementById(canvasId).getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Average FPS", "1% Low FPS", "Average Power(W)"],
            datasets: [
                {
                    label: "RTX 2080 TI",
                    data: [
                        resolutionData["2080TI"].avgFps,
                        resolutionData["2080TI"].lowFps,
                        resolutionData["2080TI"].power,
                    ],
                    backgroundColor: "gray",
                    barThickness: 45,
                },
                {
                    label: "RTX 3090 TI",
                    data: [
                        resolutionData["3090TI"].avgFps,
                        resolutionData["3090TI"].lowFps,
                        resolutionData["3090TI"].power,
                    ],
                    backgroundColor: "yellow",
                    barThickness: 45,
                },
                {
                    label: "RTX 4090",
                    data: [
                        resolutionData["4090"].avgFps,
                        resolutionData["4090"].lowFps,
                        resolutionData["4090"].power,
                    ],
                    backgroundColor: "limegreen",
                    barThickness: 45,
                },
                {
                    label: "RTX 5090",
                    data: [
                        resolutionData["5090"].avgFps,
                        resolutionData["5090"].lowFps,
                        resolutionData["5090"].power,
                    ],
                    backgroundColor: "red",
                    barThickness: 45,
                },
            ]
        },
        options: {
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
                    anchor: "center",
                    align: "center",
                    color: "black",
                    font: {
                        size: 12,
                        weight: "bold"
                    },
                    formatter: (value) => {
                        return value;
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
                    max: 600,
                    ticks: { 
                        color: "white", 
                        font: { size: 14 }
                    },
                    grid: { 
                        color: "#222" 
                    },
                    title: { 
                        display: true, 
                        text: yAxisLabel,
                        color: "white", 
                        font: { size: 16 } 
                    }
                }
            }
        }
    });
}

// Data for Alan Wake 2
const data1080pAlanWake = {
    "2080TI": { avgFps: 126, lowFps: 83, power: 288 },
    "3090TI": { avgFps: 144, lowFps: 94, power: 333 },
    "4090": { avgFps: 167, lowFps: 116, power: 394 },
    "5090": { avgFps: 210, lowFps: 141, power: 532 }
};

const data1440pAlanWake = {
    "2080TI": { avgFps: 86, lowFps: 53, power: 288 },
    "3090TI": { avgFps: 100, lowFps: 64, power: 342 },
    "4090": { avgFps: 123, lowFps: 87, power: 406 },
    "5090": { avgFps: 155, lowFps: 117, power: 547 }
};

const data2160pAlanWake = {
    "2080TI": { avgFps: 48, lowFps: 24, power: 290 },
    "3090TI": { avgFps: 58, lowFps: 30, power: 349 },
    "4090": { avgFps: 74, lowFps: 51, power: 413 },
    "5090": { avgFps: 94, lowFps: 77, power: 558 }
};

// Create the charts for Alan Wake 2
createChart("chart1080pAlanWake", data1080pAlanWake, "1080p (Full HD) - High Settings", "Alan Wake 2 - High settings 1080p");
createChart("chart1440pAlanWake", data1440pAlanWake, "1440p (QHD) - High Settings", "Alan Wake 2 - High settings 1440p");
createChart("chart2160pAlanWake", data2160pAlanWake, "2160p (4K) - High Settings", "Alan Wake 2 - High settings 2160p");