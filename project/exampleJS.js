document.getElementById("currentYear").textContent = new Date().getFullYear();

// Helper function to wrap text for chart labels
function formatLabel(str, maxwidth) {
  let sections = [];
  let words = str.split(" ");
  let temp = "";
  words.forEach((item, index) => {
    if (temp.length > 0) {
      temp += " " + item;
    } else {
      temp = item;
    }
    if (temp.length > maxwidth) {
      sections.push(temp);
      temp = "";
    }
    if (index === words.length - 1 && temp.length > 0) {
      sections.push(temp);
    }
  });
  return sections;
}

// Chart configurations
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: "#57534e" }, // stone-600
      grid: { color: "#e7e5e4" }, // stone-200
    },
    x: {
      ticks: { color: "#57534e" },
      grid: { display: false },
    },
  },
  plugins: {
    legend: {
      labels: { color: "#57534e" },
    },
    tooltip: {
      backgroundColor: "#292524", // stone-800
      titleColor: "#f59e0b", // amber-500
      bodyColor: "#fafaf9", // stone-50
      borderColor: "#f59e0b",
      borderWidth: 1,
    },
  },
};

const lineChartOptions = { ...chartOptions, tension: 0.1 };

// Insight 1: Regional Price Chart (Bar)
const regionalPriceCtx = document
  .getElementById("regionalPriceChart")
  .getContext("2d");
new Chart(regionalPriceCtx, {
  type: "bar",
  data: {
    labels: [
      "Neighborhood A",
      "Neighborhood B",
      "Neighborhood C",
      "Neighborhood D",
      "Neighborhood E",
    ],
    datasets: [
      {
        label: "Avg. Price per SqFt ($)",
        data: [750, 550, 400, 600, 480],
        backgroundColor: "rgba(245, 158, 11, 0.6)", // amber-500 with opacity
        borderColor: "rgba(245, 158, 11, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: "Average Price per SqFt by Neighborhood",
        color: "#44403c",
      },
    },
  },
});

// Insight 1: Market Trend Chart (Line)
const marketTrendCtx = document
  .getElementById("marketTrendChart")
  .getContext("2d");
new Chart(marketTrendCtx, {
  type: "line",
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Overall Market Avg. Price ($K)",
        data: [450, 470, 520, 580, 610],
        borderColor: "rgba(217, 119, 6, 1)", // amber-600
        backgroundColor: "rgba(217, 119, 6, 0.1)",
        fill: true,
      },
    ],
  },
  options: {
    ...lineChartOptions,
    plugins: {
      ...lineChartOptions.plugins,
      title: {
        display: true,
        text: "Overall Market Price Trend (Last 5 Years)",
        color: "#44403c",
      },
    },
  },
});

// Insight 2: Price vs Area (Scatter)
const priceVsAreaCtx = document
  .getElementById("priceVsAreaChart")
  .getContext("2d");
new Chart(priceVsAreaCtx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Price vs. Living Area",
        data: [
          { x: 1000, y: 300000 },
          { x: 1200, y: 350000 },
          { x: 1500, y: 450000 },
          { x: 1800, y: 500000 },
          { x: 2000, y: 600000 },
          { x: 2200, y: 650000 },
          { x: 2500, y: 700000 },
          { x: 2800, y: 780000 },
          { x: 3000, y: 850000 },
          { x: 3200, y: 900000 },
          { x: 1300, y: 380000 },
          { x: 2600, y: 720000 },
        ],
        backgroundColor: "rgba(245, 158, 11, 0.6)", // amber
      },
    ],
  },
  options: {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      x: {
        ...chartOptions.scales.x,
        title: { display: true, text: "Living Area (SqFt)", color: "#44403c" },
      },
      y: {
        ...chartOptions.scales.y,
        title: { display: true, text: "Sale Price ($)", color: "#44403c" },
      },
    },
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: "Sale Price vs. Living Area",
        color: "#44403c",
      },
    },
  },
});

// Insight 2: Amenity Impact (Bar)
const amenityImpactCtx = document
  .getElementById("amenityImpactChart")
  .getContext("2d");
new Chart(amenityImpactCtx, {
  type: "bar",
  data: {
    labels: [
      "2 Bathrooms",
      "3+ Bathrooms",
      "Standard Kitchen",
      "Renovated Kitchen",
      "No Garage",
      "With Garage",
    ],
    datasets: [
      {
        label: "Average Sale Price Premium ($)",
        data: [0, 50000, 0, 35000, 0, 25000], // Example premiums
        backgroundColor: [
          "rgba(217, 119, 6, 0.5)",
          "rgba(217, 119, 6, 0.8)",
          "rgba(120, 113, 108, 0.5)",
          "rgba(120, 113, 108, 0.8)", // stone
          "rgba(245, 158, 11, 0.5)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgba(217, 119, 6, 1)",
          "rgba(217, 119, 6, 1)",
          "rgba(120, 113, 108, 1)",
          "rgba(120, 113, 108, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    ...chartOptions,
    indexAxis: "y",
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: "Impact of Features on Price Premium",
        color: "#44403c",
      },
    },
  },
});

// Insight 3: Market Volume & Seasonality (Line)
const marketVolumeCtx = document
  .getElementById("marketVolumeChart")
  .getContext("2d");
new Chart(marketVolumeCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Volume (Units)",
        data: [300, 320, 450, 550, 650, 700, 680, 600, 500, 450, 380, 320],
        borderColor: "rgba(245, 158, 11, 1)", // amber-500
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        yAxisID: "y",
        fill: true,
      },
      {
        label: "Avg. Days on Market",
        data: [60, 55, 45, 35, 25, 22, 25, 30, 40, 50, 58, 62],
        borderColor: "rgba(120, 113, 108, 1)", // stone-500
        backgroundColor: "rgba(120, 113, 108, 0.1)",
        yAxisID: "y1",
        fill: true,
      },
    ],
  },
  options: {
    ...lineChartOptions,
    scales: {
      ...lineChartOptions.scales,
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: { display: true, text: "Sales Volume", color: "#44403c" },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: { display: true, text: "Avg. Days on Market", color: "#44403c" },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      ...lineChartOptions.plugins,
      title: {
        display: true,
        text: "Monthly Sales Volume & Days on Market",
        color: "#44403c",
      },
    },
  },
});

// Insight 4: Investment Opportunity (Bar)
const investmentOpportunityCtx = document
  .getElementById("investmentOpportunityChart")
  .getContext("2d");
new Chart(investmentOpportunityCtx, {
  type: "bar",
  data: {
    labels: ["Single Family", "Condominium", "Multi-Family", "Townhouse"],
    datasets: [
      {
        label: "Avg. YoY Price Appreciation (%)",
        data: [8, 7, 12, 9],
        backgroundColor: [
          "rgba(245, 158, 11, 0.7)",
          "rgba(217, 119, 6, 0.7)",
          "rgba(180, 83, 9, 0.7)", // darker amber
          "rgba(120, 113, 108, 0.7)", // stone
        ],
        borderColor: [
          "rgba(245, 158, 11, 1)",
          "rgba(217, 119, 6, 1)",
          "rgba(180, 83, 9, 1)",
          "rgba(120, 113, 108, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: "Average YoY Price Appreciation by Property Type",
        color: "#44403c",
      },
    },
  },
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a.nav-link");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      // Adjust offset as needed
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-nav");
    if (li.getAttribute("href") === `#${current}`) {
      li.classList.add("active-nav");
    }
  });
};
