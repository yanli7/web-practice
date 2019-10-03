// Add new items
function ToDo() {}
ToDo.prototype.addNew = function() {
  let li = document.createElement("li");
  let input = document.getElementById("input").value;
  let txts = document.createTextNode(input);
  li.appendChild(txts);
  if (input === "") {
    alert("Please enter something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  // Create a "close" button for each list item
  let nodeList = document.getElementsByTagName("LI");
  for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
  }

  // Delete the list item
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", deleteIt);
    function deleteIt(e) {
      let item = e.target.parentNode;
      let ul = item.parentNode;
      ul.removeChild(item);
    }
  }
};

// Mark an list item as completed
ToDo.prototype.mark = function() {
  let list = document.querySelector("ul");
  list.addEventListener("click", complete);
  function complete(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    }
  }
};

// Trigger button click on Enter Key
ToDo.prototype.enterIt = function() {
  let enterInput = document.getElementById("input");
  enterInput.addEventListener("keydown", enter);
  function enter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("add").click();
    }
  }
};

let todo = new ToDo();
todo.enterIt();
todo.mark();
