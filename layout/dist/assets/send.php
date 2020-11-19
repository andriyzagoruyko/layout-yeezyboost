<?

$send = true;

if ($send) {
    echo json_encode([
        'status' => 'success',
        'message' => '<b>Спасибо!</b> Ваша заявка успешно отправлена. Мы перезвоним в ближайшее время.'
        ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => '<b>Ошибка!</b> Возникла техническая неполадка. Пожалуйста, свяжитесь с нами по контактным данным.'
        ]);
}
