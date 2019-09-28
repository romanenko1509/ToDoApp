<?php
  $task = urldecode(file_get_contents("php://input"));
  include('db_config.php');
  $sql = 'INSERT INTO tasks(task) VALUES(:task)';
  $query = $pdo->prepare($sql);
  $query->execute(['task' => $task]);
