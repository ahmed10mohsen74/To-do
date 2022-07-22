document.querySelector('#push').onclick = function() { if(document.querySelector('#newtask input').value.length == 0 ){
      alert("please inter your task")
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
            <div class="task">
                <span id="taskName">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete"><i class="bi bi-trash-fill"></i></button>
            </div>
`;
        var currentTask = document.querySelectorAll(".delete");
        for(var i=0; i<currentTask.length; i++){
            currentTask[i].onclick = function(){
            this.parentNode.remove();
                
            }
        }
//        var tasks = document.querySelectorAll(".tasks");
//        for(var i=0; i<tasks.length; i++){
//            tasks[i].onclick = function(){
//                this.classList.toggle('completed');
//            }
//        }
        document.querySelector("#newtask input").value = "";
    }
}