var myCarousel = document.querySelector('#carouselMain')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    touch: false,
})
function popError(slice){
  Swal.fire({
    icon: 'error',
    title: 'Sigue intentando',
    confirmButtonColor: '#f1b7ff',
    confirmButtonText: 'Seguir jugando'
  })
}
function goToStep(slice){
    carousel.to(slice)
}
function goToStepTrue(slice){
  Swal.fire({
    icon: 'success',
    title: '¡Qué bien!',
    confirmButtonColor: '#f1b7ff',
    confirmButtonText: 'Seguir jugando'
  })
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
  if (giros < 5) {
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'files/ruleta.mp3');
    let rand = Math.random() * 7200;
    calcular(rand);
    /*if (ancho < 768){
      num = Math.floor(Math.random() * 4) + 25;
      num2 = Math.floor(Math.random() * 4) + 29;
      num3 = Math.floor(Math.random() * 4) + 33;
      num4 = Math.floor(Math.random() * 4) + 37;
      num5 = Math.floor(Math.random() * 4) + 41;
      num6 = Math.floor(Math.random() * 4) + 45;
      num7 = Math.floor(Math.random() * 24) + 25;
    }else{*/
      num = Math.floor(Math.random() * 4) + 1;
      num2 = Math.floor(Math.random() * 4) + 5;
      num3 = Math.floor(Math.random() * 4) + 9;
      num4 = Math.floor(Math.random() * 4) + 13;
      num5 = Math.floor(Math.random() * 4) + 17;
      num6 = Math.floor(Math.random() * 4) + 21;
      num7 = Math.floor(Math.random() * 24) + 1;
    /*}*/
    giros++;    
  }else if (contador == 0) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $5.000',
      html: 'Tuviste 0 acierto</br>Al momento del pago, ingresa el cupon: <h2><b>COL5BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-10mil-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-10mil-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTYCOL5')        
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
     }
    })
  }else if (contador == 1) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $10.000',
      html: 'Tuviste 1 acierto</br>Al momento del pago, ingresa el cupon: <h2><b>COL10BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-10mil-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-10mil-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTYCOL10')
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
      }
    })
  }else if (contador == 2) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $15.000',
      html: 'Tuviste 2 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL15BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-envio-gratis-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-envio-gratis-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTYWIN')
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
      }
    })
  }else if (contador == 3) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $25.000',
      html: 'Tuviste 3 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL25BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-15mil-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-15mil-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTYCOL15')
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
      }
    })
  }else if (contador = 4) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $25.000',
      html: 'Tuviste 3 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL25BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-15extra-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-15extra-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTY15')
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
      }
    })
  }else if (contador = 5) {
    Swal.fire({
      /*icon: 'success',
      title: 'GANASTE $25.000',
      html: 'Tuviste 3 aciertos</br>Al momento del pago, ingresa el cupon: <h2><b>COL25BH</b></h2>',
      confirmButtonColor: '#f1b7ff',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText: 'Intentar de nuevo',
      allowOutsideClick: false*/
      html: 
      '<picture><source srcset="imagenes/cupon-15extra-mobile.jpg" media="(max-width: 768px)" /><img src="imagenes/cupon-15extra-desktop.jpg" alt="fondo desk" class="img-fluid" /></picture>',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#fb8db9',
      cancelButtonColor: '#f1b7ff',
      confirmButtonText:'Intentar de nuevo',
      cancelButtonText:'Copiar cupón'
    }).then((result)=>{
      if (result.value == true) {
        giros = 0; 
        contador = 0;
        document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
      }else if(result.dismiss == 'cancel'){
        navigator.clipboard.writeText('BEAUTY15')
        .then(() => {
          Swal.fire('Cupón copiado!', '', 'success');
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err)
        })
      }
    })
  }


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  console.log(valor);
  

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-08.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-08.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction10')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
     case valor > 45 && valor <= 90:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-06.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-06.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('predictionfree')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
     case valor > 90 && valor <= 135:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-01.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-01.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction10')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      }) 
     break; 
     case valor > 135 && valor <= 180:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-04.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-04.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction8mil')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
     case valor > 180 && valor <= 225:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-02.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-02.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction5mil')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break; 
     case valor > 225 && valor <= 270:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-05.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-05.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction8mil')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
     case valor > 270 && valor <= 315:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-03.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-03.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction5mil')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
     case valor > 315 && valor <= 360:
      Swal.fire({
        html: 
        '<picture><source srcset="imagenes/MOB-CUPON-07.jpg" media="(max-width: 768px)" /><img src="imagenes/DESK-CUPON-07.jpg" alt="fondo desk" class="img-fluid" /></picture>',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#fb8db9',
        cancelButtonColor: '#f1b7ff',
        confirmButtonText:'Intentar de nuevo',
        cancelButtonText:'Copiar cupón'
      }).then((result)=>{
        if (result.value == true) {
          giros = 0; 
          contador = 0;
          document.querySelector('.contador').innerHTML = 'ACIERTOS: 0';
        }else if(result.dismiss == 'cancel'){
          navigator.clipboard.writeText('prediction5mil')
          .then(() => {
            Swal.fire('Cupón copiado!', '', 'success');
            giros = 0; 
            contador = 0;
            document.querySelector('.contador').innerHTML = 'ACIERTOS: 0'; 
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        }
      })
     break;
  }

 }, 5000);

}
}