const btnRes = document.getElementById("btnBuscar").addEventListener('click', function(){
    cargarAjax();
});

const btnLmipiar = document.getElementById("btnLimpiar").addEventListener('click', function(){
    Limpiar();
});



function cargarAjax(){

    const url = "https://jsonplaceholder.typicode.com/users";

    axios
    .get(url)
    .then((res) =>{
        mostrar(res.data);
    }).catch((err)=>{
        console.log("Surgio un error" + err);
    })

    function mostrar(data){

        const inputBuscar = document.getElementById('inputBuscar').value;

        const idSeleccionado = document.getElementById('idSeleccionado');
        idSeleccionado.innerHTML = "";

        for(item of data){

            if(inputBuscar == item.id){

                document.getElementById('inputBuscar').value = "";

                idSeleccionado.innerHTML = "ID: " + item.id;
                document.getElementById('inputNombre').value = item.name;
                document.getElementById('inputNombreUsuario').value = item.username;
                document.getElementById('inputEmail').value = item.email;
                document.getElementById('inputCalle').value = item.address.street;
                document.getElementById('inputNumero').value = item.address.suite;
                document.getElementById('inputCiudad').value = item.address.city;


            return;
            }
        }

    }
}

function Limpiar(){
    location. reload()
}