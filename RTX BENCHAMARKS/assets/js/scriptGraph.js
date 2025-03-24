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
                    max: 600, // Set a max to accommodate the highest value (power: 569)
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

// Create the charts for Cyberpunk 2077
createChart("chart1080p", data1080p, "1080p (Full HD) - Ultra Settings", "CyberPunk 2077 - Ultra settings 1080p");
createChart("chart1440p", data1440p, "1440p (QHD) - Ultra Settings", "CyberPunk 2077 - Ultra settings 1440p");
createChart("chart2160p", data2160p, "2160p (4K) - Ultra Settings", "CyberPunk 2077 - Ultra settings 2160p");

// Create the charts for Indiana Jones
createChart("chart1080pIndiana", data1080pIndiana, "1080p (Full HD) - Ultra Settings", "Indiana Jones - Ultra settings 1080p");
createChart("chart1440pIndiana", data1440pIndiana, "1440p (QHD) - Ultra Settings", "Indiana Jones - Ultra settings 1440p");
createChart("chart2160pIndiana", data2160pIndiana, "2160p (4K) - Ultra Settings", "Indiana Jones - Ultra settings 2160p");

// Create the charts for Alan Wake 2
createChart("chart1080pAlanWake", data1080pAlanWake, "1080p (Full HD) - High Settings", "Alan Wake 2 - High settings 1080p");
createChart("chart1440pAlanWake", data1440pAlanWake, "1440p (QHD) - High Settings", "Alan Wake 2 - High settings 1440p");
createChart("chart2160pAlanWake", data2160pAlanWake, "2160p (4K) - High Settings", "Alan Wake 2 - High settings 2160p");