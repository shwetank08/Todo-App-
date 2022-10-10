const inp = document.querySelector('input');
const btn = document.querySelector('.addButton');
const container = document.querySelector('.container');


const list = [];


const displayItem = (item) => {
    
    let sz = list.length;
    
    //creating list item
    let newitem = document.createElement('li');
    //adding properties to list item
    
    newitem.style.display = "flex";
    newitem.style.flexDirection = "row"
    newitem.classList.add("item");
    newitem.id = sz;
    
    //creating paragraph 
    let newP = document.createElement('p');
    newP.classList.add('item_input');
    newP.textContent = item



    //buttons

    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    editBtn.classList.add('editButton');
    editBtn.textContent = "EDIT";
    editBtn.addEventListener('click',()=>{
        let curval = item;
        inp.value = curval;
        list.splice(newitem.id-1,1)
        newitem.remove();
    });

    delBtn.classList.add('deleteButton');
    delBtn.textContent = "DELETE";
    delBtn.addEventListener('click',()=>{
        list.splice(newitem.id-1 ,1)
        newitem.remove();
    });
    



    //appending childs to parent elements
    newitem.appendChild(newP)
    newitem.appendChild(editBtn);
    newitem.appendChild(delBtn);

    container.appendChild(newitem);
}

const addItem = () => {
    if(inp.value===""){return;}
    list.push(inp.value);
    container.classList.add('container')
    displayItem(inp.value);
    inp.value = ""
}

btn.addEventListener('click',addItem); 




