click.onclick = function countRabbits() {
    var gender = ['Чоловік', 'Жінка'];
    var rand = Math.floor(Math.random() * gender.length);  
    var idr = document.getElementById('gender');
    idr.innerHTML = ('Стать: ' +gender[rand]);
  
    var place = ['Київ', 'Львів', 'Харків', 'Одеса', 'Тернопіль', 'Івано-Франківськ'];
    var rand = Math.floor(Math.random() * place.length);
    var idre = document.getElementById('place');
    idre.innerHTML = ('Місто: ' + place[rand]);
  
    var education = ['Вища', 'Професійна', 'Середня'];
    var rand = Math.floor(Math.random() * education.length);
    var idre = document.getElementById('education');
    idre.innerHTML = ('Освіта: ' + education[rand]);
    }