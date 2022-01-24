let Contacts = function() {
    this.info = function(){
        this.fio = prompt('Введите Ваше ФИО');
        this.age = +prompt('Введите Ваш возраст');
        this.phone = prompt('Введите Ваш номер телефона в формате +375(**)***-**-**');
        this.email = prompt('Введите Вашу эл. почту');

        this.checkAge();
    }
    this.checkAge = function(){
        if (this.age >= 18) {
            alert('Доступ разрешен')
        } else {
            alert('Доступ запрещен')
        }

        this.show();
    }
    this.show = function(){
        document.write('ФИО: ' + this.fio + `<br>` + `Возраст: ` + this.age + `<br>` + `Телефон: ` + this.phone + `<br>` + 'Эл. Почта: ' + this.email + `<br>`);
    }   
}

let user = new Contacts(),
    user2 = new Contacts(),
    user3 = new Contacts();

user.info();
user2.info();
user3.info();

let Followers = function() {
    Contacts.apply(this);

    this.checkAge = function (){
        if (this.age >= 18) {
            alert('Здравствуйте!')
        } else {
            alert('Привет, друг!')
        }

        this.show();
        this.checkPhone();
    }

    this.checkPhone = function(){
        let regex = /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/;

        if(regex.test(this.phone) == false) {
            alert('Номер телефона введен неверно')
        }
    }
}

let follower = new Followers;

follower.info();



let Constr = function () {
    this.create = function(elem){
        let res = document.createElement(elem);
        return res;
    }

    this.attr = function(elem, name, value){
        let newAttr = document.createAttribute(name);
        newAttr.value = value;
        elem.setAttribute(newAttr);

        return value;
    }

    this.html = function(elem, value) {
        elem.innerHTML = value;

        return value;
    }

    this.search = function(elem, selector) {
        elem = document.querySelector(selector);

        return elem;
    }

    this.addClass = function(elem, className) {
        elem.classList.add(className);
    }

    this.removeClass = function(elem, className) {
        elem.classList.remove(className);
    }

    this.toggleClass = function(elem, className){
        elem.classList.toggle(className);   
    }

    this.append = function(elem, newElem){
        elem.append(newElem)
    }

    this.on = function(elem, eventName, funcName){
        if(this && eventName){
        elem.addEventListener(eventName, funcName)
        }
    }
}