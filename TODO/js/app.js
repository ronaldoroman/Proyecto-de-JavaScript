var today = new Date();
var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', ];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let weekDay = days[today.getDay()];//Dia de la semana [Lunes, martes...]
let monthDay = today.getDate();//Dia del mes[1,2,3,4,5....,30]
let month = today.getMonth(); //Mes
let monthName = months[month];
let year = today.getFullYear();//Año

var fecha = document.getElementById('fecha');
fecha.innerHTML = '${weekDay}, ${monthDay}, {monthName}';

var inputTarea = document.getElementById('inputTarea');
var btnAdd = document.getElementById('btnAdd');
var lista = document.querySelector('.lista');

lista.addEventListener('click',function(){btnDone (event) });
btnAdd.addEventListener('click', function () {addElement(li,inputTarea.value)});

function addElement (lbl, text){
    if (text ==='') {
        return;
    }
    const htmlCode = '<p class="work">${text}</p>'+
                     '<i class= "fa fa-check-circle fa-2x done></i>"'+
                     '<i class= "fa fa-trash fa-2x remove"></li';
    const element= document.createElement(lbl);
    element.innerHTML = htmlCode;

    const lista = document.querySelector('.lista');
    lista.appendChild(element);
    inputTarea.value = '';
}

function btnDone (event){
    let elem = even.target;
    let elementJob = elem.attributes.job.value;
    if (elementJob === 'done'){
        const p = elem.parentNode.firstElementChild;
        p.classList.toggle('workDone');
    }
    else if(elementJob === 'remove'){
        const li = elem.parentNode;
        lista.removeChild(li);
    }
}
