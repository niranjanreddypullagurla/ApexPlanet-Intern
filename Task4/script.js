window.onload =loadTasks;

function addTask(){
    let input =document.getElementById("taskInput");
    let taskText =input.value.trim();

    if(taskText === "") return;

    let tasks =getTasks();
    tasks.push(taskText);
    localStorage.setItem("tasks",JSON.stringify(tasks));

    input.value ="";
    loadTasks();
}

function getTasks(){
    let tasks =localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks(){
    let taskList= document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks=getTasks();
    tasks.forEach((task,index) => {
        let li=document.createElement("li");
        li.textContent =task;
        
        let del=document.createElement("span");
        del.textContent ="X";
        del.className = "delete";
        del.onclick =() => deleteTask(index);

         li.appendChild(del);
    taskList.appendChild(li);
        
    });
}

function deleteTask(index) {
  let tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}


const products = [
  { name: "Laptop", category: "tech", price: 60000 },
  { name: "Headphones", category: "tech", price: 2000 },
  { name: "JavaScript Book", category: "books", price: 500 },
  { name: "CSS Guide", category: "books", price: 300 }
];

function renderProducts(){
  let category = document.getElementById("categoryFilter").value;
  let sort = document.getElementById("sortPrice").value;

  let filtered = [...products];

  if(category !== "all"){
    filtered = filtered.filter(p => p.category === category);
  }

  if(sort === "low"){
    filtered.sort((a,b) => a.price - b.price);
  } else if(sort === "high"){
    filtered.sort((a,b) => b.price - a.price);
  }

  let grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  filtered.forEach(p => {
    let card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
    grid.appendChild(card);
  });
}

renderProducts();