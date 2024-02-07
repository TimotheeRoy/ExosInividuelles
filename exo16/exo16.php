<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 
    session_start();

    
    $first_name = isset($_GET['first_name']) ? strval($_GET['first_name']) : '';
    
    if ($first_name=='' && isset($_SESSION['first_name'])){ 
        $first_name = $_SESSION['first_name'];
    }
    elseif (isset($_POST['first_name'])){
        $first_name = strval($_POST['first_name']);
        $_SESSION['first_name'] = $first_name;
    }

    if ($first_name == ''){   
        $first_name = 'anonyme'; 
    };
    
    if (isset($_POST['reset'])){
        unset($_SESSION['first_name']);
        $first_name = 'anonyme';
    };


?>

<form action="exo16.php" method="post">
    <p>Votre nom : <input type="text" name="first_name"> </p>
    <p><input type="submit" value="OK"></p>
    <p><input type="submit" value="Reset" name="reset"></p>
</form>

    <p>Coucou <?php echo $first_name?></p>
        </body>
</html>