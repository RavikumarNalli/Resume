// menu.js

// Menu Data
const menuData = [
    { name: "Margherita Pizza", description: "Classic pizza with tomato sauce and mozzarella", price: "$12" },
    { name: "Spaghetti Carbonara", description: "Pasta with creamy carbonara sauce", price: "$15" },
    { name: "Caesar Salad", description: "Fresh lettuce with Caesar dressing and croutons", price: "$10" },
    { name: "Grilled Salmon", description: "Salmon fillet with lemon butter sauce", price: "$18" }
  ];
  
  // Get container
  const menuContainer = document.getElementById('menu');
  
  // Display each menu item
  menuData.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
  
    const itemName = document.createElement('h2');
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);
  
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    menuItem.appendChild(itemDescription);
  
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ${item.price}`;
    menuItem.appendChild(itemPrice);
  
    menuContainer.appendChild(menuItem);
  });
  