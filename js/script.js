$(document).ready(function(){
    $(function() {
        var prefix = function() {
          var a = window.getComputedStyle(document.documentElement, ""),
            b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
          return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
        }();

        $(document).mousemove(function(e) {
          mouseX = e.pageX + 15;
          mouseY = e.pageY - $(window).scrollTop() + 15;
          $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
        });
      })
    //   커서바꾸기
    $('.bl').hover(function(){
        $('.theBall-outer').addClass('zoom')
    },function(){
        $('.theBall-outer').removeClass('zoom')
    });

    $('.bl2').hover(function(){
        $('.theBall-outer').addClass('zoom2')
    },function(){
        $('.theBall-outer').removeClass('zoom2')
    });

    $('.bl3').hover(function(){
        $('.theBall-outer').addClass('zoom3')
    },function(){
        $('.theBall-outer').removeClass('zoom3')
    });

    //햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 토글처리 / 햄버거버튼 색상 바뀌게처리 / 헤더로고 색상 바뀌게 처리
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('#hamburger span').toggleClass('active');
        $('.header-logo svg').toggleClass('active');
    });


    media();
    function media(){
        let windiwWidth = $(window).width();
        if(windiwWidth >= 1800){
            //fullpage
            new fullpage('#wrap',{
                scrollBar: true,
                normalScrollElements: '.sec-4,.sec-5,.footer',
                fitToSection:false,
                scrollingSpeed: 500,
            })
        }
    }

    // 리사이즈 시 자동호출
    $(window).resize(function(){
        windiwWidth = $(window).width();
        media();
    });

    //sub-menu
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');

        // 서브메뉴박스 보이게
        $('.sub-menu-box').addClass('active');

        //서브메뉴박스 마우스엔터시 헤더 색상 변경
        $('.header-logo svg').addClass('active');
        $('.header-area').addClass('active');

    });
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');

        //서브메뉴박스 마우스리브시 헤더 색상 클래스 제거
        $('.header-logo svg').removeClass('active');
        $('.header-area').removeClass('active');

    });

    // 스크롤 위치값에 맞춰 클래스 제어
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        // 섹션별 상단 위치값 변수에 저장
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;

        if(sct >= banner && sct < sec1){
            $('.header-logo svg').removeClass('active');
            $('.header-logo').removeClass('active');
            $('.header-area').removeClass('active');
        }else if(sct >= sec1 && sct < sec2){
            $('.header-logo svg').addClass('active');
            $('.header-logo').addClass('active');
            $('.header-area').addClass('active');
        }else if(sct >= sec2 && sct < sec4){
            $('.header-logo svg').removeClass('active');
            $('.header-area').removeClass('active');
        }else if(sct >= sec5){
            $('.header-logo svg').addClass('active');
            $('.header-area').addClass('active');
        }
    });


    //sec-4 swiper
    new Swiper(".mySwiper",{
        direction:"vertical",
        slidePerview: 'auto',
        speed: 1500,
        loop:true,
        autoplay:{
            delay: 1500,
            disableOnInteraction: false,
        }
    })

    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게)
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });
});