let tasksWrapper = document.getElementById('tasks_wrapper');
let refreshBtn = document.getElementById('refresh');
let addTaskBtn = document.getElementById('addTaskBtn');

let getData = () => {
    const getTasksRequest = new XMLHttpRequest();
    getTasksRequest.open('GET', "get.php");
    getTasksRequest.addEventListener("readystatechange", () => {
        if (getTasksRequest.readyState === 4 && getTasksRequest.status === 200) {
                tasksWrapper.innerHTML = getTasksRequest.responseText;
            }
        });
    getTasksRequest.send();
};

getData();

refreshBtn.onclick = function() {
    getData();
};

addTaskBtn.onclick = function addTask () {
    const addTaskRequest = new XMLHttpRequest();
    let task = document.getElementById('task');
    if (task.value === "") {
        alert("Please, enter task");
    } else {
        addTaskRequest.open('POST', "add.php");
        addTaskRequest.addEventListener("readystatechange", () => {
            if (addTaskRequest.readyState === 4 && addTaskRequest.status === 200) {
                getData();
                task.value = "";
            }
        });
        addTaskRequest.send(encodeURIComponent(task.value));
    }
};

function deleteTask(id) {
    const delTaskRequest = new XMLHttpRequest();
    delTaskRequest.open('POST', "delete.php");
    delTaskRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    delTaskRequest.addEventListener("readystatechange", () => {
        if (delTaskRequest.readyState === 4 && delTaskRequest.status === 200) {
            getData();
        }
    });
    delTaskRequest.send(id);
}



// jQuery Code

/*
let getData = () => {
    $.ajax({
        url:"get.php",
        cache: false,
        success: function(responce){
            $('.tasks_wrapper').html(responce);
        }
    });
};

$('#addTaskBtn').click(function(){
    let task = $('#task');
    if (task.val() === "") {
        alert("Please, enter task");
    } else {
        $.ajax({
            url:"add.php",
            type: "POST",
            data: {'task': task.val()},
            cache: false,
            success: function(responce){
                task.val("");
                getData();
            }
        })
    }
});

function deleteTask (id) {
    $.ajax({
        url: "delete.php",
        type: "POST",
        data: "id=" + id,
        success: function (responce) {
            getData();
        }
    })
}
 */
