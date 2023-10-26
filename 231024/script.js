// const btn2 = document.querySelector("#save");
// const btn1 = document.querySelector("#cancel");
// const container = document.querySelector("#container");

// btn2.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   const title = document.forms[0].elements[0].value;
//   const author = document.forms[0].elements[1].value;

//   let newDiv = document.createElement("div");
//   //   let removeBtn = document.createElement("button");

//   newDiv.value = `${title} - ${author}`;
//   let textNode = document.createTextNode(newDiv.value);
//   newDiv.appendChild(textNode);
//   //   document.container.appendChild(newDiv);
//   console.log(newDiv.value);
// });

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  e.preventDefault();
  const item = document.createElement("li");
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>`;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
});

function removeItem() {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}
