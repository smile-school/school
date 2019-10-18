<?php
$names = [
    'name' => 'Імя',
    'secondName' => 'Фамілія',
    'age' => 'Вік',
    'phone' => 'Мобільний телефон',
    'email' => 'E-mail',
    'region' => 'Область',
    'city' => 'Місто де ви проживаєте',
    'date' => 'Дата народження',
    'experience' => 'Стаж роботи',
    'work' => 'Вид зайнятості',
    'maritalStatus' => 'Сімейний стан',
    'salary' => 'Бажана зарплата',
    'АstraCMS' => 'Аstra. CMS',
    'Smarty' => 'Smarty',
    'PHP' => 'PHP',
    'HTML' => 'HTML',
    'CSS' => 'CSS',
    'js' => 'Java Script',
    'jQuery' => 'jQuery',
    'Mysql' => 'Mysql',
    'bug' => 'Багтрекінг',
    'yourWork' => 'Ваші роботи',
    'yourBestWork' => 'Кращі проекти',
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<table width="800" border="1" align="center" cellpadding="5">
    <caption><h1>Ваші дані</h1></caption>
    <tbody>
    <?php
    foreach ($_POST as $key => $value) {
        if ($value) {
            echo('<tr><td><h3>' . $names[$key] . ': ' . $_POST[$key] . '.</h3></td></tr>');
        }
    }
    ?>
    </tbody>
</table>
</body>
</html>
