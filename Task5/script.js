const taskInput=document.getElementById("taskInput")
const taskList=document.getElementById("taskList")
const addBtn=document.getElementById("addTask")

function getTasks(){
return JSON.parse(localStorage.getItem("tasks"))||[]
}

function saveTasks(tasks){
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function renderTasks(){
taskList.innerHTML=""
getTasks().forEach((task,index)=>{
const li=document.createElement("li")
li.textContent=task
const btn=document.createElement("button")
btn.textContent="X"
btn.onclick=()=>removeTask(index)
li.appendChild(btn)
taskList.appendChild(li)
})
}

function addTask(){
const text=taskInput.value.trim()
if(!text)return
const tasks=getTasks()
tasks.push(text)
saveTasks(tasks)
taskInput.value=""
renderTasks()
}

function removeTask(index){
const tasks=getTasks()
tasks.splice(index,1)
saveTasks(tasks)
renderTasks()
}

addBtn.onclick=addTask
renderTasks()

const products=[
{name:"Laptop",category:"Tech",price:60000},
{name:"Headphones",category:"Tech",price:2000},
{name:"JavaScript Book",category:"Books",price:500},
{name:"CSS Guide",category:"Books",price:300}
]

const productList=document.querySelector(".product-list")
const category=document.getElementById("category")
const sort=document.getElementById("sort")

function renderProducts(){
let list=[...products]

if(category.value!=="All"){
list=list.filter(p=>p.category===category.value)
}

if(sort.value==="Low"){
list.sort((a,b)=>a.price-b.price)
}
if(sort.value==="High"){
list.sort((a,b)=>b.price-a.price)
}

productList.innerHTML=""
list.forEach(p=>{
const card=document.createElement("div")
card.className="product-card"
card.innerHTML=`${p.name}<br>₹${p.price}`
productList.appendChild(card)
})
}

category.onchange=renderProducts
sort.onchange=renderProducts
renderProducts()
