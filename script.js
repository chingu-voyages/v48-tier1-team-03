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

function displayCards(substr) {
  // Remove the current cards from the container
  cardContainer.innerHTML = "";

  // Loop through the data
  data.forEach((dino) => {
      if (dino.name.includes(substr)) {
        // Create the card element using the entryCard function
        const card = entryCard(dino);

        // Append the card to the container
        cardContainer.appendChild(card);
      }
    });
  };


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

// Get the search field
const searchInput = document.getElementById("search");

// EVENT LISTENERS
search.addEventListener("input", () => {
  // navigate to the page grid
  cardContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });

  // filter grid entries and update HTML entries
  const searchValue = search.value;
  displayCards(searchValue);
});

document.addEventListener("DOMContentLoaded", () => {
  displayCards("");
});


// Data
const data = [
  {
    "id": 1,
    "name": "Aardonyx",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aardonyx.jpg",
    "typeOfDinosaur": "prosauropod",
    "length": 8,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Early Jurassic, 199-189 million years ago",
    "foundIn": "South Africa",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Prosauropoda, Anchisauria",
    "namedBy": "Yates, Bonnan, Neveling, Chinsamy and Blackbeard 2010 (2009)",
    "typeSpecies": "celestae",
    "description": "Aardonyx is known from 2 immature individuals. Adults would have been much larger, probably over 10m.Aardonyx would have been largely bipedal (walking on 2 legs) but also capable of walking on all 4 legs. This and its way of feeding are transitional features between those of basal sauropodomorphs and the more derived sauropods (large dinosaurs that walked on all fours) that came later."
  },
  {
    "id": 2,
    "name": "Abelisaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/abeli.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 9,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Late Cretaceous, 74-70 million years ago",
    "foundIn": "Argentina",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Neotheropoda, Ceratosauria, Abelisauridae, Abelisaurinae",
    "namedBy": "Bonaparte and Novas (1985)",
    "typeSpecies": "comahuensis",
    "description": "N/A"
  },
  {
    "id": 3,
    "name": "Achelousaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/achelou.jpg",
    "typeOfDinosaur": "ceratopsian",
    "length": 6,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 83-70 million years ago",
    "foundIn": "USA",
    "taxonomy": "Dinosauria, Ornithischia, Neornithischia, Cerapoda, Marginocephalia, Ceratopsia, Neoceratopsia, Coronosauria, Ceratopsidae, Centrosaurinae",
    "namedBy": "Sampson  (1995)",
    "typeSpecies": "horneri",
    "description": "N/A"
  },
  {
    "id": 6,
    "name": "Aegyptosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/aegypto.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 15,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 98-93 million years ago",
    "foundIn": "Egypt",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes, Titanosauria",
    "namedBy": "Stromer (1932)",
    "typeSpecies": "baharijensis",
    "description": "N/A"
  },
  {
    "id": 7,
    "name": "Afrovenator",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/afrovenator.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 9,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Early Cretaceous, 132-121 million years ago",
    "foundIn": "Niger",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Megalosauridae, Eustreptospondylinae",
    "namedBy": "Sereno, Wilson, Larsson, Dutheil and Sues (1944)",
    "typeSpecies": "abakensis",
    "description": "N/A"
  },
  {
    "id": 9,
    "name": "Alamosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/alamo.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 21,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 70-66 million years ago",
    "foundIn": "USA",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes, Titanosauria, Lithostrotia",
    "namedBy": "Gilmore (1922)",
    "typeSpecies": "sanjuanensis",
    "description": "This is the only Late Cretaceous sauropod that has been found in North America."
  },
  {
    "id": 11,
    "name": "Albertosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/albert.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 9,
    "weight": 1500,
    "diet": "carnivorous",
    "whenLived": "Late Cretaceous, 76-74 million years ago",
    "foundIn": "Canada",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Tyrannosauroidea, Tyrannosauridae, Albertosaurinae",
    "namedBy": "Lamb (1914)",
    "typeSpecies": "libratus",
    "description": "Albertosaurus was a close relative of Tyrannosaurus, but smaller and not as heavily built."
  },
  {
    "id": 12,
    "name": "Alectrosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/alectro.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 5,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Late Cretaceous, 90-70 million years ago",
    "foundIn": "China, Mongolia",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Tyrannosauroidea",
    "namedBy": "Gilmore (1933)",
    "typeSpecies": "olseni",
    "description": "N/A"
  },
  {
    "id": 14,
    "name": "Allosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/allo.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 12,
    "weight": 2000,
    "diet": "carnivorous",
    "whenLived": "Late Jurassic, 152-145 million years ago",
    "foundIn": "Portugal, USA",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Neotheropoda, Tetanurae, Avetheropoda, Carnosauria, Allosauroidea, Allosauridae",
    "namedBy": "Marsh (1877)",
    "typeSpecies": "fragilis",
    "description": "The teeth of Allosaurus  were 5-10cm long and curved backwards to prevent prey from escaping."
  },
  {
    "id": 15,
    "name": "Alvarezsaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/alvarez.jpg",
    "typeOfDinosaur": "small theropod",
    "length": 2,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Late Cretaceous, 89-85 million years ago",
    "foundIn": "Argentina",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Neotheropoda, Tetanurae, Avetheropoda, Coelurosauria, Tyrannoraptora, Maniraptoriformes, Maniraptora, Alvarezsauridae",
    "namedBy": "Bonaparte (1991)",
    "typeSpecies": "calvoi",
    "description": "Alvarezsaurus may have been feathered."
  },
  {
    "id": 16,
    "name": "Amargasaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/Amargasaurus.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 12,
    "weight": 9000,
    "diet": "herbivorous",
    "whenLived": "Early Cretaceous, 132-127 million years ago",
    "foundIn": "Argentina",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Diplodocoidea, Dicraeosauridae",
    "namedBy": "Salgado and Bonaparte (1991)",
    "typeSpecies": "cazaui",
    "description": "This dinosaur had a double row of spines along its back which may have supported a twin 'sail' of skin. The spines on its neck vertebrae were incredibly long."
  },
  {
    "id": 17,
    "name": "Ammosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/ammo.jpg",
    "typeOfDinosaur": "prosauropod",
    "length": 5,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Early Jurassic, 195-180 million years ago",
    "foundIn": "USA",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Prosauropoda, Anchisauria, Anchisauridae",
    "namedBy": "Marsh (1891)",
    "typeSpecies": "major",
    "description": "This dinosaur was very similar to Anchisaurus."
  },
  {
    "id": 19,
    "name": "Amygdalodon",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/Amygdalodon.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 15,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Mid Jurassic, 177-169 million years ago",
    "foundIn": "Argentina",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda",
    "namedBy": "Cabrera (1947)",
    "typeSpecies": "patagonicus",
    "description": "Amygdalodon is known from a single partial skeleton."
  },
  {
    "id": 20,
    "name": "Anchiceratops",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/anchi2.jpg",
    "typeOfDinosaur": "ceratopsian",
    "length": 6,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 74-70 million years ago",
    "foundIn": "Canada",
    "taxonomy": "Dinosauria, Ornithischia, Neornithischia, Cerapoda, Marginocephalia, Ceratopsia, Neoceratopsia, Coronosauria, Ceratopsidae, Chasmosaurinae",
    "namedBy": "Brown (1914)",
    "typeSpecies": "ornatus",
    "description": "N/A"
  },
  {
    "id": 21,
    "name": "Anchisaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/anchi.jpg",
    "typeOfDinosaur": "prosauropod",
    "length": 2,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Early Jurassic, 190 million years ago",
    "foundIn": "USA",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Prosauropoda, Anchisauria, Anchisauridae",
    "namedBy": "Marsh (1885)",
    "typeSpecies": "polyzelous",
    "description": "N/A"
  },
  {
    "id": 22,
    "name": "Ankylosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/ankylosaurus.jpg",
    "typeOfDinosaur": "armoured dinosaur",
    "length": 8,
    "weight": 8000,
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 68-66 million years ago",
    "foundIn": "Canada, USA",
    "taxonomy": "Dinosauria, Ornithischia, Thyreophora, Ankylosauria, Ankylosauridae",
    "namedBy": "Brown (1908)",
    "typeSpecies": "magniventris",
    "description": "Ankylosaurus lived during the Late Cretaceous Period in what is now North America. This armoured dinosaur had bony plates covering its body and a heavy club at the end of its tail.Though it's the most famous member of the ankylosaur group, it's not the best understood. Scientists still haven't found an entire Ankylosaurus skeleton. Some other types of ankylosaurs, such as Zuul, are known from many more bones.But we do have enough Ankylosaurus remains to see that it may have been one of the biggest ankylosaurs.The first Ankylosaurus bones were found in 1906 at the Hell Creek Formation in Montana, USA. Barnum Brown led the fossil hunting trip - the same scientist who led the discovery of Tyrannosaurus rex a few years earlier.These Ankylosaurus fossils weren't very complete. The distinctive tail club wasn't discovered until much later.Barnum and his team found several pieces of armour, but they had separated from the main skeleton. Even today, nobody knows exactly how Ankylosaurus' back armour should be arranged.We can't say for sure how any dinosaur behaved when it was alive. Scientists can only go on fossils and comparisons with living animals.We know that as a plant eater, Ankylosaurus wouldn't have used its tail club to attack prey. It probably used the club to defend itself against big predators.Being herbivorous doesn't mean Ankylosaurus was harmless. Many modern plant-eating animals, such as elephants and hippos, can be very aggressive and dangerous. We may never know whether Ankylosaurus was gentle in nature!This hefty dinosaur probably moved very slowly most of the time, although it might have been able to move faster when needed.Ankylosaurus probably couldn't move its tail club up and down much, but could swing it powerfully from side to side - delivering devastating swipes to any would-be predators.Experts think Ankylosaurus grazed on low-growing plants. It probably wasn't picky - eating many kinds of ferns, shrubs and fruit.Ankylosaurus would've needed to eat around 60 kilogrammes of plant matter a day. That's about the same as a modern elephant.Some scientists think Ankylosaurus might have been able to use its front limbs for digging. If so, perhaps it also ate roots and any other kinds of plant and animal matter it could dig up.Several members of the ankylosaur group lacked the bony tail clubs seen in Ankylosaurus and others such as Tarchia, but were otherwise still covered in armour.These clubless ankylosaurs include Nodosaurus, Panoplosaurus and the British dinosaur Polacanthus."
  },
  {
    "id": 23,
    "name": "Anserimimus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/anseri.jpg",
    "typeOfDinosaur": "large theropod",
    "length": 3.5,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Late Cretaceous, 84-66 million years ago",
    "foundIn": "Mongolia",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Ornithomimosauria, Ornithomimidae",
    "namedBy": "Barsbold (1988)",
    "typeSpecies": "planinychus",
    "description": "N/A"
  },
  {
    "id": 24,
    "name": "Antarctosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/antarcto.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 18,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 84 million years ago",
    "foundIn": "Argentina, Chile, Uruguay",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes, Titanosauria, Lithostrotia",
    "namedBy": "von Huene (1929)",
    "typeSpecies": "wichmannianus",
    "description": "N/A"
  },
  {
    "id": 25,
    "name": "Apatosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/apatosaurus-art.jpg",
    "typeOfDinosaur": "sauropod",
    "length": 21,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Jurassic, 152-145 million years ago",
    "foundIn": "USA",
    "taxonomy": "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Diplodocoidea, Diplodocidae",
    "namedBy": "Marsh (1877)",
    "typeSpecies": "ajax",
    "description": "Apatosaurus was a large sauropod dinosaur. It lived around 150 million years ago in the Late Jurassic Period, in an area that is now North America.Like all sauropods, Apatosaurus ate plants.Young Apatosaurus individuals grew up quickly. They took around 10 years to reach full adult size.Apatosaurus lived alongside Stegosaurus, Diplodocus and Allosaurus.Their fossils were found in the Morrison Formation, a sequence of rocks that covers a huge area spanning several US states, including Wyoming, Colorado and Montana. Many dinosaurs have been discovered there.During the Late Jurassic the environment was semi-arid, with forests, rivers and floodplains. There were distinct wet and dry seasons.Apatosaurus had a long, narrow tail that it might have used as a whip.The animal's huge size would also have helped to protect it from smaller predators, which may have found Apatosaurus too big to take on. Living in herds gave extra protection.The name Apatosaurus comes from Greek words meaning 'deceptive lizard'. The scientist who named this dinosaur, Othniel Charles Marsh, felt that some of the fossil bones were confusing to identify. They seemed to resemble the bones of a sea reptile.For more than 100 years, most scientists stopped using the well-known dinosaur name Brontosaurus. They thought that Brontosaurus and Apatosaurus fossils were the same thing.But based on a study done in 2015, experts now think that the two dinosaurs are separate after all, although they are closely related.Apatosaurus went extinct 145 million years ago, at the end of the Jurassic Period."
  },
  {
    "id": 27,
    "name": "Aralosaurus",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/Aralosaurus.jpg",
    "typeOfDinosaur": "large ornithopod",
    "length": 8,
    "weight": "N/A",
    "diet": "herbivorous",
    "whenLived": "Late Cretaceous, 94-84 million years ago",
    "foundIn": "Kazakhstan",
    "taxonomy": "Dinosauria, Ornithischia, Ornithopoda, Hadrosauridae, Euhadrosauria, Hadrosaurinae",
    "namedBy": "Rozhdestvensky (1968)",
    "typeSpecies": "tuberiferus",
    "description": "N/A"
  },
  {
    "id": 29,
    "name": "Archaeopteryx",
    "imageSrc": "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/archaeopteryx.jpg",
    "typeOfDinosaur": "small theropod",
    "length": 0.5,
    "weight": "N/A",
    "diet": "carnivorous",
    "whenLived": "Late Jurassic, 149-145 million years ago",
    "foundIn": "Germany",
    "taxonomy": "Dinosauria, Saurischia, Theropoda, Paraves, Archaeopterygidae",
    "namedBy": "Mayer (1861)",
    "typeSpecies": "lithographica",
    "description": "Archaeopteryx was a small, bird-like dinosaur. It lived during the Late Jurassic Period in what is now Europe.The discovery of the first Archaeopteryx fossil in Germany in 1861 caused a lot of confusion. No birds were known from so far back. Some people even thought it might be an angel.Since then, multiple fossils of Archaeopteryx have been discovered. Many show clear evidence of long feathers. But we don't know whether Archaeopteryx was fully able to fly or if it could only glide.Archaeopteryx also has a common name - Urvogel, a German name meaning 'primeval bird'.Strictly speaking, all birds are dinosaurs. But not all dinosaurs are birds. Scientists sometimes use the term 'non-avian dinosaurs' when talking about prehistoric dinosaurs that aren't birds.The line between bird and non-avian dinosaur can be vague, and many experts have discussed which way to class Archaeopteryx. For many years, scientists spoke about it as an ancient bird. These days, many people believe it should be called a dinosaur.Ultimately, categories like bird and non-avian dinosaur are invented by humans. The natural world doesn't always fit neatly into them. Animals such as Archaeopteryx that could sit across two or more categories are sometimes called transitional fossils.While Archaeopteryx is sometimes called the first bird or the earliest bird, scientists now think that there could be even older bird ancestors. Dinosaurs such as Anchiornis and Aurornis might sit even further back on the bird branch of the dinosaur family tree. If so, they're even earlier relatives of true birds. It's very difficult to say for sure.Archaeopteryx had some features in common with the birds of today. It had broad feathered wings and a small body, roughly the size of a magpie.After comparing its eyes to those of modern birds and reptiles, experts concluded that Archaeopteryx was probably diurnal. This means that it would have been active during the day and slept at night, like many of today's birds.We don't know whether Archaeopteryx mostly lived on the ground or in trees. Some scientists think it might have been equally comfortable with either, like a crow.Unlike modern birds, however, Archaeopteryx had sharp teeth and a long, bony tail.Many specimens of Archaeopteryx have been recovered over the years. All are from the limestone quarries near Solnhofen in Germany.In the Jurassic Period, this area was a lagoon surrounded by sub-tropical islands. Other small creatures such as insects and lizards - which Archaeopteryx may have preyed on - have been unearthed there too. So have some pterosaurs - flying reptiles - and the small dinosaur Compsognathus.The first Archaeopteryx fossil ever found was a single feather.Later, full skeletons were discovered showing feather impressions. We bought the first of these in 1862. It is now known as 'the London specimen' and is on display in our Cadogan gallery.There has since been debate over whether the first feather discovered really belongs to Archaeopteryx.Two years before the discovery of Archaeopteryx, Charles Darwin had just written On the Origin of Species. The book was the first to lay out the theory of evolution.Many people back then - scientists included - strongly disagreed with Darwin's concept and claimed that it wasn't possible for animals to evolve over time. But the discovery of the Archaeopteryx fossils, clearly showing a feathered and bird-like dinosaur, seemed to prove that dinosaurs had evolved into birds.Even 100 years later, there were still those who didn't accept it. Some people published articles claiming that the feathers must be fake. The controversy didn't last long, however, as our scientists were able to show that the fossils were real.The discovery of Archaeopteryx was a landmark moment for dinosaur scientists, and it is still considered to be one of the most important finds in history.It's usually almost impossible for scientists to know what colour a dinosaur would have been in life.But thanks to modern scanning technology, experts have been able to find out the colour of one Archaeopteryx wing feather - which seems to have been jet-black.We don't know whether Archaeopteryx was black all over or only on its wings."
  },
];