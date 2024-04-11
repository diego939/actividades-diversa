

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