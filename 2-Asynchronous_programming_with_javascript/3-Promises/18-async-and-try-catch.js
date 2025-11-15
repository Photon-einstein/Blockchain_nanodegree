// You will recognize this code example from earlier in the lesson, but now the mock API has
// been updated to return Promises! Where in the last exercise you added try/catch blocks,
// here you need to add Async/await and try/catch blocks!

let endangeredAnimalsDB = [
  {
    common_name: "saola",
    conservation_status: "critical",
    species: "Pseudoryx nghetinhensis",
    region: "Greater Mekong",
    population: null,
  },
  {
    common_name: "amur leopard",
    conservation_status: "critical",
    species: "Panthera pardus orientalis",
    region: "Amur-Heilong",
    population: "more than 84",
  },
  {
    common_name: "vaquita",
    conservation_status: "critical",
    species: "Phocoena sinus",
    region: "Gulf of California",
    population: null,
  },
  {
    common_name: "Javan rhino",
    conservation_status: "critical",
    species: "Rhinoceros sondaicus",
    region: "Java, Indonesia",
    population: "58-68",
  },
  {
    common_name: "green turtle",
    conservation_status: null,
    species: "Chelonia mydas",
    region: [
      "Mesoamerican Reef",
      "Coastal East Africa",
      "Gulf of California",
      "The Galápagos",
      "Coral Triangle",
    ],
    population: null,
  },
];

const animalsByConservationStatus = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = endangeredAnimalsDB
        .filter((a) => a.conservation_status === status)
        .map((a) => a.common_name);

      if (results.length > 0) {
        resolve(results);
      } else {
        reject(`no animals found with status: ${status}`);
      }
    }, 1500);
  });
};

const fetchAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = endangeredAnimalsDB.find(
        (a) => a.common_name.toLowerCase() === String(name).toLowerCase()
      );

      if (result !== undefined) {
        resolve(result);
      } else {
        reject(`no animal found with name: ${name}`);
      }
    }, 1500);
  });
};

// ------------------------------------------------------------
// Challenge 1
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

async function printStatusMessage(status) {
  try {
    const animalsList = await animalsByConservationStatus(status);
    const message = `Animals listed as ${status} are: ${animalsList.join(
      ", "
    )}`;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

printStatusMessage("critical"); // success test
printStatusMessage("extinct"); // failure test

// ------------------------------------------------------------
// Challenge 2
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

const endangeredAnimals = ["saola", "green turtle", "amur leopard", "deer"];

async function printAnimalMessage(animal) {
  try {
    const info = await fetchAnimalByName(animal);
    const message = `The ${info.common_name} has an endangered status of ${info.conservation_status}`;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

endangeredAnimals.forEach((animal) => printAnimalMessage(animal));

// ------------------------------------------------------------
// Challenge 3
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

const animal1 = "vaquita";
const animal2 = "mouse";

async function printAnimalFacts(animal) {
  try {
    const data = await fetchAnimalByName(animal);
    const region = Array.isArray(data.region)
      ? data.region.join(", ")
      : data.region;
    const population = data.population ?? "unknown";
    const message = `The ${data.common_name} (${data.species}) is an endangered animal with ${population} individuals in the wild in their home region of ${region}`;
    console.log(message);
    console.log(`Search completed: ${animal}`);
  } catch (error) {
    console.log(error);
  }
}

printAnimalFacts(animal1); // success test
printAnimalFacts(animal2); // failure test

// ------------------------------------------------------------
// EXTRA HARD Challenge 4
// This is a bonus round that is extra difficult!
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

const printAnimalRegions = async (status) => {
  try {
    const animalsList = await animalsByConservationStatus(status);
    const getAnimals = animalsList.map((animal) => {
      return fetchAnimalByName(animal).catch((err) => {
        console.log(err);
        return null;
      });
    });

    const regions = await Promise.allSettled(getAnimals)
      .then((results) => {
        const regions = results
          .filter((result) => result.value && typeof result.value === "object")
          .map((result) => result.value.region);
        return regions;
      })
      .catch((error) => console.log(error));

    const message = `Animals with an endangered status of ${status} can be found in the following regions: ${regions.join(
      ", "
    )}`;

    console.log(message);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(
      `Search complete for regions with animals of status: ${status}`
    );
  }
};

printAnimalRegions("critical");
printAnimalRegions("threatened");
