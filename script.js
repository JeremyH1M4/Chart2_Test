// const Labels = ["T-34", "Panther", "Tiger I", "Tiger II", "IS-2", "IS-3", "IS-4"];
// const Horsepower = [500, 700, 900, 1200, 1500, 1800, 2000];
// const Armor = [45, 80, 100, 150, 120, 200, 250];

let info = localStorage.getItem("T1");
let object = JSON.parse(info);
console.log(object.Tanks_B1);
console.log(object.Armor_B1);
console.log(object.Horsepower_B1);

// Data and labels
const labels = object.Tanks_B1;
const data = {
  labels: object.Tanks_B1,
  datasets: [
    {
      label: 'Horsepower',
      data: object.Horsepower_B1,
      borderColor: 'rgba(251, 0, 0, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
    },
    {
      label: 'Armor',
      data: object.Armor_B1,
      borderColor: 'rgba(99, 99, 255, 1)',
      backgroundColor: 'rgba(99, 132, 255, 0.5)',
      borderWidth: 1,
    }
  ]
};

// Chart configuration
const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Tank Horsepower and Armor Comparison'
      }
    }
  },
};

// Initialize the chart once the DOM is loaded
window.addEventListener('load', () => {
  const ctx = document.getElementById('Chart');
  if (!ctx) {
    console.error('Canvas element with id "Chart" not found');
    return;
  }
  // If using Chart.js v3+, pass the canvas context or element
  new Chart(ctx, config);
});