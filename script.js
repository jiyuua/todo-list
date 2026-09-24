// ADD YOUR CODE BELOW

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
   "grapes",
   "milk bread",
   "green tea",
   "apple pie",
   "brisket",
   "pasta",
   "eggs",
   "tomatoes",
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById("add-item-button");
// add more variables below
const list = document.getElementById("list");
const textBox = document.getElementById("text");
const sortBtn = document.getElementById("sort");
const clearBtn = document.getElementById("clear");

// 3. Write a function to display all items in the #list element
function updateList() {
   list.innerHTML = "";

   for (let i = 0; i < todoItems.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = todoItems[i];
      list.appendChild(listItem);
   }
}

updateList();

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener("click", function () {
   const newItem = textBox.value;

   if (newItem !== "") {
      todoItems.push(newItem);
      updateList();
      textBox.value = "";
   }
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
   todoItems.sort();
   updateList();
});

// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
   todoItems = [];
   updateList();
});
