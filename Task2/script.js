
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    alert("Name is required.");
    e.preventDefault();
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});


function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const span = document.createElement("span");
  span.textContent = "✖";
  span.className = "remove";
  span.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
