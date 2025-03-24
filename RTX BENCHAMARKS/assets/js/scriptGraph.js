// Register the datalabels plugin
Chart.register(ChartDataLabels);

// Register the datalabels plugin

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

// Data for Cyberpunk 2077
const data1080p = {
    "2080TI": { avgFps: 146, lowFps: 102, power: 273, efficiency: 0.52 },
    "3090TI": { avgFps: 167, lowFps: 133, power: 342, efficiency: 0.48 },
    "4090": { avgFps: 171, lowFps: 162, power: 406, efficiency: 0.49 },
    "5090": { avgFps: 216, lowFps: 204, power: 547, efficiency: 0.46 }
};

const data1440p = {
    "2080TI": { avgFps: 92, lowFps: 88, power: 28 },
    "3090TI": { avgFps: 108, lowFps: 108, power: 356 },
    "4090": { avgFps: 122, lowFps: 142, power: 422 },
    "5090": { avgFps: 153, lowFps: 178, power: 569 }
};

const data2160p = {
    "2080TI": { avgFps: 43, lowFps: 58, power: 289 },
    "3090TI": { avgFps: 51, lowFps: 69, power: 352 },
    "4090": { avgFps: 60, lowFps: 98, power: 417 },
    "5090": { avgFps: 76, lowFps: 124, power: 563 }
};

// Create the charts for Cyberpunk 2077
createChart("chart1080p", data1080p, "1080p (Full HD) - Ultra Settings", "CyberPunk 2077 - Ultra settings 1080p");
createChart("chart1440p", data1440p, "1440p (QHD) - Ultra Settings", "CyberPunk 2077 - Ultra settings 1440p");
createChart("chart2160p", data2160p, "2160p (4K) - Ultra Settings", "CyberPunk 2077 - Ultra settings 2160p");