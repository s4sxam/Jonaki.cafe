export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export const menuData: MenuItem[] = [
  // Coffee
  { id: 1, name: "Cappuccino", category: "Coffee", price: 220, description: "Classic espresso with milk foam" },
  { id: 2, name: "Flat White", category: "Coffee", price: 240, description: "Smooth espresso with velvety steamed milk" },
  { id: 3, name: "Spanish Latte", category: "Coffee", price: 260, description: "Sweetened condensed milk with espresso" },
  { id: 4, name: "Mocha", category: "Coffee", price: 280, description: "Espresso with chocolate and steamed milk" },
  
  // Brews
  { id: 5, name: "Cold Brew", category: "Brews", price: 250, description: "Slow-steeped coffee served cold" },
  { id: 6, name: "V60 Pour Over", category: "Brews", price: 280, description: "Clean and aromatic manual brew" },
  { id: 7, name: "Aeropress", category: "Brews", price: 260, description: "Rich and full-bodied immersion brew" },
  
  // Mocktails
  { id: 8, name: "Virgin Mojito", category: "Mocktails", price: 200, description: "Refreshing lime and mint cooler" },
  { id: 9, name: "Passionfruit Cooler", category: "Mocktails", price: 240, description: "Tropical passionfruit with a fizzy twist" },
  
  // Food
  { id: 10, name: "Avocado Toast", category: "Food", price: 320, description: "Smashed avocado on sourdough with seeds" },
  { id: 11, name: "Chicken Sandwich", category: "Food", price: 350, description: "Grilled chicken with pesto and greens" },
  { id: 12, name: "Veg Pizza", category: "Food", price: 380, description: "Fresh vegetables and mozzarella on thin crust" },
  
  // Desserts
  { id: 13, name: "Tiramisu", category: "Desserts", price: 300, description: "Classic Italian coffee-flavored dessert" },
  { id: 14, name: "Cheesecake", category: "Desserts", price: 320, description: "Creamy New York style cheesecake" },
];
