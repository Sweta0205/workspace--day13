
function addNewTask() {
    var parent = document.getElementById("myTaskList");
    var createLi = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    createLi.innerText=inputValue
    parent.appendChild(createLi);

}

function removeLastTask() {
    let parent = document.getElementById('myTaskList')
    let listItems = parent.getElementsByTagName('li')
    let removeLast = listItems[listItems.length - 1]
    parent.removeChild(removeLast)

}

function removeFirstTask() {


    const list = document.getElementById('myTaskList');

    list.querySelector('li').remove()



}
function getTasksAsArray() {
    
    let Array = document.querySelectorAll('#myTaskList li')
    console.log(Array);

   
    
}

const colorPicker = document.querySelector("#colorPicker")

        function changeTaskBackgroundColor() {
            
            console.log(colorPicker.value)
                        
            for (let child of list.children) {
                console.log(child)
                child.style.backgroundColor = colorPicker.value
            }
            
        }
        
        window.onload = function() {
            colorPicker.addEventListener("input", changeTaskBackgroundColor)
        }


