let menuItems = Number(prompt("Which food you want ??"));
if (isNaN(menuItems) || menuItems < 0 || 4 > menuItems) {
  alert("Enter the proper input man");
} else {
  alert(
    "Welcome to DCL Hotel\nMenu: (Select the number to order the foods)\n1. Burger - 120/-\n2. Pizza - 150/-\n3.Coke - 40/-\n4. Show Bill",
  );
  if (menuItems === 1) {
    console.log("You ordered Burger worth of 120/-");
  } else if (menuItems === 2) {
    console.log("You ordered Pizza worth of 150/-");
  } else if (menuItems === 3) {
    console.log("You ordered Coke worth of 40/-");
  } else if (menuItems === 4) {
    console.log(menuItems);
    
  }
  
}
