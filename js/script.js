var elForm = document.querySelector(".form");
var elinput = document.querySelector(".form-input");

var elResultTranslation = document.querySelector(".result-translation");

var elDayForm = "";
var elMonday = "Dushanba";
var elTuesday = "Seshanba";
var elWednesday = "Chorshanba";
var elThursday = "Payshanba";
var elFriday = "Juma";
var elSaturday = "Shanba";
var elSunday = "Yakshanba";

elForm.addEventListener("submit",function(evt){
     evt.preventDefault();

if(elinput.value <= elDayForm) {
  elResultTranslation.textContent = "введите нужный день";
} else if (elinput.value > 0 || elinput.value < 0) {
  elResultTranslation.textContent = "не вводите номер";
} else if (elinput.value == elMonday) {
  elResultTranslation.textContent = "Понедельник";
} else if (elinput.value == elTuesday) {
  elResultTranslation.textContent = "Вторник";
} else if (elinput.value == elWednesday) {
  elResultTranslation.textContent = "Среда";
} else if (elinput.value == elThursday) {
  elResultTranslation.textContent = "Четверг";
} else if (elinput.value == elFriday) {
  elResultTranslation.textContent = "Пятнца";
} else if (elinput.value == elSaturday) {
  elResultTranslation.textContent = "Суббота";
} else if (elinput.value == elSunday) {
  elResultTranslation.textContent = "Воскресенье";
} else {
  elResultTranslation.textContent = "Извините, такое слово не найдено"
}


})