let birthdate = document.getElementById('birthdate');
let btn = document.querySelector('.btn');
let message = document.querySelector('.message');
let text = document.querySelector('.text');
let counter = document.querySelector('.counter');
let days = document.querySelector('.days');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() +1 ;
let currentDay = new Date().getDate();


document.addEventListener('DOMContentLoaded', function() {
    birthdate.min = `${currentYear}-01-01`;
    birthdate.max = `${currentYear}-12-31`;
}); 




btn.addEventListener('click', function(){
    let userDate = birthdate.value;
    
    let userDay = new Date(userDate).getDate();
    let userMonth = new Date(userDate).getMonth()+1;

    if(userMonth<currentMonth) {
        message.textContent = 'У вас уже был день рождения в этом году';
        text.style.display = 'none';
    } else if(userMonth===currentMonth && userDay<currentDay) {
        message.textContent = 'У вас уже был день рождения в этом году';
        text.style.display = 'none';
    } else if(userMonth===currentMonth && userDay===currentDay){
        message.textContent = 'У вас сегодня день рождения! Поздравляем!';
        text.style.display = 'none';
    } else if(!userDay) {
        message.textContent = 'Укажите дату вашего рождения';
        text.style.display = 'none';
    } else {
        message.textContent = '';
        text.style.display = 'block';

      
    let daysDiff = userDay - currentDay;
    counter.textContent = daysDiff;

        if (daysDiff % 10 === 1 && daysDiff % 100 !== 11) {
            days.textContent= ' день';
        } else if ([2, 3, 4].includes(daysDiff % 10) && ![12, 13, 14].includes(daysDiff % 100)) {
            days.textContent=' дня';
        } else {
            days.textContent=' дней';
        }
    

    }
});

