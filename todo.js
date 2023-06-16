const colors = [
  //18
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

let dragTarget = {};

function 색추출기(colors) {
  const 랜덤값 = Math.floor(Math.random() * colors.length); // 0~17
  return colors[랜덤값];
}

function saveLocalStorage(object) {
  localStorage.setItem("object", JSON.stringify(object));
}

function loadLocalStorage() {
  const storedObject = localStorage.getItem("object");
  return storedObject ? JSON.parse(storedObject) : { title: "", content: "" , URL: "", colors: "" , id: "" ,  };
}

document.querySelector("button").addEventListener("click", (e) => {
  const newTag = document.createElement("p");

  document.querySelector(".iii").appendChild(newTag);

  const 제목 = document.querySelector(".ii").value;
  const 할일 = document.querySelector(".oo").value;
  const URL = document.querySelector(".pp").value;

  const 현재시간 = new Date().toLocaleString();

  const object = {
    title: 제목,
    content: 할일,
    URL: URL,
    color : 색추출기(colors),
  };

  saveLocalStorage(object);

  newTag.innerHTML = `<h3>${제목}</h3>${할일}<br> <a href="${URL}">${URL}</a><br/>${현재시간}`;

  newTag.style.backgroundColor = 색추출기(colors);
  newTag.setAttribute("draggable", "true");
  newTag.addEventListener("dragstart", (e) => {
    console.log(e.target);
    dragTarget = e.target;
  });

  // ...

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.remove();
  });
  newTag.appendChild(deleteBtn);

  // ...
});

const boxes = document.querySelectorAll(".iii");
console.log(boxes);
boxes.forEach((iii, i) => {
  iii.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  iii.addEventListener("drop", (e) => {
    console.log(e.currentTarget);
    e.currentTarget.appendChild(dragTarget);
  });
});
