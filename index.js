class Pets {
  constructor(petName, birthday, foodName, foodAmount, foodFrequency) {
    this.petName = petName;
    this.birthday = birthday;
    this.foodName = foodName;
    this.foodAmount = foodAmount;
    this.foodFrequency = foodFrequency;
  }
  describe() {
    return `${this.petName} was born on ${this.birthday}, eats ${this.foodAmount} of ${this.foodName} ${this.foodFrequency}`;
  }
  shortdescribe() {
    return this.petName;
  }
}

class Species {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    if (pet instanceof Pets) {
      this.pets.push(pet);
    } else {
      throw new Error(
        `You can only add instance of Pet. Argument is not a pet: ${pet}`
      );
    }
  }

  describe() {
    let result = `${this.name} \n`;
    for (let i = 0; i < this.pets.length; i++) {
      result += `${i}) ${this.pets[i].shortdescribe()}\n`;
    }
    return result;
  }

  shortdescribe() {
    return this.name;
  }

  showMenuOptions() {
    return prompt(`
    0) back
    1) create pet
    2) view pet
    3) delete pet
    4) display all pets
    `);
  }

  start() {
    let selection = this.showMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createPet();
          break;
        case "2":
          this.viewPet();
          break;
        case "3":
          this.deletePet();
          break;
        case "4":
          this.displayPet();
          break;
        default:
          selection = 0;
          break;
      }
      selection = this.showMenuOptions();
    }
  }

  createPet() {
    let name = prompt("Enter name for new pet:");
    let birthday = prompt("Enter birthday for new pet:");
    let foodName = prompt("Enter food name for new pet:");
    let foodAmount = prompt("Enter food amount for new pet");
    let foodFrequency = prompt("Enter food frequency for new pet");
    this.addPet(new Pets(name, birthday, foodName, foodAmount, foodFrequency));
  }

  deletePet() {
    let index = prompt(
      `${this.describe()}Enter the index of the pet you wish to delete:`
    );
    if (index > -1 && index < this.pets.length) {
      this.pets.splice(index, 1);
    }
  }

  viewPet() {
    let index = prompt(
      `${this.describe()}Enter the index of the pet you wish to view`
    );
    if (index > -1 && index < this.pets.length) {
      alert(this.pets[index].describe());
    }
  }

  displayPet() {
    alert(this.describe());
  }
}

class Menu {
  constructor() {
    this.species = [];
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createSpecies();
          break;
        case "2":
          this.viewSpecies();
          break;
        case "3":
          this.deleteSpecies();
          break;
        case "4":
          this.displaySpecies();
          break;
        default:
          selection = 0;
          break;
      }
      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create new species
        2) view species
        3) delete species
        4) display all species
        `);
  }

  displaySpecies() {
    alert(this.describe());
  }

  createSpecies() {
    let name = prompt("Enter name for new species:");
    this.species.push(new Species(name));
  }

  deleteSpecies() {
    let index = prompt(
      `${this.describe()}Enter the index of the species you wish to delete:`
    );
    if (index > -1 && index < this.species.length) {
      this.species.splice(index, 1);
    }
  }

  describe() {
    let result = "";
    for (let i = 0; i < this.species.length; i++) {
      result += `${i}) ${this.species[i].shortdescribe()}\n`;
    }
    return result;
  }

  viewSpecies() {
    let index = prompt(
      `${this.describe()}Enter the index of the species you wish to view`
    );
    if (index > -1 && index < this.species.length) {
      this.species[index].start();
    }
  }
}
let menu = new Menu();
menu.start();
