var myCarousel = document.querySelector('#carouselMain')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    touch: false,
})
function goToStep(slice){
    carousel.to(slice)
}
function goToStepTrue(slice){
  carousel.to(slice)
  contador++;
  document.querySelector('.contador').innerHTML = 'ACIERTOS: ' + contador; 
}

var num;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;

const ruleta = document.querySelector('#ruleta');
//const contador = document.querySelector('#verdadera');

ruleta.addEventListener('click', girar);
//contador.addEventListener('click', sumando);
giros = 0;
contador = 0;

/*
function sumando(){
  console.log("entre aqui");
  contador++;
}
*/

function girar(){
  if (giros < 3) {
    let rand = Math.random() * 7200;
    calcular(rand);
    num = Math.floor(Math.random() * 2) + 1;
    num2 = Math.floor(Math.random() * 2) + 3;
    num3 = Math.floor(Math.random() * 2) + 5;
    num4 = Math.floor(Math.random() * 2) + 7;
    num5 = Math.floor(Math.random() * 2) + 9;
    num6 = Math.floor(Math.random() * 2) + 11;
    num7 = Math.floor(Math.random() * 12) + 1;
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'https://blog.beautyholics.com/wp-content/ruleta.mp3');
  }else if (contador == 1) {
    Swal.fire({
      icon: 'success',
      title: 'GANASTE $10.000',
      html: 'Tuviste 1 acierto</br>Al momento del pago, ingresa el cupon: <h2><b>COL10BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }
    })
  }else if (contador == 2) {
    Swal.fire({
      icon: 'success',
      title: 'GANASTE $15.000',
      html: 'Tuviste 2 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL15BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }
    })
  }else if (contador == 3) {
    Swal.fire({
      icon: 'success',
      title: 'GANASTE $25.000',
      html: 'Tuviste 3 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL25BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }
    })
  }else if (contador == 0) {
    Swal.fire({
      icon: 'success',
      title: 'GANASTE $5.000',
      html: 'Tuviste 0 acierto</br>Al momento del pago, ingresa el cupon: <h2><b>COL5BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
      }
    })
  }


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
      goToStep(num)
     break;
     case valor > 45 && valor <= 90:
      goToStep(num2)
     break;
     case valor > 90 && valor <= 135:
      goToStep(num7) 
     break; 
     case valor > 135 && valor <= 180:
      goToStep(num3)
     break;
     case valor > 180 && valor <= 225:
      goToStep(num4)
     break; 
     case valor > 225 && valor <= 270:
      goToStep(num5)
     break;
     case valor > 270 && valor <= 315:
      goToStep(num7)
     break;
     case valor > 315 && valor <= 360:
      goToStep(num6)
     break;
  }

 }, 5000);

}
}