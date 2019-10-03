describe("Testing the functionalities of the ToDO List", () => {
  it("should validate the 'Enter' keypress", () => {
    let todo = new ToDo();
    let keyPressed;

    function keyPress(key) {
      let event = document.createEvent("Event");
      event.keyCode = key;
      event.initEvent("keydown");
      document.dispatchEvent(event);
    }
    document.addEventListener("keydown", function(e) {
      keyPressed = e.keyCode;
    });

    let press = keyPress(13);
    expect(todo.enterIt()).toEqual(press);
  });

  it("should check on the DOM element", () => {
    let todo = new ToDo();
    let li = document.createElement("li");
    let input = document.getElementById("input").value;
    let txts = document.createTextNode(input);
    li.appendChild(txts);
    expect(todo.addNew().li).toEqual(li);
  });

  it("should delete an item", function() {
    let todo = new ToDo();
    let result = todo.addNew();
    
    let close = document.getElementsByClassName("close");
    close.addEventListener("click", deleteIt);
    function deleteIt(e) {
      let item = e.target.parentNode;
      let ul = item.parentNode;
      ul.removeChild(item);
    }
    expect(result.close.click()).toEqual(close.click());
  });
});
