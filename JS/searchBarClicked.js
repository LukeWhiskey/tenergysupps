// Creates background dimmer for when search bar is clicked
        $(document).ready(function () {
            var backShad = 0;
            var dynaBanNavButHeight = document.getElementById("nav").offsetTop + document.getElementById("nav").offsetHeight;
            $('#dynaBanNavCont').css('height', dynaBanNavButHeight - 2.5);
            $('cont').append("<div id=\"backShad\"></div>");
            setInterval(function () {
                function clickIn() {
                    $('.searchBar').css('background-color', 'rgb(50, 50, 50)');
                    $('.searchBar').css('color', 'rgb(0, 200, 0)');
                    $('.searchBar').css('border', '1px solid rgb(0, 200, 0)');
                    $('#search').css('border', '1px solid rgb(0, 200, 0)');
                    $('#backShad').css('z-index', '2');
                    backShad = 1;
                }
                function clickOut() {
                    $('.searchBar').css('background-color', 'transparent');
                    $('.searchBar').css('color', 'white');
                    $('.searchBar').css('border', '1px solid rgb(0, 200, 0)');
                    $('#search').css('border', '1px solid rgb(0, 200, 0)');
                    $('#search').css('border-left', '0px');
                    $('#backShad').css('z-index', '-1');
                    backShad = 0;
                }
                $('.searchBar').click(function () {
                    if (backShad == 0) {
                        clickIn();
                    }
                    else if (backShad == 1) {
                        if (window.pageYOffset > 100) {
                            clickOut();
                        }
                        $('#backShad').click(function () {
                            clickOut();
                        });
                    }
                });
            });
        });