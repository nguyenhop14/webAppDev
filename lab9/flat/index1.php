<!DOCTYPE html><html><head>
	<title>Phương trình bậc 2</title>
	<style type="text/css">
		body {
			line-height: 30px;
		}
	</style>

</head><body>
	<form method="GET" action="">
		a = <input type="text" name="a" value=""><br>
		b = <input type="text" name="b" value=""><br>
		c = <input type="text" name="c" value=""><br>
		<input type="submit" name="form_click" value="Chấp nhận"><br>
		<?php
	if (isset($_GET['form_click'])) {
		if (!isset($_GET['a']) || !isset($_GET['b']) || !isset($_GET['c'])) {
			echo "Nhập a, b, c";
		}else {
			if (!is_numeric($_GET["a"]) || !is_numeric($_GET["b"]) || !is_numeric($_GET["c"])) {
			echo "a b c phải là số";
		      }
		      // giải phương trình
		    else {
		    	$a = floatval($_GET['a']);
		    	$b = floatval($_GET['b']);
		    	$c = floatval($_GET['c']);
		    	if ($a == 0) {
		    		if ($b == 0) {
		    			if (c != 0) {
		    				echo "Phương trình vô nghiệm";
		    				# code...
		    			}
		    			else {
		    				echo "Phương trình có vô số nghiệm";
		    			}
		    			# code...
		    		} else {
		    			echo "Phương trình có một nghiệm x = ". (-$c/$x);
		    		}
		    		# code...
		    	}else {
		    		$delta = $b*$b - 4*$a*$c;
		    		if ($delta < 0) {
		    			echo "Phương trình vô nghiệm";
		    			# code...
		    		} else if ($delta == 0) {
		    			echo "Phương trình có nghiệm kép x = ".(-$b/(2*$a));
		    			# code...
		    		} else {
		    			echo "Phương trình có 2 nghiệm phân biệt x1 = ".((-$b+sqrt($delta))/(2*$a)).", x2 = ".((-$b-sqrt($delta))/(2*$a));
		    		}
		    	}
		    }
		}
	}

?>
	</form>
	
</body></html>

