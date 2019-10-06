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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>Витебский проспект, 11</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
          iconContent: ''
      },
      {

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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'> Выборгская наб. д. 61 </span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
           balloonContentBody: "<span class='map-cont'>пос. Ленсоветовский  Московское ш. 231</span>",
           balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
           balloonContentBody: "<span class='map-cont'>ул. Оптиков д. 15 </span>",
           balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
         balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
         balloonContentBody: "<span class='map-cont'>ул. Руставели д.42 </span>",
         balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>ул. Сердобольская д. 3 </span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>ул. Черняховского д. 21 </span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>пр. Шаумяна д. 4 </span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>ул. Краснопутиловская 46 а</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
         balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
         balloonContentBody: "<span class='map-cont'>Политехническая 15А</span>",
         balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>Выборгское шоссе 22Б</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>ул. Партизанская 15к1</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>пр. Кима  д.6, В.О.</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
         balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
         balloonContentBody: "<span class='map-cont'>пр. Народного Ополчения д.201К</span>",
         balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
           balloonContentBody: "<span class='map-cont'>пр. Непокорённых  д.64</span>",
           balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'> ул. Харченко, д.41</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Эксклюзив"</span>',
          balloonContentBody: "<span class='map-cont'>ул. Профессора Попова д.38 (въезд с ул. Даля)</span>",
          balloonContentFooter: '<a href="https://tyres.spb.ru/catalog_tires_level_list_brand_continental" class="map-link">https://tyres.spb.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Автоэксперт"</span>',
          balloonContentBody: "<span class='map-cont'>Выборгское шоссе д. 7 корпус 1</span>",
          balloonContentFooter: '<a href="https://www.shinaexpert.ru/catalog/continental.html" class="map-link">https://www.shinaexpert.ru</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Автоэксперт"</span>',
          balloonContentBody: "<span class='map-cont'>ул.Пражская 5</span>",
          balloonContentFooter: '<a href="https://www.shinaexpert.ru/catalog/continental.html" class="map-link">https://www.shinaexpert.ru</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Автоэксперт"</span>',
          balloonContentBody: "<span class='map-cont'>ул.Фучика, д.17 </span>",
          balloonContentFooter: '<a href="https://www.shinaexpert.ru/catalog/continental.html" class="map-link">https://www.shinaexpert.ru</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Автоэксперт"</span>',
          balloonContentBody: "<span class='map-cont'>ш.Революции, дом 58</span>",
          balloonContentFooter: '<a href="https://www.shinaexpert.ru/catalog/continental.html" class="map-link">https://www.shinaexpert.ru</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
          balloonContentBody: "<span class='map-cont'>пр. Энгельса,  154 е</span>",
          balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
          balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
          balloonContentBody: "<span class='map-cont'>пр. Энгельса,  96</span>",
          balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>ул. Десантников, 11</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>ул. Десантников, 11</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>ул. Химиков, 10</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>проспект маршала Жукова, 78</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>Ленинский проспект, 147</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>Ленинградская обл., г. Всеволожск, Дорога Жизни 6 километр</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
           balloonContentHeader: '<span class="map-header">ООО "Шинсервис"</span>',
           balloonContentBody: "<span class='map-cont'>Выборгское ш., 212 литера В</span>",
           balloonContentFooter: '<a href="https://spb.shinservice.ru/catalog/continental/" class="map-link">https://spb.shinservice.ru/</a>',
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
         balloonContentHeader: '<span class="map-header">ООО "Зеленая Шина"</span>',
         balloonContentBody: "<span class='map-cont'>Санкт-Петербург, Парашютная 70</span>",
         balloonContentFooter: '<a href="http://www.greentyre.ru/catalog/tyres/continental/page-3/" class="map-link">http://www.greentyre.ru/</a>',
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


$(".remove-this").change(function () {
    readURL(this);
});

$( "#datepicker" ).datepicker();




