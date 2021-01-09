let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

// Function that creates new elements
function elementInsert() {
    if (inputLength() > 0) {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");

        deleteButton.appendChild(document.createTextNode("✗"));
        li.appendChild(deleteButton);
        deleteButton.setAttribute("class", "btn-item-del");

        li.appendChild(document.createTextNode(input.value.charAt(0).toUpperCase() + input.value.slice(1)));
        ul.prepend(li);
        li.classList.add("list-group-item");
    }
    input.value = "";
}

// Input button, that insert new elements
function buttonInput() {
    elementInsert();
}

// Press enter insert new elements
function enterKey(event) {
    if(inputLength() > 0 && event.keyCode == 13) {
        elementInsert();
    }
}
input.addEventListener("keypress", enterKey);

// Line through element 
function checkDone(event) {
    if(event.target.classList.contains("list-group-item")) {
        event.target.closest("li").classList.toggle("done");
        ul.appendChild(event.target.closest("li")); // the thing done is moved down
        
        let checkSymbol = document.createElement("div");        

        if (event.target.classList.contains("done")) {            
            checkSymbol.appendChild(document.createTextNode("✓"));
            checkSymbol.setAttribute("class", "check-style");
            event.target.insertBefore(checkSymbol, event.target.childNodes[0]);
        } else {
            event.target.childNodes[0].remove();
        }
    }
}
addEventListener("click", checkDone);


// Delete item by clicking on X button
function deleteItem(event) {
    if(event.target.classList.contains("btn-item-del")) {
        event.target.closest("li").remove();
    }
}
addEventListener("click", deleteItem);






