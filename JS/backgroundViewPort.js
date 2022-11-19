// Setting best position for backgroundViewort for mobile and desktop
// Sets paralax Scrolling for backgroundViewImage
setInterval(function () {
            if (window.innerWidth < 800) {
                document.getElementById("theme").style.height = screen.height + 150;
            }
            else {
                document.getElementById("theme").style.height = screen.height;
            }
            document.getElementById("theme").style.backgroundPositionY = window.pageYOffset * 0.02 + "vh";
        });