$( document ).ready(function() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.939095, 30.315868],
                zoom: 11
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemarkWithContent = new ymaps.Placemark([59.875998, 30.348531], {
                balloonContent: 'https://tyres.spb.ru/',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/hourse.png',
                // Размеры метки.
                iconImageSize: [50, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
        myPlacemarkWithContent2 = new ymaps.Placemark([59.980682, 30.322471], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent3 = new ymaps.Placemark([59.758708, 30.470064], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent4 = new ymaps.Placemark([59.998216, 30.235074], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent5 = new ymaps.Placemark([60.018907, 30.430996], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent6 = new ymaps.Placemark([59.994499, 30.327411], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent7 = new ymaps.Placemark([59.917317, 30.358439], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent8 = new ymaps.Placemark([59.939181, 30.415276], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent9 = new ymaps.Placemark([59.861422, 30.288119], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent10 = new ymaps.Placemark([59.997397, 30.364880], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent11 = new ymaps.Placemark([60.038209, 30.317216], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent12 = new ymaps.Placemark([59.946284, 30.433476], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent13 = new ymaps.Placemark([59.950839, 30.246060], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent14 = new ymaps.Placemark([59.824606, 30.191011], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent15 = new ymaps.Placemark([59.995287, 30.409104], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent16 = new ymaps.Placemark([59.988572, 30.348459], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent17 = new ymaps.Placemark([59.971172, 30.297578], {
            balloonContent: 'https://tyres.spb.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent18 = new ymaps.Placemark([60.042568, 30.317782], {
            balloonContent: 'https://www.shinaexpert.ru',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent19 = new ymaps.Placemark([59.879281, 30.382056], {
            balloonContent: 'https://www.shinaexpert.ru',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent20 = new ymaps.Placemark([59.881078, 30.382316], {
            balloonContent: 'https://www.shinaexpert.ru',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent21 = new ymaps.Placemark([59.961061, 30.442593], {
            balloonContent: 'https://www.shinaexpert.ru',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent22 = new ymaps.Placemark([60.059086, 30.335020], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent23 = new ymaps.Placemark([60.059086, 30.335020], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent24 = new ymaps.Placemark([60.025215, 30.317458], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent25 = new ymaps.Placemark([59.966935, 30.469408], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent26 = new ymaps.Placemark([59.882225, 30.377349], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent27 = new ymaps.Placemark([59.826411, 30.189951], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent28 = new ymaps.Placemark([59.851363, 30.295431], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent29 = new ymaps.Placemark([60.025682, 30.613731], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent30 = new ymaps.Placemark([60.069611, 30.288973], {
            balloonContent: 'https://spb.shinservice.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent31 = new ymaps.Placemark([60.042298, 30.235199], {
            balloonContent: 'http://www.greentyre.ru/',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/hourse.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });


        myMap.geoObjects
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2)
            .add(myPlacemarkWithContent3)
            .add(myPlacemarkWithContent4)
            .add(myPlacemarkWithContent5)
            .add(myPlacemarkWithContent6)
            .add(myPlacemarkWithContent7)
            .add(myPlacemarkWithContent8)
            .add(myPlacemarkWithContent9)
            .add(myPlacemarkWithContent10)
            .add(myPlacemarkWithContent11)
            .add(myPlacemarkWithContent12)
            .add(myPlacemarkWithContent13)
            .add(myPlacemarkWithContent14)
            .add(myPlacemarkWithContent15)
            .add(myPlacemarkWithContent16)
            .add(myPlacemarkWithContent17)
            .add(myPlacemarkWithContent18)
            .add(myPlacemarkWithContent19)
            .add(myPlacemarkWithContent20)
            .add(myPlacemarkWithContent21)
            .add(myPlacemarkWithContent22)
            .add(myPlacemarkWithContent23)
            .add(myPlacemarkWithContent24)
            .add(myPlacemarkWithContent25)
            .add(myPlacemarkWithContent26)
            .add(myPlacemarkWithContent27)
            .add(myPlacemarkWithContent28)
            .add(myPlacemarkWithContent29)
            .add(myPlacemarkWithContent30)
            .add(myPlacemarkWithContent31);

    });
    var btn = document.querySelectorAll('.questions-item-head');
    for (var i = 0; i < btn.length; i++) {
        (function (i) {
            var click = btn[i];
            click.onclick = function () {
                var parent = this.parentElement;
                var child = parent.children[1];

                if (this.classList.contains("act")) {
                    this.classList.remove("act");
                    child.classList.remove("act");
                } else {
                    this.classList.add("act");
                    child.classList.add("act");

                }
            }
        })(i);
    }



var mob_clicks = document.querySelectorAll('.menu_btn');
for(var i=0; i <mob_clicks.length; i++) {
  (function(i) {
   var click = mob_clicks[i];
   click.onclick = function() {
     var parent=this.parentElement;
     var child=parent.children[1];

     if (click.classList.contains("act")) {
       this.classList.remove("act");
       child.classList.remove("act");
     }else{
      this.classList.add("act");
      child.classList.add("act");
    }
  }
})(i);
}
});

// открыть по кнопке Мяч с автографом
    $('.link-ball').click(function(e) {
        e.preventDefault();
        $('.popup-ball').fadeIn();
        $('.popup-ball').addClass('disabled');
    });
// закрыть на крестик Мяч с автографом
    $('.close-popup-ball').click(function() {
        $('.popup-ball').fadeOut();
    });


// открыть по кнопке Регистрации  Логин
    $('.login-form').click(function(e) {
        e.preventDefault();
        $('.login-form-header').fadeIn();
        $('.login-form-header').addClass('disabled');
    });
// открыть по кнопке Логин
    $('.close-popup-form').click(function() {
        $('.login-form-header').fadeOut();

    });


// открыть по кнопке Регистрации в форме Логин
    $('.reg-form').click(function(e) {
        e.preventDefault();
        $('.register-form-header').fadeIn();
        $('.register-form-header').addClass('disabled');
    });


// открыть по кнопке Регистрации
    $('.register-form-open').click(function(e) {
        e.preventDefault();
        $('.register-form-header').fadeIn();
        $('.register-form-header').addClass('disabled');
        $('.login-form-header').fadeOut();
    });
// закрыть на крестик Регистрации
    $('.close-popup-form').click(function() {
        $('.register-form-header').fadeOut();
    });
// открыть по кнопке Забыл пароль
    $('.password-forgot').click(function(e) {
        e.preventDefault();
        $('.password-recover').fadeIn();
        $('.login-form-header').fadeOut();
        $('.password-recover').addClass('disabled');
    });

// закрыть на крестик Забыл пароль
    $('.close-popup-form').click(function() {
        $('.password-recover').fadeOut();
    });
// открыть по кнопке Обратная Связь
    $('.feedback-link').click(function(e) {
        e.preventDefault();
        $('.feedback-form').fadeIn();
        $('.feedback-link').addClass('disabled');
    });

// закрыть на крестик Обратная Связь
    $('.close-popup-form').click(function() {
        $('.feedback-form').fadeOut();
    });

    $(".remove-this").change(function () {
        readURL(this);
    });

    $( "#datepicker" ).datepicker();




