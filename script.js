

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