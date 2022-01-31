$('.header-search').click(function() {
    $('.header-search').toggleClass('active');
});

jQuery(function($) {
    $(document).mouseup(function(e) {
        var div = $("#search");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('.header-search').removeClass('active');
        }
    });
});
// search

$('.header-lang-title').click(function() {
    $('.header-lang-dropdown').toggleClass('active');

    if ($('.header-lang-dropdown').hasClass('active')) {
        $('.header-lang-dropdown').show("slow");
        $('.header-lang-title-svg').css('transform', 'rotate(180deg)');
        $('.header-lang-title-svg').css('transition', 'all 0.3s ease 0s');
    } else {
        $('.header-lang-dropdown').hide(1000);
        $('.header-lang-title-svg').css('transform', 'rotate(0deg)');
        $('.header-lang-dropdown').toggleClass('noactive');
    }
});
// dropdown-lang

// burger 
$('.burger-btn').click(function(){
    $('.burger-dropdown').toggleClass('active');
  
    if($('.burger-dropdown').hasClass('active')){
        $('body').toggleClass('overflow-body');
    } else{
        $('.burger-dropdown').removeClass('active');
    }
});

$('.burger-dropdown-close').click(function(){
    $('.burger-dropdown').removeClass('active');
    $('body').removeClass('overflow-body');
});

jQuery(function($) {
    $(document).mouseup(function(e) {
        var div = $(".burger-dropdow");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('.burger-dropdow, .burger-btn').removeClass('active');
        }
    });
});
// burger.

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".sub-services-next",
        prevEl: ".sub-services-prev",
    },
});

var swiper = new Swiper(".contact-quiz-slider", {
    // effect: "fade",
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
});

var swiper3 = new Swiper(".video-instruction-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".video-instruction-next",
        prevEl: ".video-instruction-prev",
    },
});
// swiper sliders

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".services-tab-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTub = document.querySelector(tabId);

        if (currentBtn.classList.contains('active')) {
            currentBtn.classList.remove('active');
            currentTub.classList.remove('active');
        } else if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTub.classList.add('active');
        }

        if (tabsItems.classList.contains('active')) {
            
        }
    });
}
// services tabs

$('.contact-map-filter-close').click(function() {
    $('.contact-map-filter-body, .contact-map-filter-heading, .contact-map-filter').toggleClass('close');

    if ($('.contact-map-filter').hasClass('close')) {
        $('.contact-map-filter-body').hide(1000);
    } else {
        $('.contact-map-filter-body').show("slow");
    }
});
// map filter button on contact page


function toggle(source) {
    var checkboxes = document.querySelectorAll('.form-check-input');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}
// map contacts page


jQuery(($) => {
    $('.select-group, .registration-select-group').on('click', '.select__head', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select-group, .registration-select-group').on('click', '.select__item', function() {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.select-group, .registration-select-group').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

// youtube modal
! function(e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
    var modalButtons = document.querySelectorAll('.youtube-open-modal'),
        overlay = document.querySelector('.youtube-overlay-modal'),
        closeButtons = document.querySelectorAll('.youtube-overlay-modal');

    modalButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {

            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.youtube-modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach

    closeButtons.forEach(function(item) {

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.youtube-modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach

    document.body.addEventListener('keyup', function(e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.youtube-modal.active').classList.remove('active');
            document.querySelector('.youtube-overlay-modal').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.youtube-modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});
// youtube modal

// registration form file
let $fileInput = $('.file-input');
let $droparea = $('.registration-file-area');
let $fileSignIn = $('.certificate');

$fileInput.on('dragenter focus click', function() {
    $droparea.addClass('active');
});

$fileInput.on('dragleave blur drop', function() {
    $droparea.removeClass('active');
});

// change inner text
$fileInput.on('change', function() {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});

$fileSignIn.on('change', function() {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});
// registration form file

// registration form text learn more
$('.registration-desc-more, .reg-question-section .registration-desc-more').click(function() {
    $('.registration-tab-content-desc, .reg-accordions').toggleClass('active');

    if ($('.registration-tab-content-desc, .reg-accordions').hasClass('active')) {
        $('.registration-desc-more span').text('Свернуть');
        $('.registration-desc-more svg').css('transform', 'rotate(180deg)');
        $('.registration-desc-more svg').css('transition', 'all 0.3s ease 0s');
    } else {
        $('.registration-desc-more svg').css('transform', 'rotate(0deg)');
        $('.registration-desc-more span').text('Показать еще');
    }
});
// registration form text learn more

// reg accordion
// let accordion = document.querySelector('.reg-accordions, .left-menu .menu');
let accordion = document.querySelector('.information-row');
let items = accordion.querySelectorAll('.reg-accordion-item, .left-menu .menu li, .information-accordion-item');
let title = accordion.querySelectorAll('.reg-accordion-title, .left-menu-dropdown-title, .information-accordion-title');

function toggleAccordion() {
    let thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            // if this item is equal to the clicked item, open it.
            thisItem.classList.toggle('active');
            return;
        }
        // otherwise, remove the open class
        item.classList.remove('active');
    });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));
// reg accordion

// reg tabs
let tab = document.querySelectorAll('.registration-form-tab'),
    tabContent = document.querySelectorAll('.registration-form-tab-content');

tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
        hideTab();
        this.classList.add('active');
        tabContent[i].classList.add('active');
    });
});

function hideTab() {
    tab.forEach((item) => {
        item.classList.remove('active');
    });
    tabContent.forEach((item) => {
        item.classList.remove('active');
    });
}
// reg tabs

// tabs
$(document).on('click', '.registration-tab', function() {
    let cat = $(this).data('category');

    $('.registration-tab-content.active').removeClass('active');
    $('.registration-tab-content[data-category="' + cat + '"]').addClass('active');
    $('.registration-tab.active').removeClass('active');
    $('.registration-tab[data-category="' + cat + '"]').addClass('active');
});

$(document).on('click', '.pension-calc-tab', function() {
    let cat = $(this).data('category');

    $('.pension-calc-tab-content.active').removeClass('active');
    $('.pension-calc-tab-content[data-category="' + cat + '"]').addClass('active');
    $('.pension-calc-tab.active').removeClass('active');
    $('.pension-calc-tab[data-category="' + cat + '"]').addClass('active');
});
// tabs

// calc modal
! function(e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
    var modalButtons = document.querySelectorAll('.modal-trigger-btn'),
        overlay = document.querySelector('.modal-bg-close'),
        closeButtons = document.querySelectorAll('.modal-close');

    modalButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {

            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal-wrap[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach

    closeButtons.forEach(function(item) {

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal-wrap');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach

    document.body.addEventListener('keyup', function(e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal-wrap.active').classList.remove('active');
            document.querySelector('.modal-bg-close').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal-wrap.active').classList.remove('active');
        this.classList.remove('active');
    });
});


const labels = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];

const data = {
    labels: labels,
    datasets: [{
            label: 'Базовая пенсия',
            backgroundColor: '#007B4B',
            borderColor: '#007B4B',
            data: [0, 2000, 2000, 4000, 4000, 6000, 6000, 6000, 8000, 10000, 12000, 12000],
        },
        {
            label: 'Солидарная пенсия',
            backgroundColor: '#F7C12F',
            borderColor: '#F7C12F',
            data: [0, 2000, 4000, 6000, 2000, 2000, 2000, 4000, 6000, 9000, 10000, 11000],
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                },
                position: 'bottom'
            }
        }
    }
};

const myChart1 = new Chart(
    document.getElementById('line-1'),
    config
);

const myChart2 = new Chart(
    document.getElementById('line-modal-1'),
    config
);
// information charts

// information accordion

// reg accordion




// smart_table
$('.smart_table--main').click(function() {
    if ($(this).data('elem')) {
        let id = $(this).data('elem');
        let th = $(this).data('th');
        if ($(this).parents('.smart_table--td').hasClass('smart_td--first')) {
            $('.smart_table--tr').removeClass('smart_tr--active');
            $('.smart_table--td').removeClass('smart_td--active');
        }

        $('.smart_table--th').removeClass('smart_th--active');
        $('.smart_th-' + th).addClass('smart_th--active');

        $(this).parents('.smart_table--td').removeClass('smart_td--active');
        $(this).parents('.smart_table--tr').addClass('smart_tr--active');
        $(this).parents('.smart_table--tr').find('.smart_td-' + id).addClass('smart_td--active');
    }
});