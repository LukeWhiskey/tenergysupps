// defining the positions and dimensions of the searchBar for mobile and desktop
        $(document).ready(function () {
            var userHeight = document.getElementById("scrollCont").offsetHeight + document.getElementById("nav").offsetHeight;
            $('#banCont').css('height', userHeight);
            $('.userCont').css('height', document.getElementById("banCont").offsetHeight);
            setInterval(function () {
                $('#search').css('transition', '0s');
                var dimensions = 35;
                var staticHeight = document.getElementById("staticBan").offsetTop + document.getElementById("staticBan").offsetHeight + 22.5;
                if (window.innerWidth < 1200) {
                    var boxMultiCont = document.body.offsetWidth * 0.52;
                    if (window.innerWidth < 780) {
                        $('#searchCont').css('width', boxMultiCont);
                        $('#searchCont').css('margin-left', document.body.offsetWidth / 5.3);
                    }
                    else {
                        $('#searchCont').css('margin-left', window.outerWidth * (1 - 0.5) / 3);
                    }
                    document.getElementById('banCont').innerHTML = "TE";
                    document.getElementById('accountText').innerHTML = "";
                    document.getElementById('basketText').innerHTML = "2";
                    $('#basketText').css('position', 'absolute');
                    $('#basketText').css('text-align', 'center');
                    $('#basketText').css('width', '50%');
                    $('#basketText').css('margin-top', '8.5px');
                }
                else {
                    var boxMultiCont = window.innerWidth * 0.3;
                    $('#searchCont').css('margin-left', (window.innerWidth - (boxMultiCont + dimensions)) / 2 + 40);
                    document.getElementById('banCont').innerHTML = "Tenergy";
                    document.getElementById('accountText').innerHTML = "Account";
                    document.getElementById('basketText').innerHTML = "Basket (2)";
                    $('#basketText').css('position', 'relative');
                    $('#basketText').css('text-align', 'left');
                    $('#basketText').css('width', 'auto');
                    $('#basketText').css('margin-top', '7.5px');
                }
                $('#searchCont').css('margin-top', staticHeight);
                $('#searchCont').css('width', boxMultiCont);
                $('#searchCont').css('height', dimensions);
                $('#search').css('width', dimensions);
                $('#search').css('height', dimensions);
                $('#search').css('transition', '0.1s');
                $('.searchBar').css('height', dimensions);
                $('.searchBar').css('width', boxMultiCont - dimensions);
            });
        });