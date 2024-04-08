import data from './data.json' with { type: 'json' };

// DOM ELEMENTS
const gridContainer = document.getElementById("grid-container");
const gridSearchInput = document.getElementById("dinoName");

const gridModal = document.getElementById("dinoModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");

// HELPER FUNCTIONS
function getDataEntry(entryID) {
  for (const entry of data) {
    if (entry.id == entryID) {
      return entry;
    }
  }
}

// Data
// Fetch the JSON data
function renderCards(searchStr) {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      gridContainer.innerHTML = data.filter((entry) => entry.name.includes(searchStr))
          .map((entry) =>
            `<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div class="card text-bg-dark">
                <img src="${entry.imageSrc}" class="card-img opacity-25" alt="...">
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title display-6 fs-3">${entry.name}</h5>
                  <!--<p class="card-text">${entry.description}</p> -->
                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dinoModal" data-id=${entry.id}>Learn More</a>
                </div>
              </div>
            </div>`)
          .join("\n");
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

// EVENT LISTENERS
gridSearchInput.addEventListener("input", () => {
  const searchValue = gridSearchInput.value;
  renderCards(searchValue);
})
gridModal.addEventListener("show.bs.modal", (event) => {
  const entryID = event.relatedTarget.getAttribute("data-id");
  const entryObject = getDataEntry(entryID);

  // Update the modal attributes with the object data
  modalImg.setAttribute("src", entryObject.imageSrc);
  modalTitle.innerText = entryObject.name;
  modalSubtitle.innerText = entryObject.typeOfDinosaur;
});

document.addEventListener("DOMContentLoaded", () => {
  renderCards("");
});