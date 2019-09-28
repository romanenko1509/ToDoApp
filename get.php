<?php
    include('db_config.php');
    echo "<ul>";
    $query = $pdo->query('SELECT * FROM `tasks`');
    while($row = $query->fetch(PDO::FETCH_OBJ)) {
?>
        <li class="task"><?=$row->task?><span id="<?=$row->id?>" class="delTask" onclick="deleteTask(<?=$row->id?>)">Remove</span></li>
<?php
    }
    echo "</ul>";
?>
