window.onload = function () {


    const sbN = document.getElementById('sb-n');
    const sbA = document.getElementById('sb-a');
    const selN = document.getElementsByClassName('sel-normal')[0];
    const selA = document.getElementsByClassName('sel-advance')[0];
    const selSel = document.getElementsByClassName('sel-sel');
    const radio = document.getElementsByClassName('radio');
    const select = document.getElementsByTagName('select');
    const input = document.getElementsByTagName('input');

    // 一般/進階搜尋切換

    sbN.addEventListener('click', function () {
        sbA.classList.remove('sbtn-selected');
        sbN.classList.add('sbtn-selected');
        selA.setAttribute('hidden', '');
        selN.removeAttribute('hidden');

    });
    sbA.addEventListener('click', function () {
        sbN.classList.remove('sbtn-selected');
        sbA.classList.add('sbtn-selected');
        selN.setAttribute('hidden', '');
        selA.removeAttribute('hidden');
    });
    console.log(selSel.length)
    // sel-sel selection focus樣式
    // 判斷選擇模式為一般時
    if (sbN.classList.contains('sbtn-selected')) {
        for (let i = 0; i < 4; i++) {
            selSel[i].addEventListener('click', function () {
                // 如果這個select已選擇
                if (select[i].value !== 'default') {
                    // 讓下一排select改變外觀成可選擇樣式
                    selSel[i + 1].classList.add('sel-focus');
                    // 預設只有第一個select可選擇，其他disabled，讓下一排select可以選擇
                    select[i + 1].removeAttribute('disabled');
                    if (i === 2) {
                        for (let j = 0; j < (input.length - 1); j++) {
                            input[j].removeAttribute('disabled');
                            radio[j].style.color = '#CE976F';
                        }
                    } else {
                        for (let j = 0; j < input.length; j++) {
                            input[j].setAttribute('disabled', '');
                            radio[j].style.color = '#C4C4C4';
                            input[j].setAttribute('checked', 'false');
                            input[j].removeAttribute('checked');
                        }
                    }
                    for (let k = 0; k < 4; k++) {
                        if (i < (i + k) && (i + k) < 4) {
                            console.log(i + k)
                            select[i + k].value = 'default';
                            selSel[i + k + 1].classList.remove('sel-focus');
                            console.log('i=', i)
                        }
                    }
                }


            })
        }
    }



}