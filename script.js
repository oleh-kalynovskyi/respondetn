$('#click').click(function() {
    var gender = ['Чоловік', 'Жінка'];
    var rand = Math.floor(Math.random() * gender.length);  
    var idr = document.getElementById('gender');
    idr.innerHTML = ('Стать: ' + gender[rand]);
  
    var place = ['Київ', 'Львів', 'Харків', 'Одеса', 'Тернопіль', 'Івано-Франківськ'];
    var rand = Math.floor(Math.random() * place.length);
    var idr = document.getElementById('place');
    idr.innerHTML = ('Місто: ' + place[rand]);

    var back = ['Донецьк', 'Луганськ', 'Нема відповіді'];
    var rand = Math.floor(Math.random() * back.length);
    var idr = document.getElementById('back');
    idr.innerHTML = ('Місто: ' + back[rand]);

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
    
    var status = ['Так', 'Ні', 'Не знаю'];
    var rand = Math.floor(Math.random() * status.length);
    var idr = document.getElementById('status'); 
    idr.innerHTML = ('Справка переселенця: ' + status[rand]);
        
    var job = ['Медицина', 'Державна служба', 'С\г', 'Військова служба', 'Шукаю руботу', 'пенсія'];
    var rand = Math.floor(Math.random() * job.length);
    var idr = document.getElementById('job'); 
    idr.innerHTML = ('Місце роботи: ' + job[rand]);

    var whyChooseThisPlace = ['Близько живуть родичі', 'Випадково'];
    var rand = Math.floor(Math.random() * whyChooseThisPlace.length);
    var idr = document.getElementById('whyChooseThisPlace'); 
    idr.innerHTML = ('Чому вибрали саме це місто/село: ' + whyChooseThisPlace[rand]);

    var backToNGCA = ['Так', 'Ні'];
    var rand = Math.floor(Math.random() * backToNGCA.length);
    var idr = document.getElementById('backToNGCA'); 
    idr.innerHTML = ('Чи повертались на NGCA: ' + backToNGCA[rand]);
});
