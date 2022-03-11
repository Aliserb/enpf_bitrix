ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [48.36117819499129,66.65876368041407],
            zoom: 6
        }, {
            searchControlProvider: 'yandex#search'
        })

        /*// Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([51.13981417496831,71.41581860728257], {
            hintContent: 'Отделение',
            balloonContent: 'Отделение 1'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/local/templates/main/front/assets/images/icons/mapIcon.png',
            // Размеры метки.
            iconImageSize: [30, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([51.1254702931515,71.44490731892925], {
            hintContent: 'Отделение',
            balloonContent: 'Отделение 1'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image2',
            // Своё изображение иконки метки.
            iconImageHref: '/local/templates/main/front/assets/images/icons/mapIcon.png',
            // Размеры метки.
            iconImageSize: [30, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([43.238941559021185,76.91473855902056], {
            hintContent: 'Отделение',
            balloonContent: 'Отделение 2',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '/local/templates/main/front/assets/images/icons/mapIcon.png',
            // Размеры метки.
            iconImageSize: [30, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }),

        myPlacemarkWithContent2 = new ymaps.Placemark([43.266295060937225,76.93997278143266], {
            hintContent: 'Отделение',
            balloonContent: 'Отделение 2',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent2',
            // Своё изображение иконки метки.
            iconImageHref: '/local/templates/main/front/assets/images/icons/mapIcon.png',
            // Размеры метки.
            iconImageSize: [30, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);*/   
        
    var collection = new ymaps.GeoObjectCollection();

    
    $('#map-filter-submit').click(function () {
        elem = $("input[name='region']:checked");
        nextElem = elem.next();
        cityName = $.trim(nextElem.text());
        $('#mapCityName').text(cityName);
        setMapCityId(elem.val());
        filterRegionalNetworks();
    });

    filterRegionalNetworks();

    function filterRegionalNetworks() {
        collection.removeAll();

        cityId = $("input[name='region']:checked").val();
        mapSearch = $('#mapSearch').val();
    
        $.ajax({
            type: "POST",
            url: "/ajax_query/map/filterRegionalNetworks.php",        
            dataType: "json",
            data: {
                cityId: cityId,
                search: mapSearch
            },
            success: function(data) {
                removeBranches();
                $.each(data, function (key, coord) {
                    addBranch(coord);

                    if (coord.PROPERTY_MAP_VALUE) {
                        var myPlacemark = new ymaps.Placemark(coord.PROPERTY_MAP_VALUE.split(','), {
                            hintContent: coord.NAME,
                            balloonContent: coord.NAME
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '/local/templates/main/front/assets/images/icons/mapIcon.png',
                            iconImageSize: [30, 35],
                            iconImageOffset: [-5, -38]
                        });
                        collection.add(myPlacemark);
                    }
                });
                /*if (data.success === true) {
                    $('.contacts-map-your_city').hide();
                }*/

                myMap.geoObjects.add(collection);
				myMap.setBounds(collection.getBounds());
            }
        });
    }
});
// ymaps.ready(init);

// function init() {
//     var myMap = new ymaps.Map('map', {
//             center: [55.30954, 37.721587],
//             zoom: 5
//         }, {
//             searchControlProvider: 'yandex#search'
//         });
    
//     // Функция, которая по состоянию чекбоксов в меню
//     // показывает или скрывает геообъекты из выборки.
//     function checkState () {
//         var shownObjects,
//             byColor = new ymaps.GeoQueryResult(),
//             byShape = new ymaps.GeoQueryResult();
        
        
//         // Отберем объекты по цвету. 
//         if ($('#region-1').prop('checked')) {
//             // Будем искать по двум параметрам:
//             // - для точечных объектов по полю preset;
//             // - для контурных объектов по цвету заливки.
//             byColor = add(myObjects.search('options.preset = "region-1"'));
//         }
//         if ($('#green').prop('checked')) {
//             byColor = myObjects.search('options.fillColor = "#00ff00"')
//                 .add(myObjects.search('options.preset = "islands#greenIcon"'))
//                 // После того, как мы нашли все зеленые объекты, добавим к ним
//                 // объекты, найденные на предыдущей итерации.
//                 .add(byColor);
//         }
//         if ($('#yellow').prop('checked')) {
//             byColor = myObjects.search('options.fillColor = "#ffcc00"')
//                 .add(myObjects.search('options.preset = "islands#yellowIcon"'))
//                 .add(byColor);
//         }
        

//         if ($('#polygon').prop('checked')) {
//             byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
//         }
//         if ($('#circle').prop('checked')) {
//             byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
//         }
        
//         // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
//         // которые совмещают нужные признаки.
//         $('#map-filter-submit').click(function() {
//             shownObjects = byColor.intersect(byShape).addToMap(myMap);
//             // Объекты, которые не попали в выборку, нужно убрать с карты.
//             myObjects.remove(shownObjects).removeFromMap(myMap);
//         });

//         $('#map-filter-reset').click(function() {
//             $('#map-filter-reset')[0].reset();
//         });
//     }
    
//     $('#red').click(checkState);
//     $('#green').click(checkState);
//     $('#yellow').click(checkState);
//     $('#point').click(checkState);
//     $('#polygon').click(checkState);
//     $('#circle').click(checkState);

    
    
//     // Создадим объекты из их JSON-описания и добавим их на карту.
//     window.myObjects = ymaps.geoQuery({
//         type: "FeatureCollection",
//         features: [
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: [51.201553373114784,71.34177094746609]
//                 },
//                 options: {
//                     preset: 'region-1'
//                 }
//             },
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Circle',
//                     coordinates: [55.24954, 37.5],
//                     radius: 20000
//                 },
//                 options: {
//                     fillColor: "#ffcc00"
//                 }
//             },
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Polygon',
//                     coordinates: [[[55.33954, 37.7], [55.43954, 37.7], [55.33954, 38.7], [55.33954, 37.7]]]
//                 },
//                 options: {
//                     fillColor: "#ffcc00"
//                 }
//             },
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: [55.24954, 37.4]
//                 },
//                 options: {
//                     preset: 'islands#greenIcon'
//                 }
//             },
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Circle',
//                     coordinates: [55.14954, 37.61587],
//                     radius: 10000
//                 },
//                 options: {
//                     fillColor: '#00ff00'
//                 }
//             },
//             {
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: [55.14954, 37.61587],
//                     radius: 10000
//                 },
//                 options: {
//                     preset: 'islands#redIcon'
//                 }
//             }
//         ]
//     }).addToMap(myMap);
// }