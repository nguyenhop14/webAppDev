<!DOCTYPE html><html><head>
	<title>MVC</title>
	<meta charset="utf-8">
</head><body>
	<h1>Tổng hai số</h1>
	<?php
		require_once("c.php");
		$ctrl = new SumControl();
		$ctrl->proc();
	?>
	<form>
        x = <input type="text" name="x"  value="<?php echo (isset($_GET["x"]) ? $_GET["x"] : ""); ?>"/> <br/>
        y = <input type="text" name="y" value="<?php echo (isset($_GET["y"]) ? $_GET["y"] : ""); ?>"/> <br/>
        <input type="submit" value="Chấp nhận"/>
    </form>
</body></html>
