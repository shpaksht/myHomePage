// проверка функции
function сheckInputBeforeDiscount() {
    if (emptyInput()) {
        discountResult();
    }
}

// результат
function discountResult() {
    
    let input = document.getElementById('inputAge')
    let inputValue = input.value;
    let select = document.getElementById('category');
    let checkboxSchool = document.getElementById('schoolBoxCheckbox');
    let checkboxStudents = document.getElementById('studentBoxCheckbox');
    let checkboxPension = document.getElementById('PensionBoxCheckbox');
    let button = document.getElementById('btn');
    let result = document.getElementById('resultWindow');
    let alertWindow = document.getElementById('alert');
    let alertPercentage = document.getElementById('percentage');
    let alertText = document.getElementById('alertText');
    let alertHr = document.getElementById('hr');
    let selectHelp = document.getElementById('selectHelp')

    setTimeout(() => {
        if(inputValue >= 8 && inputValue <= 18  && select.value === "1") {
            result.style.display = 'block';
            alertText.textContent = 'Вы подлежите получению скидки';
            alertHr.textContent = 'Чтобы получить скидку может потребоваться документ, подтверждающий ваше отношение к определённой категории граждан.';
            alertPercentage.textContent = '40%';
            alertWindow.classList.remove('alert-danger');
            alertWindow.classList.add('alert-success');
        } else if (inputValue >= 19 && inputValue <= 24 && select.value === "2") {
            result.style.display = 'block';
            alertPercentage.textContent = '20%';
            alertText.textContent = 'Вы подлежите получению скидки';
            alertHr.textContent = 'Чтобы получить скидку может потребоваться документ, подтверждающий ваше отношение к определённой категории граждан.';
            alertWindow.classList.remove('alert-danger');
            alertWindow.classList.add('alert-success');
        } else if (inputValue >= 65 && inputValue <= 100 && select.value === "3") {
            result.style.display = 'block';
            alertPercentage.textContent = '50%';
            alertText.textContent = 'Вы подлежите получению скидки';
            alertHr.textContent = 'Чтобы получить скидку может потребоваться документ, подтверждающий ваше отношение к определённой категории граждан.';
            alertWindow.classList.remove('alert-danger');
            alertWindow.classList.add('alert-success');
        } else {
            result.style.display = 'block';
            alertWindow.classList.remove('alert-success');
            alertWindow.classList.add('alert-danger');
            alertText.textContent = 'Вы не подлежите получению скидки';
            alertPercentage.textContent = '';
            alertHr.textContent = 'К сожалению, введённые вами данные не подходят под условия получения скидки. Если вы ввели неверные данные, то заполните форму ниже повторно.';
            }
    }, 1000);
}


// функция проверки инпута
function emptyInput() {
    let input = document.getElementById('inputAge')
    let inputValue = input.value;
    let button = document.getElementById('btn');
    let invalidHelpText = document.getElementById('invalidHelp');
    let select = document.getElementById('category');
    let selectHelp = document.getElementById('selectHelp')

    if(inputValue === '' || select.value === 0) {
        button.disabled = true;
        input.classList.add('is-invalid');
        select.classList.add('is-invalid');
        invalidHelpText.textContent = 'Введите возраст';
        selectHelp.textContent = 'Выберите категорию';
        return false;
    } else {
        select.classList.remove('is-invalid');
        return true;
    }

}

// функция лоадера
function buttonLoading() {
    let button = document.getElementById('btn');
    let spinner = document.getElementById('spinner')
    let input = document.getElementById('inputAge')
    let inputValue = input.value;

    if (inputValue === '') {
        return; 
    }

    spinner.style.display = 'inline-block';
    button.disabled = true;

    setTimeout(() => {
        spinner.style.display = 'none';
        button.disabled = false;
    }, 1000);

}


// функция проверки возраста
function validateAge(event) {
    let input = event.target;
    let value = input.value;
    let invalidHelpText = document.getElementById('invalidHelp');
    let button = document.getElementById('btn');

    value = value.replace(/\D/g,'');
    value = Math.max(0, Math.min(100, value));
    input.value = value;

    if(value = '' || value < 8 || value >= 100) {
        input.classList.add('is-invalid');
        invalidHelpText.textContent = 'Введите корректный возраст';
        btn.disabled = true;
    } else {
        input.classList.remove('is-invalid')
        btn.disabled = false;
    }
}


// функция отображения полей
function toggleStudentCheckbox() {
    let select = document.getElementById('category');
    let checkboxSchool = document.getElementById('schoolBoxCheckbox');
    let checkboxStudents = document.getElementById('studentBoxCheckbox');
    let checkboxPension = document.getElementById('PensionBoxCheckbox');
    let button = document.getElementById('btn');

    if (select.value === '1') {
        checkboxSchool.style.display = 'block';
        checkboxStudents.style.display = 'none';
        checkboxPension.style.display = 'none';
        btn.disabled = false;

    } else if(select.value === '2') {
        checkboxSchool.style.display = 'none';
        checkboxStudents.style.display = 'block';
        checkboxPension.style.display = 'none';
        btn.disabled = false;
        category.classList.remove('is-invalid');
    } else if(select.value === '3') {
        checkboxSchool.style.display = 'none';
        checkboxStudents.style.display = 'none';
        checkboxPension.style.display = 'block';
        btn.disabled = false;
        category.classList.remove('is-invalid');
    } else {
        checkboxSchool.style.display = 'none';
        checkboxStudents.style.display = 'none';
        checkboxPension.style.display = 'none';
        btn.disabled = true;
        category.classList.add('is-invalid');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let select = document.getElementById('category');
    select.addEventListener('change', toggleStudentCheckbox);
});


function clearResult() {
    document.getElementById("resultWindow").style.display = "none";
}

document.getElementById("inputAge").addEventListener("input", clearResult);
document.getElementById("category").addEventListener("input", clearResult);
