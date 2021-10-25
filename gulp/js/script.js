/* SELECT */
const SELECT_DESIGNATION = document.getElementById('designation');
const SELECT_DESIGNATION_TITLE = SELECT_DESIGNATION.querySelector('.select__title');
const SELECT_DESIGNATION_LABELS = SELECT_DESIGNATION.querySelectorAll('.select__label');

const SELECT_CURRENCY = document.getElementById('currency');
const SELECT_CURRENCY_TITLE = SELECT_CURRENCY.querySelector('.select__title');
const SELECT_CURRENCY_LABELS = SELECT_CURRENCY.querySelectorAll('.select__label');

// Toggle menu
SELECT_DESIGNATION_TITLE.addEventListener('click', () => {
    if ('active' === SELECT_DESIGNATION.getAttribute('data-state')) {
        SELECT_DESIGNATION.setAttribute('data-state', '');
    } else {
        SELECT_DESIGNATION.setAttribute('data-state', 'active');
    }
});

SELECT_CURRENCY_TITLE.addEventListener('click', () => {
    if ('active' === SELECT_CURRENCY.getAttribute('data-state')) {
        SELECT_CURRENCY.setAttribute('data-state', '');
    } else {
        SELECT_CURRENCY.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let label of SELECT_DESIGNATION_LABELS) {
    label.addEventListener('click', (evt) => {
        SELECT_DESIGNATION_TITLE.textContent = evt.target.textContent;
        SELECT_DESIGNATION.setAttribute('data-state', '');
    });
}

for (let label of SELECT_CURRENCY_LABELS) {
    label.addEventListener('click', (evt) => {
        SELECT_CURRENCY_TITLE.textContent = evt.target.textContent;
        SELECT_CURRENCY.setAttribute('data-state', '');
    });
}

/* RANGE */

const rangeBorderSProgress = document.querySelector('.js-border-s-progress');
const rangeBorderRProgress = document.querySelector('.js-border-r-progress');

function setRangeBorderSBackground () {
    let rangePercentageProgress = (((rangeBorderSProgress.value - rangeBorderSProgress.min) * 100) / (rangeBorderSProgress.max - rangeBorderSProgress.min)).toFixed(1);
    document.documentElement.style.setProperty('--range-border-s-background', `linear-gradient(to right, #2EB670 0%, #2EB670 ${rangePercentageProgress}%, #dbdcde ${rangePercentageProgress}%, #dbdcde 100%)`);
}

function setRangeBorderRBackground () {
    let rangePercentageProgress = (((rangeBorderRProgress.value - rangeBorderRProgress.min) * 100) / (rangeBorderRProgress.max - rangeBorderRProgress.min)).toFixed(1);
    document.documentElement.style.setProperty('--range-border-r-background', `linear-gradient(to right, #2EB670 0%, #2EB670 ${rangePercentageProgress}%, #dbdcde ${rangePercentageProgress}%, #dbdcde 100%)`);
}

setRangeBorderSBackground();
setRangeBorderRBackground();

rangeBorderSProgress.addEventListener('input', setRangeBorderSBackground);
rangeBorderRProgress.addEventListener('input', setRangeBorderRBackground);
