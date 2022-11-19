// Defines positioning and colours for elements within the banner, when scrolling past the custQuickNav
        $(document).ready(function () {
            var staticHeight = document.getElementById("staticBan").offsetHeight;
            var tf = 0;
            setInterval(function () {
                if (window.pageYOffset < staticHeight) {
                    $('.userCont').css('position', 'absolute');
                    $('#searchCont').css('position', 'absolute');
                    $('#searchCont').css('top', '0px');
                    $('#banCont').css('position', 'relative');
                    $('.dynaBanNav').css('position', 'relative');
                    $('.dynaBanNav').css('top', document.getElementById("staticBan").offsetTop);
                    $('.dynaBanNavBut').css('padding-top', '10px');
                    $('.dynaBanNavBut').css('padding-bottom', '10px');
                    if (tf == 1) {
                        $('.dynaBanNavBut').css('background-color', 'transparent');
                        $('.dynaBanNavBut').css('border-bottom', '1px solid transparent');
                        tf = 0;
                    }
                    $('.dynaBanNavBut').hover(function () {
                        $(this).css('background-color', 'black');
                        $(this).css('color', 'rgb(0, 240, 0)');
                        $(this).css('border-bottom', '1px solid transparent');
                    }, function () {
                        $(this).css('background-color', 'transparent');
                        $(this).css('color', 'white');
                        $(this).css('border-bottom', '1px solid transparent');
                    });
                }
                if (window.pageYOffset > staticHeight) {
                    $('.userCont').css('position', 'fixed');
                    $('#searchCont').css('position', 'fixed');
                    $('#searchCont').css('top', '-35px');
                    $('#banCont').css('position', 'fixed');
                    $('#banCont').css('top', '0px');
                    $('.dynaBanNav').css('position', 'fixed');
                    $('.dynaBanNav').css('top', document.getElementById("banCont").offsetHeight);
                    $('.dynaBanNavBut').css('background-color', 'rgb(20, 20, 20)');
                    $('.dynaBanNavBut').css('padding-top', '15px');
                    $('.dynaBanNavBut').css('padding-bottom', '15px');
                    if (tf == 0) {
                        $('.dynaBanNavBut').css('border-bottom', '1px solid rgb(0, 200, 0)');
                        tf = 1;
                    }
                    $('.dynaBanNavBut').hover(function () {
                        $(this).css('background-color', 'rgb(20, 20, 20)');
                        $(this).css('border-bottom', '1px solid rgb(240, 240, 240)');
                        $(this).css('color', 'rgb(0, 240, 0)');
                    }, function () {
                        $(this).css('background-color', 'rgb(20, 20, 20)');
                        $(this).css('border-bottom', '1px solid rgb(0, 200, 0)');
                        $(this).css('color', 'white');
                    });
                }
            });
        });