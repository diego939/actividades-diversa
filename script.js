

function ocultar(){
    document.getElementById('demo').style.visibility = "hidden";
    }

    function mostrar(){
        document.getElementById('demo').style.visibility = "visible";
        }
        function inscripcion(){ 
            Swal.fire({
            title: "<strong>Cuando tengamos el formulario de inscripción lo publicaremos aquí</strong>",
            icon: "info",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: `
                <i class=""></i> ok!
            `,
            });
        }

        function copiarCbu(){
            let text = document.getElementById('copyCbu')
            text.select()
            navigator.clipboard.writeText(text.value)
            
            Swal.fire({
                text: 'Copiado El CBU: ' +text.value,
                imageUrl: "img/cuenta.jpeg",
                imageWidth: 500,
                });
        }

        function recordatorio(){
            Swal.fire({
                html: `
                <p style="font-family: 'Anton', sans-serif; font-style: normal;">📚 Buenos días llegó el día gran lanzamiento de nuestra sede para la terminalidad educativa de primaria y secundaria</p>
                                <div class="d-flex justify-content-center mx-auto d-block" style="width: 100%;">
                                    <video controls autoplay class="miVideo2" src="img/finalidadedu2.mp4" poster="img/finalidadedu2.jpeg">Tu navegador no soporta HTML5 </video>
                                </div>
                                <div class="d-grid">
                                    <a href="https://maps.app.goo.gl/uNdKH8UuFR52dtMeA" target="_blank" rel="noopener noreferrer" class="btn btn-success bi-geo-alt m-2">San Juan 1131 (ACDP)</a>
                                    <button class="btn btn-outline-success bi-calendar-check m-2"> 26/04 </button>
                                    <button class="btn btn-outline-success bi-alarm m-2"> 18:00 </button>
                                </div>
                    `,
                imageAlt: "Custom image"
              });
        }
