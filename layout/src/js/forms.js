$(function(){

    $("input[type=tel]").mask("+380(99)999-99-99");

    $("input[type=tel]").on("click", function(){
        $(this).setCursorPosition(5);
    });

    $("form").on("submit", function(e){
        e.preventDefault();

        let $form = $(this);
        let $form_block = $form.closest(".order-form");
        let formData = $form.serializeArray();

        $form_block.find(".error").remove();

        let nameValid = isNameValid(formData[0].value);
        let phoneValid = isPhoneValid(formData[1].value);

        if (!nameValid){
            $form.find("label[for=name]").append($('<span class="error">Введите корректное имя</span>'))
        }

        if (!phoneValid){
            $form.find("label[for=phone]").append($('<span class="error">Введите корректный номер</span>'))
        }

        if (!nameValid || !phoneValid) return;


        let $popup = $form.closest(".popup");

        if ($popup.length){
            formData.push({name: "product", value: "ID-" + $popup.attr("data-id") + " " + $popup.find(".popup__title").text() + " Размер: " +  $popup.attr("data-size")});
        }

        $.ajax({
            url: "/send.php",
            type: "post", 
            data: formData,
            
            error:function(){ 
                $form_block.find(".order-form__responce")
                .addClass("error")
                .fadeIn()
                .html('<strong>Ошибка!</strong> Возникла техническая неполадка. Пожалуйста, свяжитесь с нами по контактным данным.');
            }, 

            beforeSend: function() { 
                $form_block.addClass("processing");
            }, 

            success: function(result){ 
                if (result != 1){
                    $form_block.find(".order-form__responce")
                    .addClass("error")
                    .fadeIn()
                    .html('<strong>Ошибка!</strong> Возникла техническая неполадка. Пожалуйста, свяжитесь с нами по контактным данным.');
                }
                else{
                    $form_block.find(".order-form__responce")
                    .addClass("succes")
                    .fadeIn()
                    .html('<strong>Спасибо!</strong> Ваша заявка успешно отправлена. Мы перезвоним в ближайшее время.');
                }
            },
            complete: function(){
                $form.hide();
                $form_block.removeClass("processing");
            }
        });

        setTimeout(function(){

        }, 3000)
    });

    function isNameValid(name){
        if (name.length < 2){
            return false;
        }

        return true;
    }

    function isPhoneValid(phone){
        if (!phone.length){
            return false;
        }

        return true;
    }
})

