<?php
    include('db_config.php');
    $id = urldecode(file_get_contents("php://input"));
    $sql = 'DELETE FROM `tasks` WHERE `id` = '.$id;
    $query = $pdo->prepare($sql);
    $query->execute();
