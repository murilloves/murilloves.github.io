let currentSession = 1;
let sessions;
let numberOfSections;

function isSmartphone() {
    // console.log(document.getElementsByTagName('body')[0].offsetWidth);
    return document.getElementsByTagName('body')[0].offsetWidth < 767;
}

function getNumberCounters() {
    const numCounter = document.getElementsByClassName('num-svg-counter');

    Array.from(numCounter).forEach( (element) => {
        let start = Number(element.getAttribute('data-start'));
        const end = Number(element.getAttribute('data-end'));
        const interval = 500 / end;
        if (start < end) {
            numberCounter(1, 0.85, start, end, element);
            if (element.getAttribute('data-animate') && element.getAttribute('data-animate').toString().indexOf('once') !== -1) {
                element.classList.remove('num-svg-counter');
                // console.log(element);
            }
        }
    });
};

function numberCounter(intervalMs, divisor, start, end, element) {
    divisor >= 1 ? divisor = 1 : divisor = divisor;

    let iterationNumber;
    end > 1000
        ? iterationNumber = Math.ceil((end) / 11)
        : end < 111
            ? iterationNumber = 1
            : iterationNumber = Math.ceil((end) / 111);
    const qtdDigitosEnd = end.toString().length;

    // console.log(iterationNumber, intervalMs, divisor, start, end);

    if (divisor <= 1) {
        let interval = setInterval(() => {
            let zeros = '';
            let qtdDigitosStart = start.toString().length;
            if (qtdDigitosEnd !== qtdDigitosStart) {
                while (qtdDigitosEnd !== qtdDigitosStart) {
                    zeros += '0';
                    qtdDigitosStart++;
                }
            }
            element.innerHTML = zeros + start;
            start += iterationNumber;

            if (start > end * divisor) {
                clearInterval(interval);
                if (divisor < 1 && start <= end) {
                    intervalMs *= 1.36;
                    numberCounter(intervalMs, divisor * 1.012, start, end, element);
                } else {
                    element.innerHTML = end;
                }
            }
        }, intervalMs);
    }
};

function wordDecodification() {
    const wordArray = document.getElementsByClassName('word-decode-function');
    const timeMs = 150;
    const timeInitial = 400;

    Array.from(wordArray).forEach( (element) => {
        const codeStringUpperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM9503817264!&*{([})]?-_\/\\^~%#@';
        const codeString = 'qwertyuiopasdfghjklzxcvbnm9503817264!&*{([})]?-_\/\\^~%#@';
        const word = element.getAttribute('word-decode');
        let counter = 0;

        decodification(word, codeString, counter, timeInitial, element, 0);
        for(let iterator = 1; iterator < word.length; iterator++) {
            decodification(word, codeString, counter + iterator, timeMs, element, iterator);
        }
    });
};

function decodification(word, codeString, counter, timeMs, element, iterator) {
    setTimeout(() => {
        // console.log(word, 'counter:', counter, 'timeMs:', timeMs);
        let interval = setInterval(() => {
            let code = '';

            for(let j = 0; j <= counter; j++) {
                code += word[j];
            }
            for(let j = counter; j < word.length - 1; j++) {
                randNumber = Math.floor(Math.random() * (codeString.length));
                code += codeString[randNumber];
            }
            element.innerHTML = code;

            setTimeout(() => {
                clearInterval(interval);
            }, timeMs);
        }, 25);
    }, timeMs * iterator);
}

function nextSession() {
    let iterator = 0;
    currentSession++;
    currentSession %= numberOfSections;
    Array.from(sessions).forEach( (element) => {
        if (iterator === currentSession) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        iterator++;
    });
    if (!isSmartphone()) {
        wordDecodification();
        getNumberCounters();
    }
}

function calculaPotencialAcademia() {
    const qtdAlunos = document.getElementById('qtd-alunos').value;
    const qtdMetrosQuadrados = document.getElementById('qtd-metros-quadrados').value;
    const valorMensalidade = document.getElementById('valor-mensalidade').value;

    const areaPorAluno = qtdMetrosQuadrados / qtdAlunos;
    const potencialAlunos = (areaPorAluno - 2.5) * qtdAlunos;
    const potencialValor = (potencialAlunos / 2.5) * valorMensalidade;

    if (potencialAlunos < 0) {
        const diferenca = - (potencialAlunos / qtdAlunos);
        console.log('Seu potencial é aumentar o valor em ', diferenca, '%, gerando R$ ', (diferenca - 1) * valorMensalidade * qtdAlunos);
    } else {
        console.log('Seu potencial é de R$: ', potencialValor);
    }
}

let alreadyAnimated = false;
$(document).scroll(function() {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var y = $(document).scrollTop();
    var t = $('#formulario').parent().offset().top + $('#formulario').height();;
    // var y = $('#formulario').scrollTop();
    // console.log(h, y, t);
    if (y > t - h && !alreadyAnimated) {
        alreadyAnimated = true;
        restanteGradiente();
        // $('#banner-operacao').fadeIn();
    }
    // else {
    //     $('#banner-operacao').fadeOut();
    // }
});

function restanteGradiente() {
    setTimeout(() => {
        const diferencaTotalMs = new Date('2018/09/01').getTime() - new Date('2018/08/01').getTime();
        const diferencaAtualMs = new Date().getTime() - new Date('2018/08/01').getTime();
        const numAcademias = 300;
        const numAcademiasFake = 207;

        let negociosJaFechados = Math.ceil(diferencaAtualMs * numAcademias / diferencaTotalMs);
        // console.log(negociosJaFechados);

        if (negociosJaFechados > numAcademiasFake) {
            negociosJaFechados = numAcademiasFake;
        }

        document.getElementById('numero-op-restante').innerHTML = numAcademiasFake - negociosJaFechados;
        const percentualDaLinha = Math.ceil(100 * (document.getElementById('numero-op-restante').innerHTML / numAcademias));

        let percent = 100;
        const interval = setInterval(() => {
            document.getElementById('numero-op-restante').innerHTML = numAcademias * percent / 100;
            document.getElementById('linha-op-restante').style.background =
                "linear-gradient(to right, #ffa700 0%, #ffa700 " + percent + "%, #1e1ab2 " + percent + "%, #1e1ab2 100%)";
            percent--;
            // console.log(percent, percentualDaLinha);
            if (percent < percentualDaLinha) {
                clearInterval(interval);
            }
        }, 35);
    }, 500);
}

(function initSessions() {
    sessions = document.getElementsByClassName('software-info-session');
    numberOfSections = sessions.length;
    // console.log(numberOfSections);
    currentSession--;
    nextSession();
}) ();

(function executeAnimations() {
    setInterval(() => {
        nextSession();
            if (!isSmartphone()) {
            wordDecodification();
            getNumberCounters();
        }
    }, 4000);
})();

// SORT STRING:
// qwertyuiopasdfghjklzxcvbnm9503817264#@!%&*{([})]?\/
// QWERTYUIOPASDFGHJKLZXCVBNM9503817264#@!%&*{([})]?\/
