//получаем эл-т gameCanvas
const canvas = document.getElementById('gameCanvas');
//возвращает объект, предоставляющий методы и свойства для рисования в элементе <canvas>
const context = canvas.getContext('2d');

function gameLoop() {
    //Метод clearRect() очищает заданную область пикселей внутри данного прямоугольника
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Здесь будет логика игры

    //создаем игрока - квадрат синего цвета
    const player = {
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        color: 'blue',
        speed: 1
    };

    //отрисовка игрока на холсте с использованием метода fillRect
    //положение игрока берется из const player
    function drawPlayer() {
        context.fillStyle = player.color;
        context.fillRect(player.x, player.y, player.width, player.height);
    }

    //обработчик событий для стрелок клавиатуры
    //при нажатии клавиши соответствующая координата игрока изменяется в зависимости от направления
    //используем условие if else для того чтобы делать проверку положения игрока и в случае необходимости
    //не давать ему выходить за пределы холста
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if(player.y < 1) {
                    break;
                } else {
                    player.y -= player.speed;
                break;
                }
            case 'ArrowDown':
                if(player.y > 549) {
                    break;
                } else {
                    player.y += player.speed;
                break;
                }
            case 'ArrowLeft':
                if(player.x < 1) {
                    break;
                } else {
                    player.x -= player.speed;
                break;
                }
            case 'ArrowRight':
                if(player.x > 749) {
                    break;
                } else {
                    player.x += player.speed;
                break;
                }
        }
    });

    //функция gameLoop очищает холст и рисует игрока на каждом кадре
    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer();
        requestAnimationFrame(gameLoop);
    }

    //Функция requestAnimationFrame вызывает указанную функцию перед следующим перерисовкой кадра
    requestAnimationFrame(gameLoop);
}

gameLoop();