
var pushButton = document.getElementById("push");
var popButton = document.getElementById("pop");
var peekButton = document.getElementById("peek");
var isEmptyButton = document.getElementById("isEmpty");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var div = document.querySelector("div");//.getElementsByTagName("li");
var contentToReturn;
var count = 0;
//div now contains all <li> elements in itself, even the ones that haven't been added yet...

/*function deleteThisButton(e){
	e.target.parentNode.remove();
}*/


function pop(e){
  contentToReturn = e.target.parentNode.textContent;
	e.target.parentNode.remove();
  count--;
  alert("You popped " + contentToReturn);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	//var li = document.createElement("li");
  //li.id = "listItem";
	var deleteButton = document.createElement("BUTTON");
	deleteButton.innerHTML = input.value;
	deleteButton.id = "deleteButton";

  ul.appendChild(deleteButton);
	//li.appendChild(deleteButton);
	input.value = "";

	/*li.appendChild(document.createTextNode(input.value));*/
  if(count == 0){
	  ul.appendChild(deleteButton);
	  input.value = "";
  }
  else{
    ul.insertBefore(deleteButton, ul.childNodes[0]);
  }

}

function addListAfterClick() {
	if (inputLength() > 0 && count <= 5) {
		createListElement();
    count++;
  if(count >= 5){
  alert("This stack can only hold five elements");
	}
}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 && count <= 5) {
		createListElement();
    count++;
  if(count >= 5){
    alert("This stack can only hold five elements");
  }
	}
}


popButton.addEventListener("click", function(){
  if(count == 1)
  {
    alert("Popping...removing " + deleteButton.innerHTML);
    deleteButton.remove();
  }
  deleteButton[0].remove();
  alert("Popping...removing " + deleteButton.innerHTML);
  count--;
});

peekButton.addEventListener("click", function(){
  if(count == 1){
    alert("Peeking...the value at the top of the stack is: " + deleteButton.innerHTML);
  }
  alert("Peeking...the value at the top of the stack is: " + deleteButton[0].innerHTML);
});

isEmpty.addEventListener("click", function(){
  if(count > 0){
    alert("isEmpty() returns false");
  }
  else{
    alert("isEmpty() returns true");
  }
});

ul.addEventListener("click", pop);
pushButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
