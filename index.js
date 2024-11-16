let plusButton = document.querySelector(".plus"); 
let inputContainer = document.querySelector(".x_button_container"); 
let addButton = document.querySelector(".add"); 
let inputValue = document.querySelector("input"); 
let list = document.querySelector(".list"); 
let ol = document.querySelector("ol"); 
let clearButton = document.querySelector(".alfa"); 
let aToZButton = document.querySelector(".a_to_z.first"); 
let image1 = document.querySelector('#firstA_Z');
let image2 = document.querySelector('#lastZ_A');
let zToAButton = document.querySelector(".a_to_z.last"); 
let arr = []; 

plusButton.addEventListener("click", () => { 
    if (inputContainer.style.display == "none") { 
        inputContainer.style.display = "block"; 
    } 
}); 

addButton.addEventListener("click", () => { 
    if (inputValue.value != "") { 
        let newListElement = document.createElement("li"); 
        newListElement.innerHTML = `${inputValue.value} <button class="x_button betta">X</button>`; 
        ol.append(newListElement); 
        inputValue.value = ""; 
        inputContainer.style.display = "none"; 
        list.style.display = "block"; 
        
        let deleteButton = newListElement.querySelector(".betta"); 
        deleteButton.addEventListener("click", (e) => { 
            e.target.parentElement.remove(); 
            if (ol.children.length === 0) { 
                list.style.display = "none"; 
            } 
        }); 
    } 
}); 

clearButton.addEventListener("click", () => { 
    inputValue.value = ""; 
}); 

aToZButton.addEventListener("click", () => { 
    sortList(true);  
    aToZButton.style.display = "none"; 
    zToAButton.style.display = "block"; 
}); 

image1.addEventListener('mouseover', () => {
    image1.src = "https://cdn-icons-png.flaticon.com/128/7794/7794633.png";
});

image1.addEventListener('mouseout', () => {
    image1.src = "https://cdn-icons-png.flaticon.com/128/7794/7794633.png";
});

image2.addEventListener('mouseover', () => {
    image2.src = "https://cdn-icons-png.flaticon.com/128/7043/7043943.png";
});

image2.addEventListener('mouseout', () => {
    image2.src = "https://cdn-icons-png.flaticon.com/128/7043/7043943.png";
});

zToAButton.addEventListener("click", () => { 
    sortList(false);  
    zToAButton.style.display = "none"; 
    aToZButton.style.display = "block"; 
}); 

function sortList(ascending = true) { 
    arr = [];  
    let newList = document.querySelectorAll("li"); 
    newList.forEach(item => { 
        arr.push(item.childNodes[0].textContent.trim());
    }); 
    arr.sort(); 
    if (!ascending) { 
        arr.reverse();  
    } 
    ol.innerHTML = ""; 
    arr.forEach((text) => { 
        let newListElementT = document.createElement("li"); 
        newListElementT.innerHTML = `${text} <button class="x_button betta">X</button>`; 
        ol.appendChild(newListElementT); 

        let deleteButton = newListElementT.querySelector(".betta"); 
        deleteButton.addEventListener("click", (e) => { 
            e.target.parentElement.remove(); 
            if (ol.children.length === 0) { 
                list.style.display = "none"; 
            } 
        }); 
    }); 
}

