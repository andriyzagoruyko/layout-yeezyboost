<?
if ($_SERVER["REQUEST_METHOD"]!="POST") {
	echo "0";
	return;
}

$phone = $_POST['phone'];
$name = $_POST['name'];
$product = isset($_POST['product']) ? $_POST['product'] : "";

$token = "1106407373:AAG3vkQsk6sjSBRCTV23W8Dt7OtAW1O1fOw";
$chat_id = "-324032633";

$arr = array(
	'Имя: ' => $name,
	'Телефон: ' => $phone,
);

if (!empty($product)){
    $arr['Товар: '] = $product;
}

$txt = '✅Новый заказ%0A';  

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    echo "1";
} else {
    echo "0";
}
