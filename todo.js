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

document.querySelector("button").addEventListener("click", (e) => {
  const newTag = document.createElement("p");
  document.querySelector(".box1").appendChild(newTag);
  newTag.innerHTML = document.querySelector("input").value;
  document.querySelector("input").value = "";
  newTag.style.backgroundColor = 색추출기(colors);
  newTag.setAttribute("draggable", "true");
  newTag.addEventListener("dragstart", (e) => {
    console.log(e.target);
    dragTarget = e.target;
  });
  /**** 삭제버튼 생성 코드 - 시작 */
  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.remove();
  });
  newTag.appendChild(deleteBtn);
  /**** 삭제버튼 생성 코드 - 끝 */
});

const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box, i) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  box.addEventListener("drop", (e) => {
    console.log(e.currentTarget);
    e.currentTarget.appendChild(dragTarget);
  });
});
