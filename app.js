// const addItemButton = document.querySelector('#addItem');
// const todoList = document.querySelector('ul');
// const todoInput = document.querySelector('input');

// const savedItems = localStorage.getItem('todoItems');
// if (savedItems) {
//     todoList.innerHTML = savedItems;
// }

// addItemButton.addEventListener('click', function(e){
//     e.preventDefault();
//     const li = document.createElement('li');
//     todoList.append(li);
//     item = input.value+" ";
//     li.innerText = item;
//     const chkBtn = document.createElement('button');
//     li.append(chkBtn);
//     chkBtn.innerText = 'Completed';
//     const rmvBtn = document.createElement('button');
//     li.append(rmvBtn);
//     rmvBtn.innerText = 'Remove';
//     saveItemsToLocalStorage();
//     input.value = "";
// });

// todoList.addEventListener('click', function(e){
//     if (e.target.innerText === 'Completed') {
//         e.target.parentElement.style.textDecoration = 'line-through';
//         saveItemsToLocalStorage();
//     } else if (e.target.innerText === 'Remove') {
//         todoList.removeChild(e.target.parentElement);
//         saveItemsToLocalStorage();
//     }
//     });

//     function saveItemsToLocalStorage() {
//         const listItems = todoList.innerHTML;
//         localStorage.setItem('todoItems', listItems);
//     }



// const addItemButton = document.querySelector('#addItem');
// const todoList = document.querySelector('ul');
// const todoInput = document.querySelector('input');

// // Load items from local storage if available
// const savedItemsJSON = localStorage.getItem('todoItems');
// const savedItems = savedItemsJSON ? JSON.parse(savedItemsJSON) : [];

// // Add a click event listener to the todo list (event delegation)
// todoList.addEventListener('click', function(e) {
//     const target = e.target;
    
//     if (target.tagName === 'BUTTON') {
//         const listItem = target.parentElement;
//         const itemIndex = Array.from(todoList.children).indexOf(listItem);

//         if (target.textContent === 'Completed') {
//             // Handle marking as completed if needed
//             savedItems[itemIndex].completed = !(savedItems[itemIndex].completed);
//         } else if (target.textContent === 'Remove') {
//             savedItems.splice(itemIndex, 1);
//         }

//         populateTodoList();
//         saveItemsToLocalStorage();
//     }
// });    
        
// // Populate the todo list from the saved items
// function populateTodoList() {
//     todoList.innerHTML = '';
//     savedItems.forEach(function(item) {
//         const listItem = document.createElement('li');
//         listItem.textContent = item.text;

//         if (item.completed) {
//             listItem.style.textDecoration = 'line-through';
//         }

//         const space = document.createTextNode(' ');

//         const completeButton = document.createElement('button');
//         completeButton.textContent = 'Completed';

//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';

//         listItem.appendChild(space);
//         listItem.appendChild(completeButton);
//         listItem.appendChild(removeButton);
//         todoList.appendChild(listItem);
//     });
// }

// populateTodoList();

// addItemButton.addEventListener('click', function(e){
//     e.preventDefault();
//     const itemText = todoInput.value.trim();
    
//     if (itemText) {
//         savedItems.push({ text: itemText, completed: false });
//         populateTodoList();
//         saveItemsToLocalStorage();
//         todoInput.value = "";
//     }
// });

// // Save items to local storage
// function saveItemsToLocalStorage() {
//     const savedItemsJSON = JSON.stringify(savedItems);
//     localStorage.setItem('todoItems', savedItemsJSON);
// }

// Part I - Define variables
const addItemButton = document.querySelector('#addItem');
const todoList = document.querySelector('ul');
const todoInput = document.querySelector('#todoItem');

// Part II - Load Saved Items from Local Storage
const savedItemsJSON = localStorage.getItem('todoItems');
const savedItems = savedItemsJSON ? JSON.parse(savedItemsJSON) : [];

// Part III - Add a delegate event that deals with button clicks
todoList.addEventListener('click', function(e){
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        const listItem = target.parentElement;
        const itemIndex = Array.from(todoList.children).indexOf(listItem);

        if (target.textContent === 'Completed'){
            savedItems[itemIndex].completed = !(savedItems[itemIndex].completed);
        } else if (target.textContent === 'Remove') {
            savedItems.splice(itemIndex,1);
        }
    populateTodoList();
    saveToLocalStorage();
    }
});

// Part IV - Populate the list function (.forEach)
function populateTodoList() {
todoList.innerHTML = '';
savedItems.forEach(function(item) {
    const listedItem = document.createElement('li');
    const completeButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const spaceBetweenItemAndButtons = document.createTextNode(' ');

    listedItem.innerText = item.item;
    completeButton.innerText = 'Completed';
    removeButton.innerText = 'Remove';

    if (item.completed) {
        listedItem.style.textDecoration = 'line-through';
    }

    todoList.appendChild(listedItem);
    listedItem.appendChild(spaceBetweenItemAndButtons);
    listedItem.appendChild(completeButton);
    listedItem.appendChild(removeButton);
});
}

populateTodoList();

// Part V - Add a click event to the Submit button
addItemButton.addEventListener('click', function(e){
    e.preventDefault();
    const itemText = todoInput.value.trim();

    if (itemText) {
        savedItems.push({item: itemText, completed: false});
// This below can be turned into a function since the populateList applies the same functionality
        const newItem = document.createElement('li');
        newItem.innerText = itemText;
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Completed';
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        const spaceBetweenItemAndButtons = document.createTextNode(' ');

        newItem.appendChild(spaceBetweenItemAndButtons);
        newItem.appendChild(completeButton);
        newItem.appendChild(removeButton);
        todoList.appendChild(newItem);

        saveToLocalStorage();
        todoInput.value = '';
}
});

// Part VI - Save Saved Items to Local Storage
function saveToLocalStorage() {
    const savedItemsJSON = JSON.stringify(savedItems);
    localStorage.setItem('todoItems', savedItemsJSON);
}