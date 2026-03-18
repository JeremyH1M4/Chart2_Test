const Tanks = {

  Tanks_B1: ["T-34", "T-34/85", "T-44", "T-54", "T-62", "T-72", "T-80", "T-90"],
  Tanks_B2: ["Panther", "Panther II", "Tiger I", "Tiger II", "IS-2", "IS-3", "IS-4"],
  Horsepower_B1: [250, 300, 350, 400, 600, 750, 800, 880],
  Horsepower_B2: [700, 800, 900, 1200, 1500, 1800, 2000],
  Armor_B1: [45, 50, 60, 80, 100, 120, 150, 200],
  Armor_B2: [80, 100, 150, 200, 120, 200, 250],
}

const Storage1 = JSON.stringify(Tanks);

localStorage.setItem("T1", Storage1);