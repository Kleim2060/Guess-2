// Start
const header = document.querySelector('.header'),
      btnStart = document.querySelector('.btn_start'),
      sectionKnow = document.querySelector('.section__know'),
      btnKnowTrue = document.querySelector('.btn_true'),
      btnHelp = document.querySelector('.btn_false'),
      sectionLevel = document.querySelector('.section__level')
      sectionGame = document.querySelector('.game')
      iDountKnow = document.querySelector('.i_dont_know')
      textLevel = document.querySelector('.text_level')
      input = document.querySelector('.input')

let record = 0;

sectionKnow.style.display = 'none'
sectionLevel.style.display = 'none'
sectionGame.style.display = 'none'

btnStart.addEventListener('click', () => {
    header.style.display = 'none'
    sectionKnow.style.display = 'block'
})

// Query

btnKnowTrue.addEventListener('click', () => {
    sectionKnow.style.display = 'none'
    sectionLevel.style.display = 'block'
})

btnHelp.addEventListener('click', () => {
    if(iDountKnow.className == 'i_dont_know'){
        iDountKnow.textContent = 'В этой игре тебе надо угадать число, которое сгинирирует нейросеть. Ты можешь набрать число, после чего тебе скажут это число больше или меньше числа, которую ты должен угадать. От уровня сложности, тебе будет выдано несколько попыток, а так же диопозон чисел. В очень легком - 3 попыток и допозон от 0 до 5, в легком - 5 попыток и диопозон до 25, в среднем - 6 попыток и доиопозон до 100, в сложном - 8 попыток и диопозон до 500, в невозможном 16 попыток и диопозон до 100000';
        iDountKnow.className = 'i_know'
        return('')
    }
    if(iDountKnow.className == 'i_know'){
        iDountKnow.textContent = '';
        iDountKnow.className = 'i_dont_know'
        return('')
    }
})

// Level

const currentLevelsArray = document.querySelectorAll('.level'),
      btnSend = document.querySelector('.btn_send'),
      counterTry = document.querySelector('.counter_try')
      plusOrMinus = document.querySelector('.plus_or_minus'),
      btnReload = document.querySelector('.reload')
      userRecord = document.querySelector('.counter_record')

currentLevelsArray.forEach(element => {
    if(element.innerHTML === 'Супер легкий'){
        element.addEventListener('click', () => {
            sectionLevel.style.display = 'none'
            btnReload.style.display = 'none'
            sectionGame.style.display = 'block'
            btnSend.style.display = 'inline-block'
            input.value = ''
            counterTry.innerHTML = 3;
            textLevel.innerHTML = 'от 0 до 5';
            let rundomInt = Math.floor(Math.random() * 5);
            let warningCurrent = 3
            plusOrMinus.innerHTML = ''
            btnSend.addEventListener('click', function(){
                if (warningCurrent != 0) {
                    result = input.value;
                    if(rundomInt > result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Больше!'
                    }
                    if(rundomInt < result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Меньше!'
                    }
                    if(rundomInt == result){
                        plusOrMinus.innerHTML = 'Правильно, молодец! Давай еще!'
                        btnReload.style.display = 'block'
                        if(record < warningCurrent){
                            record = warningCurrent
                            userRecord.innerHTML = record
                        }
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                }
           }
                    if(warningCurrent === 0){
                        plusOrMinus.innerHTML = "У тебя закончились попытки! Не растраивайся получиться в следующей раз. Давай еще!"
                        btnReload.style.display = 'block'
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                    }
            })
        })
    }
    if(element.innerHTML === 'Легкий'){
        element.addEventListener('click', () => {
            sectionLevel.style.display = 'none'
            btnReload.style.display = 'none'
            sectionGame.style.display = 'block'
            btnSend.style.display = 'inline-block'
            input.value = ''
            counterTry.innerHTML = 5;
            textLevel.innerHTML = 'от 0 до 25';
            let rundomInt = Math.floor(Math.random() * 25);
            let warningCurrent = 5
            plusOrMinus.innerHTML = ''
            btnSend.addEventListener('click', function(){
                if (warningCurrent != 0) {
                    result = input.value;
                    if(rundomInt > result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Больше!'
                    }
                    if(rundomInt < result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Меньше!'
                    }
                    if(rundomInt == result){
                        plusOrMinus.innerHTML = 'Правильно, молодец! Давай еще!'
                        btnReload.style.display = 'block'
                        if(record < warningCurrent){
                            record = warningCurrent
                            userRecord.innerHTML = record
                        }
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                }
           }
                    if(warningCurrent === 0){
                        plusOrMinus.innerHTML = "У тебя закончились попытки! Не растраивайся получиться в следующей раз. Давай еще!"
                        btnReload.style.display = 'block'
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                    }
            })
        })
    }
    if(element.innerHTML === 'Средний'){
        element.addEventListener('click', () => {
            sectionLevel.style.display = 'none'
            btnReload.style.display = 'none'
            sectionGame.style.display = 'block'
            btnSend.style.display = 'inline-block'
            input.value = ''
            counterTry.innerHTML = 6;
            textLevel.innerHTML = 'от 0 до 100';
            let rundomInt = Math.floor(Math.random() * 100);
            let warningCurrent = 6
            plusOrMinus.innerHTML = ''
            btnSend.addEventListener('click', function(){
                if (warningCurrent != 0) {
                    result = input.value;
                    if(rundomInt > result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Больше!'
                    }
                    if(rundomInt < result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Меньше!'
                    }
                    if(rundomInt == result){
                        plusOrMinus.innerHTML = 'Правильно, молодец! Давай еще!'
                        btnReload.style.display = 'block'
                        if(record < warningCurrent){
                            record = warningCurrent
                            userRecord.innerHTML = record
                        }
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                }
           }
                    if(warningCurrent === 0){
                        plusOrMinus.innerHTML = "У тебя закончились попытки! Не растраивайся получиться в следующей раз. Давай еще!"
                        btnReload.style.display = 'block'
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                    }
            })
        })
    }
    if(element.innerHTML === 'Сложный'){
        element.addEventListener('click', () => {
            sectionLevel.style.display = 'none'
            btnReload.style.display = 'none'
            sectionGame.style.display = 'block'
            btnSend.style.display = 'inline-block'
            input.value = ''
            counterTry.innerHTML = 9;
            textLevel.innerHTML = 'от 0 до 500';
            let rundomInt = Math.floor(Math.random() * 500);
            let warningCurrent = 9
            plusOrMinus.innerHTML = ''
            btnSend.addEventListener('click', function(){
                if (warningCurrent != 0) {
                    result = input.value;
                    if(rundomInt > result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Больше!'
                    }
                    if(rundomInt < result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Меньше!'
                    }
                    if(rundomInt == result){
                        plusOrMinus.innerHTML = 'Правильно, молодец! Давай еще!'
                        btnReload.style.display = 'block'
                        if(record < warningCurrent){
                            record = warningCurrent
                            userRecord.innerHTML = record
                        }
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                }
           }
                    if(warningCurrent === 0){
                        plusOrMinus.innerHTML = "У тебя закончились попытки! Не растраивайся получиться в следующей раз. Давай еще!"
                        btnReload.style.display = 'block'
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                    }
            })
        })
    }
    if(element.innerHTML === 'Невозможный'){
        element.addEventListener('click', () => {
            sectionLevel.style.display = 'none'
            btnReload.style.display = 'none'
            sectionGame.style.display = 'block'
            btnSend.style.display = 'inline-block'
            input.value = ''
            counterTry.innerHTML = 20;
            textLevel.innerHTML = 'от 0 до 1000.000';
            let rundomInt = Math.floor(Math.random() * 1000000);
            let warningCurrent = 20
            plusOrMinus.innerHTML = ''
            btnSend.addEventListener('click', function(){
                if (warningCurrent != 0) {
                    result = input.value;
                    if(rundomInt > result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Больше!'
                    }
                    if(rundomInt < result){
                        warningCurrent--
                        counterTry.innerHTML = warningCurrent;
                        plusOrMinus.innerHTML = 'Меньше!'
                    }
                    if(rundomInt == result){
                        plusOrMinus.innerHTML = 'Правильно, молодец! Давай еще!'
                        btnReload.style.display = 'block'
                        if(record < warningCurrent){
                            record = warningCurrent
                            userRecord.innerHTML = record
                        }
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                }
           }
                    if(warningCurrent === 0){
                        plusOrMinus.innerHTML = "У тебя закончились попытки! Не растраивайся получиться в следующей раз. Давай еще!"
                        btnReload.style.display = 'block'
                        btnReload.addEventListener('click', function(){
                            sectionLevel.style.display = 'block'
                            sectionGame.style.display = 'none'
                            btnReload.style.display = 'none'
                            return(true)
                        })
                    }
            })
        })
    }
})