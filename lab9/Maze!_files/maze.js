$(document).ready(function () {
    let gameStart = false;
    const Status = {
        gameStart: 0,
        gameLost: 1,
        gameWon: 2
    }

    $("#start").click(function () {
        startGame();
    });

    function removeFailedClass() {
        $('.boundary').removeClass('you-lose');
    }

    function startGame() {
        gameStart = true;
        changeStatus(Status.gameStart)
        removeFailedClass();
        registerMouseEvents();
    }

    function registerMouseEvents() {
        let $boundary = $('.boundary');
        let $end = $('#end');

        $boundary.mouseenter(function () {
            if (gameStart) {
                gameStart = false;
                $boundary.addClass('you-lose');
                changeStatus(Status.gameLost);
            }
            $boundary.off();
        })

        $end.mouseenter(function () {
            if (gameStart === true) {
                changeStatus(Status.gameWon);
                gameStart = false;
            }
            $end.off();
        })
    }

    function changeStatus(gameStatus) {
        let statusElem = $('#status');
        switch (gameStatus) {
            case Status.gameStart:
                statusElem
                    .text('Click the "S" to begin.')
                    .css('color', 'black')
                break
            case Status.gameWon:
                statusElem
                    .text("Game won!")
                    .css('color', 'green')
                break
            case Status.gameLost:
                statusElem
                    .text('Game lost. Click the "S" to begin.')
                    .css('color', 'red')
                break
        }
    }
})
