click.onclick = function() {
    var gender = ['Чоловік', 'Жінка'];
    var rand = Math.floor(Math.random() * gender.length);  
    var idr = document.getElementById('gender');
    idr.innerHTML = ('Стать: ' + gender[rand]);
  
    var place = ['Київ', 'Львів', 'Харків', 'Одеса', 'Тернопіль', 'Івано-Франківськ'];
    var rand = Math.floor(Math.random() * place.length);
    var idr = document.getElementById('place');
    idr.innerHTML = ('Місто: ' + place[rand]);

    var family = ['Розлучений/на', 'Одружений/на', 'вдова/вдівець'];
    var rand = Math.floor(Math.random() * family.length);  
    var idr = document.getElementById('family');
    idr.innerHTML = ('Сімейний стан: ' + family[rand]);
  
    var education = ['Вища', 'Професійна', 'Середня'];
    var rand = Math.floor(Math.random() * education.length);
    var idr = document.getElementById('education');
    idr.innerHTML = ('Освіта: ' + education[rand]);
        
    function randomInteger(min, max) {
        // let rand = min - 0 + Math.random() * (max - min + 0);
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
        var idr = document.getElementById('ege');
        idr.innerHTML = ( 'Вік: ' + randomInteger(23, 80) );
    
    var back = ['Донецьк', 'Луганськ'];
    var rand = Math.floor(Math.random() * back.length);
    var idr = document.getElementById('back');
    idr.innerHTML = ('Попереднє місце: ' + back[rand]);
        
    }
