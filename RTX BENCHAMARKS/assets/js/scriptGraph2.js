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

// Data for Indiana Jones
const data1080pIndiana = {
    "2080TI": { avgFps: 122, lowFps: 147, power: 277 },
    "3090TI": { avgFps: 142, lowFps: 157, power: 333 },
    "4090": { avgFps: 164, lowFps: 174, power: 394 },
    "5090": { avgFps: 207, lowFps: 219, power: 532 }
};

const data1440pIndiana = {
    "2080TI": { avgFps: 101, lowFps: 108, power: 288 },
    "3090TI": { avgFps: 117, lowFps: 120, power: 346 },
    "4090": { avgFps: 145, lowFps: 142, power: 410 },
    "5090": { avgFps: 181, lowFps: 191, power: 552 }
};

const data2160pIndiana = {
    "2080TI": { avgFps: 57, lowFps: 67, power: 289 },
    "3090TI": { avgFps: 68, lowFps: 78, power: 349 },
    "4090": { avgFps: 91, lowFps: 99, power: 413 },
    "5090": { avgFps: 116, lowFps: 143, power: 558 }
};

// Create the charts for Indiana Jones
createChart("chart1080pIndiana", data1080pIndiana, "1080p (Full HD) - Ultra Settings", "Indiana Jones - Ultra settings 1080p");
createChart("chart1440pIndiana", data1440pIndiana, "1440p (QHD) - Ultra Settings", "Indiana Jones - Ultra settings 1440p");
createChart("chart2160pIndiana", data2160pIndiana, "2160p (4K) - Ultra Settings", "Indiana Jones - Ultra settings 2160p");