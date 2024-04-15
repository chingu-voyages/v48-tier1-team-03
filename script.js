import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//##################
// ## USER SEARCH ##
// #################

// dinosaur grid elements
const dinoGrid = document.getElementById("dino-grid");
const gridContainer = document.getElementById("grid-container");
const nameInput = document.getElementById("name-input");

// read the data from the file
async function getDinosaurs() {
  return fetch("./data.json")
    .then(response => response.json())
}

// update the cards grid with the supplied data
function updateGrid(data) {  
  // update the grid contain's html
  const gridHTML = data.map(entry => `<div class="col-xs-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card text-bg-dark">
                                          <img src="${entry.imageSrc}" class="card-img opacity-25" alt="...">
                                          <div class="card-img-overlay text-bg-primary bg-opacity-25 d-flex flex-column align-items-center justify-content-center">
                                            <h5 class="card-title display-6 fs-3">${entry.name}</h5>
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dinoModal" data-bs-id="${entry.id}">Learn More</button>
                                          </div>
                                        </div>
                                      </div>`).join("\n");
  gridContainer.innerHTML = gridHTML;
}

// updates the grid on text input
nameInput.addEventListener("input", (event) => {
  const searchVal = event.target.value;

  // read the data from the file
  getDinosaurs()
    // filter the data based on user input
    .then(data => data.filter(entry => entry.name.includes(searchVal)))
    // update the grid HTML content
    .then(data => {
    updateGrid(data);
  });

  // scroll to the grid
  dinoGrid.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
});

//###########
// ## MODAL #
// ##########
// modal elements
const dinoModal = document.getElementById("dinoModal");
const modalImage = document.getElementById("dino-img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBody = document.getElementById("modal-body");

// fill the modal html with the info of the selected dinosaurs
async function updateModal(id) {
  // read in all the raw data
  let data = await getDinosaurs();
  let entry;

  for (const dino of data) {
    if (dino.id == id) {
      entry = { ...dino };
      break;
    }
  }

  modalImage.src = entry.imageSrc;
  modalTitle.innerText = entry.name;
  modalSubtitle.innerText = entry.typeOfDinosaur;
  
  modalBody.innerHTML = `<div class="row py-2">
                          <div class="col text-capitalize fw-bold">species:</div>
                          <div class="col text-capitalize">${entry.typeSpecies}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">found in:</div>
                          <div class="col text-capitalize">${entry.foundIn}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">when lived:</div>
                          <div class="col text-capitalize">${entry.whenLived}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">diet:</div>
                          <div class="col text-capitalize">${entry.diet}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">length:</div>
                          <div class="col text-capitalize">${entry.length}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">weight:</div>
                          <div class="col text-capitalize">${entry.weight}</div>
                        </div>
                        <div class="row py-2">
                          <div class="col text-capitalize fw-bold">description:</div>
                          <div class="col-12">${entry.description}</div>
                        </div>`
}

// update and display modal on buton click
dinoModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  const dinoID = button.getAttribute("data-bs-id");
  
  updateModal(dinoID);
});

//###########
// ## CHART #
// ##########
const chartContainer = document.getElementById("chart-container");

function renderChart(data) {
  // clear the chart container
  chartContainer.innerHTML = "";

  const width = chartContainer.clientWidth;
  const height = Math.min(500, 2 * width / 3);

  // Create the color scale.
  const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

  // Create the pie layout and arc generator.
  const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

  const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, 0.8 * height) / 2 - 1);

  const labelRadius = arc.outerRadius()() * .7;

  // A separate arc generator for labels.
  const arcLabel = d3.arc()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);

  const arcs = pie(data);
  console.log(arcs)

  // Create the SVG container.
  const svg = d3.select("#chart-container")
                .append("svg")
                .attr("height", height)
                .attr("width", width)
                .attr("viewBox", [-width / 2, -height / 2, width, height])
                .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif; color: #FFFFFF;");

  // Add a sector path for each value.
  svg.append("g")
      .attr("stroke", "white")
    .selectAll()
    .data(arcs)
    .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

  // Create a new arc generator to place a label close to the edge.
  // The label shows the value if there is enough room.
  svg.append("g")
      .attr("text-anchor", "middle")
    .selectAll()
    .data(arcs)
    .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > .5).append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => `${d.data.value.toLocaleString("en-US")}%`));
}

function updateChart() {
  getDinosaurs()
    .then(data => {
      let totalCount = 0;
      let dietCounts = {}
      data.forEach(entry => {
        if (dietCounts.hasOwnProperty(entry.diet)) {
          dietCounts[entry.diet] += 1;
        } else {
          dietCounts[entry.diet] = 1;
        }
        totalCount += 1;
      })
      
      const chartData = [];
      Object.keys(dietCounts).forEach(k => {
        chartData.push({ "name": k, "value": Math.round(10000 * dietCounts[k] / totalCount) / 100})
      })
      
      return chartData;
    })
    .then(data => renderChart(data));
}

// DOCUMENT EVENTS CALLBACKS
window.addEventListener("resize", () => {
  updateChart();
});

document.addEventListener("DOMContentLoaded", () => {
  getDinosaurs().then(data => {
    console.log(data);
    updateGrid(data);
  });

  updateChart();
});