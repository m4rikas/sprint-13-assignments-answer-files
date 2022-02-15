interface CoffeeSelection {
  ml: number;
  type: CoffeeType[];
  milk?: DairyType[];
  additions?: string[];
}

enum CoffeeType {
  drip_brew =  'Drip Brew',
  pour_over =  'Pour Over',
  cold_brew =  'Cold Brew',
  espresso =  'Espresso',
  ristretto =   'Ristretto' 
}

enum DairyType {
  plain = 'Milk',
  steamed = 'Steamed Milk',
  whipped = 'Whipped Cream',
  iced = 'Ice Cream',
  scalded = 'Scalded Milk',
  foamed = 'Foamed Milk',
  half = 'Half and Half',
  warmed = 'Warmed Milk'  
}

const Cappuccino: CoffeeSelection = {
  ml: 200,
  milk: [DairyType.steamed, DairyType.foamed],
  type: [CoffeeType.espresso],
  additions: ['chocolate']
}

const BlackEye: CoffeeSelection = {
  ml: 250,
  type: [CoffeeType.espresso, CoffeeType.espresso, CoffeeType.drip_brew]
}

console.log(Cappuccino)
console.log(BlackEye)