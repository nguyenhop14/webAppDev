<?php
	require_once("m.php");
	require_once("v.php");

	class SumControl {
		public function proc() {
			//1. Nhận yêu cầu, kiểm tra các tham số
			if (isset($_GET["x"]) && isset($_GET["y"]) 
				&& is_numeric($_GET["x"]) && is_numeric($_GET["y"])) {				
				$x = $_GET["x"]; 
				$y = $_GET["y"]; 

				//2. Gọi model để xử lý nghiệp vụ
				$model = new SumModel($x, $y);
				$model->solve();
				$ret = $model->getSum(); //Kết quả xử lý nghiệp vụ
	
				//3. Gọi view để tạo nội dung
				$view = new SumView($x, $y, $ret);
				$html = $view->render();
	
				//4. Trả lời trình khách
				echo $html;
			} else {
				echo "Nhập x, y là các số.";
			}
		}
	}
