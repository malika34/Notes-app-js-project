const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
};
showNotes();

let saveNotesInStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.svg";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotesInStorage();
  }
});

notesContainer.addEventListener("keyup", function (e) {
  if (e.target.tagName === "P" && e.target.classList.contains("input-box")) {
    saveNotesInStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
