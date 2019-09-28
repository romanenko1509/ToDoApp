<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>ToDo App</title>
</head>
<body>
  <div class="container">
    <div class="header">
        <h1>ToDo App</h1>
        <div id="refresh">↺</div>
    </div>
    <div class="form_wrapper">
      <div id="form">
        <input type="text" name="task" id="task" placeholder="New task...">
        <button type="submit" name="addTask" id="addTaskBtn">Add Task</button>
      </div>
    </div>
    <div id="tasks_wrapper"></div>
  </div>
  <script src="main.js"></script>
</body>
</html>
