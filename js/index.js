$(document).ready(function() {
    var x = "x";
    var o = "o";
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    var scale = 3;

    function checkWin(mark) {
        for (var i = 1; i <= (scale * scale); i++) {
            console.log("first, second, third:", i, i + scale + 1, i + scale * 2 + 2);
            
            if (
                ($("#".concat(i)).hasClass(mark) && $("#".concat(i + 1)).hasClass(mark) && $("#".concat(i + 2)).hasClass(mark) && i % scale <= scale - 2 && i % scale != 0) ||
                ($("#".concat(i)).hasClass(mark) && $("#".concat(i + scale)).hasClass(mark) && $("#".concat(i + scale * 2)).hasClass(mark)) ||
                ($("#".concat(i)).hasClass(mark) && $("#".concat(i + scale + 1)).hasClass(mark) && $("#".concat(i + scale * 2 + 2)).hasClass(mark) && i % scale <= scale - 2 && i % scale != 0) ||
                ($("#".concat(i)).hasClass(mark) && $("#".concat(i - scale + 1)).hasClass(mark) && $("#".concat(i - scale * 2 + 2)).hasClass(mark) && i % scale <= scale - 2 && i % scale != 0)
            ) {
                return true;
            } 
        }

        return false
    }

    function deleteChilds() {
        var parent = document.getElementById("game");

        if (parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }

    function generateNewTable() {
        var parent = document.getElementById("game");
        for (var i = 1; i <= (scale * scale); i++) {
            var child = document.createElement("li");
            child.id = i;
            child.className = "btn span1";
            child.textContent = "+";
            parent.appendChild(child);
        }
    }

    $(document).on("click", "#game li", function() {
        console.log("CLICK");
        if (checkWin('o')) {
            alert('O has won the game. Start a new game');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');
        } else if (checkWin('x')) {
            alert('X wins has won the game. Start a new game');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');
        } else if (count == scale * scale - 1) {
            alert('Its a tie. It will restart.');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');
            count = 0;
        } else if ($(this).hasClass('disable')) {
            alert('Already selected');
        } else if (count % 2 == 0) {
            count++;
            $(this).text(o);
            $(this).addClass('disable o btn-primary');

            if (checkWin('o')) {
                alert('O wins');
                count = 0;
                o_win++;
                $('#o_win').text(o_win);
            }
        } else {
            count++;
            $(this).text(x);
            $(this).addClass('disable x btn-info');

            if (checkWin('x')) {
                alert('X wins');
                count = 0;
                x_win++;
                $('#x_win').text(x_win);
            }
        }
    });
        
    $("#reset").click(function () {
        console.log("RESET");
        $("#game li").text("+");
        $("#game li").removeClass('disable');
        $("#game li").removeClass('o');
        $("#game li").removeClass('x');
        $("#game li").removeClass('btn-primary');
        $("#game li").removeClass('btn-info');
        count = 0;
    });

    $("#scale9").click(function () {
        $("#box-scale").removeClass("scale-".concat(scale));
        scale = 9;
        $("#box-scale").addClass("scale-".concat(scale));

        deleteChilds();
        generateNewTable();
    });

    $("#scale6").click(function () {
        $("#box-scale").removeClass("scale-".concat(scale));
        scale = 6;
        $("#box-scale").addClass("scale-".concat(scale));

        deleteChilds();
        generateNewTable();
    });

    $("#scale3").click(function () {
        $("#box-scale").removeClass("scale-".concat(scale));
        scale = 3;
        $("#box-scale").addClass("scale-".concat(scale));

        deleteChilds();
        generateNewTable();
    });
});    