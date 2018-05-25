
var pushButton = document.getElementById("push");
var popButton = document.getElementById("pop");
var peekButton = document.getElementById("peek");
var isEmptyButton = document.getElementById("isEmpty");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var div = document.querySelector("div");
var innerHTMl;																					//holds text of the next element to pop
var count = 0;
var numberOfNodes = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var deleteButton = document.createElement("BUTTON");
	deleteButton.innerHTML = input.value;
	deleteButton.id = "deleteButton";
  ul.appendChild(deleteButton);
	input.value = "";
  if(count == 0){
	  ul.appendChild(deleteButton);
	  input.value = "";
  }
  else{
    ul.insertBefore(deleteButton, ul.childNodes[0]);
  }
}

/**
  When the user selects to push to the Stack
*/
function addListAfterClick() {
	  if (inputLength() > 0 && count < 5) {
		  createListElement();
      count++;
    if(count >= 5){
    alert("This is the last element you'll be able to add as this stack can only hold five elements");
	}
 }
}

/**
 addListAfterKeypress allows the user to push items pushing the enter key
*/
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 && count <= 5) {
	   createListElement();
     count++;
  if(count >= 5){
     alert("This stack can only hold five elements");
  }
 }
}

/*popButton.addEventListener("click", function(){
  if(count == 1){
    alert("Popping...removing " + deleteButton.innerText);
    deleteButton.remove();
  }
	else{
  deleteButton[0].remove();
  alert("Popping...removing " + deleteButton.innerText);
  count--;
  }
});*/


popButton.addEventListener("click", function(){
  if(count == 1){
		innerHTML = deleteButton.innerHTML;
		deleteButton.remove();
    alert("Popping...the value at the top of the stack is: " + innerHTML);
		count--;
  }
	else{
		innerHTML = deleteButton[0].innerHTML;
		deleteButton[0].remove();
  	alert("Popping...the value at the top of the stack is: " + innerHTML);
		count--;
  }

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

pushButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
