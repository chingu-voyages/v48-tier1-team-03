// Get the container
const cardContainer = document.getElementById("dinoCards");

// Function to create card element for each dino entry
function entryCard(dino) {
  // Create the container element
  const containerEl = document.createElement("div");
  containerEl.classList.add("col-lg-4", "col-md-6", "col-sm-12");

  // Create the card element
  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "px-lg-2");
  containerEl.appendChild(cardEl);

  // Create the image element
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.setAttribute("src", dino.imageSrc);
  image.setAttribute("alt", dino.name);
  image.setAttribute("data-bs-toggle", "modal");
  image.setAttribute("data-bs-target", "#dinoModal");
  image.setAttribute("data-id", dino.id);
  cardEl.appendChild(image);

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardEl.appendChild(cardBody);

  // Create the card title element
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = dino.name;
  cardTitle.setAttribute("data-bs-toggle", "modal");
  cardTitle.setAttribute("data-bs-target", "#dinoModal");
  cardTitle.setAttribute("data-id", dino.id);
  cardBody.appendChild(cardTitle);

  return containerEl;
}


// Data
// Fetch the JSON dat
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Use the JSON data here
        // Loop through the data
        data.forEach((dino) => {
          // Create the card element using the entryCard function
          const card = entryCard(dino);
        
          // Append the card to the container
          cardContainer.appendChild(card);
        });
            // Further processing of the data here
            // Add event listener for modal
        const modal = document.getElementById("dinoModal");
        
        modal.addEventListener("show.bs.modal", function (event) {
          // Button
          const button = event.relatedTarget;
          // Extract data-id 
          const dinoId = button.getAttribute("data-id");
          // Find the dinosaur object
          const selectedDino = data.find((dino) => dino.id.toString() === dinoId);
          
          // Update modal content with the dinosaur's details
          const modalTitle = modal.querySelector(".modal-title");
          const modalImage = modal.querySelector(".dino-img");
          const modalName = modal.querySelector(".dino-name");
          const modalType = modal.querySelector(".dino-type");
          const modalLength = modal.querySelector(".dino-length");
          const modalDiet = modal.querySelector(".dino-diet");
          const modalWhenLived = modal.querySelector(".dino-when-lived");
          const modalTypeSpecies = modal.querySelector(".dino-type-species");
          const modalDescription = modal.querySelector(".dino-description");
        
          modalTitle.textContent = "Dinosaur Details";
          modalImage.src = selectedDino.imageSrc;

          modalName.textContent = selectedDino.name;
          modalType.textContent = `Type: ${selectedDino.typeOfDinosaur}`;
          modalLength.textContent = `Length: ${selectedDino.length} meters`;
          modalDiet.textContent = `Diet: ${selectedDino.diet}`;
          modalWhenLived.textContent = `When Lived: ${selectedDino.whenLived}`;
          modalTypeSpecies.textContent = `Type Species: ${selectedDino.typeSpecies}`;
          modalDescription.textContent = `Description: ${selectedDino.description}`;
        });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });







  