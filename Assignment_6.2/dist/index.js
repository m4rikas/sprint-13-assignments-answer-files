"use strict";
var CoffeeType;
(function (CoffeeType) {
    CoffeeType["drip_brew"] = "Drip Brew";
    CoffeeType["pour_over"] = "Pour Over";
    CoffeeType["cold_brew"] = "Cold Brew";
    CoffeeType["espresso"] = "Espresso";
    CoffeeType["ristretto"] = "Ristretto";
})(CoffeeType || (CoffeeType = {}));
var DairyType;
(function (DairyType) {
    DairyType["plain"] = "Milk";
    DairyType["steamed"] = "Steamed Milk";
    DairyType["whipped"] = "Whipped Cream";
    DairyType["iced"] = "Ice Cream";
    DairyType["scalded"] = "Scalded Milk";
    DairyType["foamed"] = "Foamed Milk";
    DairyType["half"] = "Half and Half";
    DairyType["warmed"] = "Warmed Milk";
})(DairyType || (DairyType = {}));
const Cappuccino = {
    ml: 200,
    milk: [DairyType.steamed, DairyType.foamed],
    type: [CoffeeType.espresso],
    additions: ['chocolate']
};
const BlackEye = {
    ml: 250,
    type: [CoffeeType.espresso, CoffeeType.espresso, CoffeeType.drip_brew]
};
console.log(Cappuccino);
console.log(BlackEye);
