(function () {

    let timer = null;
    let difficult = 10;
    let gameSize = 15;
    let positionX = positionY = 0;
    let xVelocity = yVelocity = 0;
    let targetX = targetY = 5;
    let trail = [];
    let tail = 5;
    let score = 0;
    let lives = 3;
    let points = 10;
    let gameBegining = true;

    let bgColor = '#B9C501';
    let snakeColor = '#746500';
    let targetColor = '#867C03';

    let record = 0;

    window.onload = function() {
        initGame();
        updateLives();
        initVariables();
        updateScore(true);
    }
    function initVariables() {
        tail = 5;
        score = 0;
        gameBegining = true;
        positionX = positionY = 0;
        xVelocity = yVelocity = 0;
        targetX = targetY = 5;
    }
    function initGame() {
        canv = document.getElementById('snake-game');
        ctx = canv.getContext('2d');
        document.addEventListener('keydown', keyPressed);
        clearInterval(timer);
        timer = setInterval(game, 1000/difficult);
        showYouAreDeadMsg(false);
    }
    function stopGame() {
        if (!gameBegining) {
            clearInterval(timer);
            keyPressed(32);
            showYouAreDeadMsg(true);
            if (lives === 0) {
                showYouAreDeadMsg(false);
                document.getElementById('game-over').style.display = 'block';
            }
        }
    }
    function showYouAreDeadMsg(showMsg) {
        let hideOrBlock;
        showMsg ? hideOrBlock = 'block' : hideOrBlock = 'none'
        document.getElementById('you-are-dead').style.display = hideOrBlock;
    }
    function updateScore(isDead) {
        isDead ? score = 0 : score += points;
        document.getElementById('score').innerHTML = score + ' pts';
    }
    function updateLives() {
        if(tail > 5) {
            lives--;
        }
        let text = '';
        for (let indx = 0; indx < lives; indx++) {
            text += ' ❤'
        }
        document.getElementById('lives').innerHTML = text;
    }
    function updateRecord() {
        if (score > record) {
            record = score;
            document.getElementById('record').innerHTML = record;
        }
    }
    function setDifficult(refreshRate, pontuation, difficultName) {
        if (lives > 0) {
            points = parseInt(pontuation);
            clearInterval(timer);
            timer = setInterval(game, 1000/refreshRate);
            document.getElementById('difficult').innerHTML = difficultName;
        }
    }
    function game() {
        positionX += xVelocity;
        positionY += yVelocity;
        if(positionX < 0) {
            positionX = gameSize - 1;
        }
        if(positionX > gameSize - 1) {
            positionX = 0;
        }
        if(positionY < 0) {
            positionY = gameSize - 1;
        }
        if(positionY > gameSize - 1) {
            positionY = 0;
        }
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canv.width, canv.height);

        ctx.fillStyle = snakeColor;
        for(var indx = 0; indx < trail.length; indx++) {
            ctx.fillRect(
                trail[indx].x*gameSize,
                trail[indx].y*gameSize,
                gameSize-2,
                gameSize-2
            );
            if(trail[indx].x === positionX && trail[indx].y === positionY) {
                updateLives();
                updateRecord();
                updateScore(true);
                stopGame();
                tail = 5;
            }
        }
        trail.push({x:positionX, y:positionY});
        while(trail.length > tail) {
            trail.shift();
        }

        if(targetX === positionX && targetY === positionY) {
            tail++;
            targetX = Math.floor(Math.random() * gameSize);
            targetY = Math.floor(Math.random() * gameSize);
            updateScore(false);
        }
        ctx.fillStyle = targetColor;
        ctx.fillRect(
            targetX*gameSize,
            targetY*gameSize,
            gameSize-2,
            gameSize-2
        );
    }
    function keyPressed(evt) {
        if(evt.keyCode === 37) {
            gameBegining = false;
            if (xVelocity !== 1) {
                xVelocity =- 1;
                yVelocity = 0;
            }
        } else if (evt.keyCode === 38) {
            gameBegining = false;
            if (yVelocity !== 1) {
                xVelocity = 0;
                yVelocity =- 1;
            }
        } else if (evt.keyCode === 39) {
            gameBegining = false;
            if (xVelocity !== -1) {
                xVelocity = 1;
                yVelocity = 0;
            }
        } else if (evt.keyCode === 40) {
            gameBegining = false;
            if (yVelocity !== -1) {
                xVelocity = 0;
                yVelocity = 1;
            }
        } else if (evt === 32) {
            gameBegining = true;
            xVelocity = 0;
            yVelocity = 0;
        } else if (evt.keyCode === 32) {
            if (lives > 0 && tail === 5) {
                initGame();
            }
        }
    }
    (function setupButtonsLevels() {
        document.getElementById('easy').addEventListener('click', function(){
            setDifficult('10','10','Easy');
        });
        document.getElementById('medium').addEventListener('click', function(){
            setDifficult('15','25','Medium');
        });
        document.getElementById('hard').addEventListener('click', function(){
            setDifficult('25','50','Hard');
        });
        document.getElementById('insane').addEventListener('click', function(){
            setDifficult('35','100','Insane');
        });
    })();
})();
