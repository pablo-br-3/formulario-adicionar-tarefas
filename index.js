

// ;(function(){
//     "use strict"
//     //ARMAZENAR O DOM EM VARIAVEIS
//     const itemInput = document.getElementById("item-input")
//     const todoAddForm = document.getElementById("todo-add")
//     const ul = document.getElementById("todo-list")
    // const lis = ul.getElementsByTagName("li")
//     let arrTasks = [
//         {
//             name:"task 1",
//             createdAt:Date.now(),
//             completed: false
//         }
//     ]
//      renderTasks() 
//     function addEventLi(li){
//     li.addEventListener("click",function(){
//     console.log(this)

//  })
//     }
//     function generateLiTask(obj){

//     const li = document.createElement("li")
//     li.className= "todo-item"
//     const p = document.createElement("p")
//     p.className = "task-name"
//     p.textContent = obj.name
//     ul.appendChild(li)
//     li.appendChild(p)
//     addEventLi(li)
//     return li
//     }
//     function renderTasks(){
//      ul.innerHTML = ""
//      arrTasks.forEach(task => {
//         ul.appendChild(generateLiTask(task))
 
//      });
//     }
//  function addTask(task){
//  arrTasks.push({
//         name: task,
//         createdAt:Date.now(),
//         completed: false
//  })
//  }
//     todoAddForm.addEventListener("submit",function(e){
//         e.preventDefault()
     
//         // ul.innerHTML += 
//         // `
//         //  <li class="todo-item">         
//         //             <p class="task-name">${itemInput.value}</p>
//         //         </li>
//         // `
//  addTask(itemInput.value)
//  renderTasks()
//  itemInput.value= ""
//  itemInput.focus()
//     });
//     // [...lis].forEach(li=>{
//     //  addEventLi(li)
//     // });
//     arrTasks.forEach(task =>{
//         addEventLi(li)
//     })
  
// })()

// ;(function(){
//     const itemInput = document.getElementById("item-input")
//     const todoAddForm = document.getElementById("todo-add")
//     const ul = document.getElementById("todo-list")
//     const lis =document.getElementsByTagName("li")
//     const arrTasks = [
//         {
//             name:"task 1",
//             createdAt:Date.now(),
//             completed: false
//         }
//     ]
//      renderTasks()
//     function generateLiTask(obj){
//         const li = document.createElement("li")
//         li.className = "todo-item"
//         const p = document.createElement("p")
//         p.className = "task-name"
//          p.textContent = obj.name
//         const checkButton = document.createElement("button")
//         const editButton = document.createElement("i")
//         const deleteButton = document.createElement("i")
//         checkButton.className = "button-check"
//         checkButton.innerHTML = '<i class= "fas fa-check displayNone"></i>'
//         checkButton.setAttribute("data-action","checkButton")
        
//         li.appendChild(checkButton)
//         ul.appendChild(li)
//         li.appendChild(p)
//         editButton.className = "fas fa-edit"
//         editButton.setAttribute("data-action","editButton")
//         li.appendChild(editButton)

//         const containerEdit = document.createElement("div")
//         containerEdit.className = "editContainer"
//         const inputEdit = document.createElement("input")
//         inputEdit.setAttribute("type","text")
//         inputEdit.className = "editInput"
//         containerEdit.appendChild(inputEdit)
//         const containerEditButton = document.createElement("button")
//         containerEditButton.className = "editButton"
//         containerEditButton.textContent = "Edit"
//         containerEditButton.setAttribute("data-action","containerEditButton")
//         containerEdit.appendChild(containerEditButton)
//         const containerCancelButton = document.createElement("button")
      
//         containerCancelButton.className = "cancelButton"
//         containerCancelButton.textContent = "Cancel"
//         containerCancelButton.setAttribute("data-action","containerCancelButton")
//         containerEdit.appendChild(containerCancelButton)
//         li.appendChild(containerEdit)
//         // deleteButton.classList.add("fas","fa-trash-alt")
//         deleteButton.className = "fas fa-trash-alt"
//         deleteButton.setAttribute("data-action","deleteButton")
//         li.appendChild(deleteButton)
       
//         // addEventLi()
//         return li
        
//         // function addEventLi(){
//         //     li.addEventListener("click",function(){
//         //         console.log(this)
//         //     })
//         // }
//     }
//     function addTask(task){
//         arrTasks.push(
//             {
//             name: task,
//             createdAt:Date.now(),
//             completed: false                
//             }
//         )
//     }
//     function clickedUl(e){
//         const dataAction = e.target.getAttribute("data-action")
//         console.log(e.target)
      
//         if(!dataAction) return

//         let currentLi = e.target
//         while(currentLi.nodeName !== "LI"){
//          currentLi = currentLi.parentElement

//         };
//         console.log(currentLi);
//         const currentLiIndex = [...lis].indexOf(currentLi)
//        console.log(currentLiIndex)
//         const actions ={
//     editButton:function(){
//         console.log("editButton no objeto")
//     }
//    }
//          if(actions[dataAction]){
//     actions[dataAction]()
//    }
      
//         console.log(e.target)
        // console.log(e.target.getAttribute("data-action"))
        // if(e.target.classList.contains("fa-edit")){
//     if(e.target.getAttribute("data-action")==="editButton"){
//     console.log("é edit")
//    } else if(e.target.getAttribute("data-action")==="CancelButton"){
//     console.log("é cancel")
//    }
//    switch(e.target.getAttribute("data-action")){
//     case "editButton":
//         console.log("é edit no switch")
//         break;
//         default:
//             console.log("não é edit")
//    }

   
  
//     }

   
//     function renderTasks(){
//      ul.innerHTML = ""  
//      arrTasks.forEach(task=>{
//         ul.appendChild(generateLiTask(task))
//      }) 
//     }
//     todoAddForm.addEventListener("submit",function(e){
//        e.preventDefault()
//        addTask(itemInput.value)
//        itemInput.value = ""
//         renderTasks()
//        itemInput.focus()
//     })
//     // arrTasks.forEach(task=>{
//     //     addEventLi(li)
//     // })
//     ul.addEventListener("click",clickedUl)
   
// })()


// ;(function(){
//     "use strict"
// const itemInput = document.getElementById("item-input")
// const todoAddForm = document.getElementById("todo-add")
// const ul = document.getElementById("todo-list")
// const arrTasks = [
//     {
//         name:"task 1",
//         createdAt:Date.now(),
//         completed: false
//     }
// ]

// function generateLiTask(obj){
//     const li = document.createElement("li")
//     const p = document.createElement("p")
//     const checkButton = document.createElement("button")
//     const editButton = document.createElement("i")
//     const deleteButton = document.createElement("i")
//     editButton.className = "fas fa-edit"
//     deleteButton.className = "fas fa-trash-alt"
//     checkButton.className = "button-check"
//     checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
//     checkButton.setAttribute("data-action","checkButton")
//     editButton.setAttribute("data-action","editButton")
//     deleteButton.setAttribute("data-action","deleteButton")
//     const containerEdit = document.createElement("div")
//     const inputEdit = document.createElement("input")
//     const containerEditButton = document.createElement("button")
//     const containerCancelButton = document.createElement("button")
//     containerEdit.className = "editContainer"
//     inputEdit.className = "editInput"
//     inputEdit.setAttribute("type","text")
//     containerEditButton.className = "editButton"
//     containerEditButton.textContent = "Edit"
//     containerCancelButton.className = "cancelButton"
//     containerCancelButton.textContent = "Cancel"
//     containerEditButton.setAttribute("data-action","containerEditButton")
//     containerCancelButton.setAttribute("data-action","containerCancelButton")
//     containerEdit.appendChild(inputEdit)
//     containerEdit.appendChild(containerEditButton)
//     containerEdit.appendChild(containerCancelButton)

//     li.className = "todo-item"
//     p.className = "task-name"   
//     ul.appendChild(li)
//     li.appendChild(checkButton)
//     li.appendChild(p)
//     li.appendChild(editButton)
//     li.appendChild(deleteButton)
 
//     p.textContent = obj.name
//     return li

// }
// function addTask(task){
//     arrTasks.push(
//         {
//             name:task,
//             createdAt:Date.now(),
//             completed:false
//         }
//     )
// }
// function clickedUl(e){
  
//     console.log(e.target)
//  const dataAction = e.target.getAttribute("data-action")
 
//  if(!dataAction) return

//  const actions = {
//     editButton:() =>{
      
//         console.log("editButton no objeto")
//     },
//     containerEditButton:function(){
//           console.log("containereditButton no objeto")
//     },
//     containerCancelButton:function(){
//    console.log("containercancelButton no objeto")
//     },
    
//     deleteButton:function(){
//  console.log("deleteButton no objeto")
//     }
//  }
//  if(actions[dataAction]){
//     actions[dataAction]()
//  }

// }
// function renderTasks(){
//     ul.innerHTML = ""
//     arrTasks.forEach(task=>{
//     ul.appendChild(generateLiTask(task))

//     })
// }
// todoAddForm.addEventListener("submit",function(e){
//     e.preventDefault()
//     addTask(itemInput.value)
//     renderTasks()
//     itemInput.value = ""
//     itemInput.focus()
// })
// ul.addEventListener("click",clickedUl)
// renderTasks()
// })()
// ;(function(){
//     const itemInput = document.getElementById("item-input")
//     const todoAddForm= document.getElementById("todo-add")
//     const ul = document.getElementById("todo-list")
//     const lis = document.getElementsByTagName("li")
//     const arrTasks = [
//         {
//             name:"task 1",
//             createdAt:Date.now(),
//             completed: false
//         },
//         {
//             name:"task 2",
//             createdAt:Date.now(),
//             completed: true
//         }
//     ]
   
//     function generateLiTask(obj){
//         const li = document.createElement("li")
//         const checkButton = document.createElement("button")
//         const p = document.createElement("p")
//         const editButton = document.createElement("i")
//         const deleteButton = document.createElement("i")
//         const containerEdit = document.createElement("div")
//         const inputEdit = document.createElement("input")
//         const containerEditButton = document.createElement("button")
//         const containerCancelButton = document.createElement("button")
//         li.className = "todo-item"
//         p.className = "task-name"
//         checkButton.className = "button-check"
//         checkButton.setAttribute("dataAction","checkButton")
//         checkButton.innerHTML = 
//         `<i class="fas fa-check ${obj.completed ? "" :"displayNone"}" data-action="checkButton"></i>`
//         editButton.className = "fas fa-edit"
//         editButton.setAttribute("dataAction","editButton")
//         deleteButton.className = "fas fa-trash-alt"
//         deleteButton.setAttribute("dataAction","deleteButton")
//         containerEdit.className = "editContainer"
//         inputEdit.className = "editInput"
//         inputEdit.setAttribute("name","input")
//         inputEdit.setAttribute("type","text")
//         inputEdit.value = obj.name
//         containerEditButton.className = "editButton"
//         containerEditButton.textContent = "Edit"
//         containerEditButton.setAttribute("dataAction","containerEditButton")
//         containerCancelButton.className = "cancelButton"
//         containerCancelButton.textContent = "Cancel"
//         containerCancelButton.setAttribute("dataAction","containerCancelButton")
//         ul.appendChild(li)
//         li.appendChild(checkButton)
//         li.appendChild(containerEdit)
//         li.appendChild(p)
//         li.appendChild(editButton)
//         li.appendChild(deleteButton)
//         containerEdit.appendChild(inputEdit)
//         containerEdit.appendChild(containerEditButton)
//         containerEdit.appendChild(containerCancelButton)
//         p.textContent = obj.name
//         return li
//     }
//     function addTask(task){
//         arrTasks.push(
//             {
//                 name:task,
//                 createdAt:Date.now(),
//                 completed: false
//             }
//         )
//     }
//     function clickedUl(e){
//         let currentLi = e.target
//         const dataAction = e.target.getAttribute("dataAction")
//         while(currentLi.nodeName !== "LI"){
//             currentLi = currentLi.parentElement
             
//         }
//         const currentLiIndex = [...lis].indexOf(currentLi)
//         const actions = {
//             checkButton:()=>{
             
//                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
//                if(arrTasks[currentLiIndex].completed){
//                 currentLi.querySelector(".fa-check").classList.add("displayNone")
//                }
//                else{
//                 currentLi.querySelector(".fa-check").classList.add("displayNone")
//                }
//                renderTasks()
//             },
//             editButton:()=>{
//                const editContainer = currentLi.querySelector(".editContainer");
//                 [...ul.querySelectorAll(".editContainer")].forEach(container =>{
//                 container.removeAttribute("style")
//                })
//                editContainer.style.display = "flex"
              
//             },
//             deleteButton:()=>{
//               arrTasks.splice(currentLiIndex,1)
//               console.log(arrTasks)
//                renderTasks()
//             },
//             containerEditButton:()=>{
//                const val = currentLi.querySelector(".editInput").value
//                arrTasks[currentLiIndex].name = val
//                renderTasks()
//             },
//             containerCancelButton:()=>{
//                 currentLi.querySelector(".editContainer").removeAttribute("style")
//                 currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
//             }
            
//         }
//         if(actions[dataAction]){
//             actions[dataAction]()
//         }
//     }
//     function renderTasks(){
//         ul.innerHTML = ""
//         arrTasks.forEach(task=>{
//             ul.appendChild(generateLiTask(task))
//         })
//     }
//     todoAddForm.addEventListener("submit",function(e){
//         e.preventDefault()
//         addTask(itemInput.value)
//         renderTasks()
//         itemInput.value = ""
//         itemInput.focus()       
//     })
//     ul.addEventListener("click",clickedUl)
//      renderTasks()
// })()
// ;(function(){
//     "use strict"
//  const itemInput = document.getElementById("item-input")
//  const todoAddForm = document.getElementById("todo-add")
//  const ul = document.getElementById("todo-list")
//  const lis = document.getElementsByTagName("li")
//  const arrTasks = [
//     {
//         name:"task 1",
//         createdAt:Date.now(),
//         completed:false

//     }
//  ]
//  function generateLiTask(obj){
//     const li = document.createElement("li")
//     const checkButton = document.createElement("button")
//     const p = document.createElement("p")
//     const editButton = document.createElement("i")
//     const deleteButton = document.createElement("i")
//     const containerEdit = document.createElement("div")
//     const inputEdit = document.createElement("input")
//     const containerEditButton = document.createElement("button")
//     const containerCancelButton = document.createElement("button")
//     li.className = "todo-item"
//     checkButton.className = "button-check"
//     checkButton.innerHTML = `<i class = "fas fa-check ${obj.completed ? "": "displayNone"}" dataAction ="checkButton">`
//     p.className = "task-name"
//     editButton.className = "fas fa-edit"
//     deleteButton.className = "fas fa-trash-alt"
//     containerEdit.className = "editContainer"
//     inputEdit.className = "editInput"
//     inputEdit.setAttribute("type","text")
//     inputEdit.value = obj.name
//     inputEdit.setAttribute("name","input")
//     containerEditButton.className = "editButton"
//     containerEditButton.textContent = "Edit"
//     containerCancelButton.className = "cancelButton"
//     containerCancelButton.textContent = "Cancel"
//     checkButton.setAttribute("dataAction","checkButton")
//     editButton.setAttribute("dataAction","editButton")
//     deleteButton.setAttribute("dataAction","deleteButton")
//     containerEditButton.setAttribute("dataAction","containerEditButton")
//     containerEditButton.textContent
//     containerCancelButton.setAttribute("dataAction","containerCancelButton")
//     ul.appendChild(li)
//     li.appendChild(checkButton)
//     li.appendChild(p)
//     li.appendChild(editButton)
//     li.appendChild(deleteButton)
//     li.appendChild(containerEdit)
//     containerEdit.appendChild(inputEdit)
//     containerEdit.appendChild(containerEditButton)
//     containerEdit.appendChild(containerCancelButton)
//     p.textContent = obj.name
//     return li
//  }
//  function addTask(task){
//     arrTasks.push(
//         {
//             name:task,
//             createdAt:Date.now(),
//             completed:false
//         }
//     )
//  }
//  function clickedUl(e){
//     const dataAction = e.target.getAttribute("dataAction")
//     if(!dataAction) return
//     let currentLi = e.target 
//     while(currentLi.nodeName !== "LI"){
//        currentLi = currentLi.parentElement
//     }
//     const currentLiIndex = [...lis].indexOf(currentLi)
//     const actions = {
//         checkButton:()=>{
//             arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
//             if(arrTasks[currentLiIndex].completed){
//                 currentLi.querySelector("fa-check").classList.add("displayNone")
//             }else{
//                 currentLi.querySelector("fa-check").classList.remove("displayNone")
//             }
//        renderTasks()
//         },
//         editButton:()=>{
//             const editContainer = currentLi.querySelector(".editContainer");
//             [...ul.querySelectorAll(".editContainer")].forEach(container=>{
//                 container.removeAttribute("style")
//             })
//             editContainer.style.display = "flex"
            
           
//         },
//         deleteButton:()=>{
//             arrTasks.splice(currentLiIndex,1)
//             renderTasks()
//         },
//         containerEditButton:()=>{
//             const val = currentLi.querySelector(".editInput").value
//             arrTasks[currentLiIndex].name = val
//             renderTasks()
         
//         },
//         containerCancelButton:()=>{
//             currentLi.querySelector(".editContainer").removeAttribute("style")
//             currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
           
//         }
//     }
//     if(actions[dataAction]){
//         actions[dataAction]()
//     }
//  }
//  function renderTasks(){
//     ul.innerHTML = ""
//     arrTasks.forEach(task=>{
//         ul.appendChild(generateLiTask(task))
//     })
//  }
//  todoAddForm.addEventListener("submit",function(e){
//     e.preventDefault()
//     addTask(itemInput.value)
//     renderTasks()
//     itemInput.value = ""
//     itemInput.focus()
//  })
   
//  ul.addEventListener("click",clickedUl)
// renderTasks()
// })()
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

   
