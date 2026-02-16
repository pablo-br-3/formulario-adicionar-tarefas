
;(function(){
    "use strict"
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis =document.getElementsByTagName("li")
    let arrTasks = savedData()
    function savedData(){
        let tasksData = localStorage.getItem("task");
       
        tasksData = JSON.parse(tasksData) 
    
        
        return tasksData && tasksData.length ? tasksData : [
        {
            name:"task 1",
            createdAt:Date.now(),
            completed:false
        }
    ];
    
    }
    
    function setNewData(){
        localStorage.setItem("task",JSON.stringify(arrTasks));
       
    }
   setNewData() 
 

   
    function generateLiTask(obj){
        const li = document.createElement("li")
        const checkButton = document.createElement("button")
        const p = document.createElement("p")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")
        const containerEdit = document.createElement("div")
        const inputEdit = document.createElement("input")
        const containerEditButton = document.createElement("button")
        const containerCancelButton = document.createElement("button")
        li.className = "todo-item"
         p.className = "task-name"
        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? "":"displayNone"}" dataAction = "checkButton"></i>`
        editButton.className = "fas fa-edit"
        deleteButton.className = "fas fa-trash-alt"
        containerEdit.className = "editContainer"
        inputEdit.className = "editInput"
        inputEdit.value = obj.name
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        checkButton.setAttribute("dataAction","checkButton")
        editButton.setAttribute("dataAction","editButton")
        deleteButton.setAttribute("dataAction","deleteButton")
        inputEdit.setAttribute("type","text")
        containerEditButton.setAttribute("dataAction","containerEditButton")
        containerCancelButton.setAttribute("dataAction","containerCancelButton")
        ul.appendChild(li)
        li.appendChild(checkButton)
        li.appendChild(p)
        li.appendChild(editButton)
        li.appendChild(deleteButton)
        li.appendChild(containerEdit)
        containerEdit.appendChild(inputEdit)
        containerEdit.appendChild(containerEditButton)
        containerEdit.appendChild(containerCancelButton)
        p.textContent = obj.name
   
        return li
    }
    function addTask(task){
        arrTasks.push(
            {
                name:task,
                createdAt:Date.now(),
                completed:false
            }
        )
        setNewData() 
    }
    function clickedUl(e){
        const dataAction = e.target.getAttribute("dataAction")
        if(!dataAction) return
        let currentLi = e.target
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }
        let currentLiIndex = [...lis].indexOf(currentLi)
        const actions = {
            checkButton:()=>{
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }else{
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                }
                renderTasks()
                setNewData() 
            },
            editButton:()=>{
                const editContainer = currentLi.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach(container=>{
                    container.removeAttribute("style")
                })
                editContainer.style.display = "flex"
            },
            deleteButton:()=>{
                arrTasks.splice(currentLiIndex,1)
                renderTasks()
                setNewData() 
            },
            containerEditButton:()=>{
                const val = currentLi.querySelector(".editInput").value
                arrTasks[currentLiIndex].name = val
                renderTasks()
                setNewData() 
            },
            containerCancelButton:()=>{
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
                renderTasks()
            }
        }
        if(actions[dataAction]){
            actions[dataAction]()
        }
    }
    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(task=>{
            ul.appendChild(generateLiTask(task))
        })
        
    }
    todoAddForm.addEventListener("submit",function(e){
        e.preventDefault()
        addTask(itemInput.value)
        renderTasks()
        itemInput.value = ""
        itemInput.focus()
    })
    ul.addEventListener("click",clickedUl)
    renderTasks()
})()

   
