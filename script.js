const cantidad = document.getElementsByClassName("dropdown-item");

for (var i = 0 ; i < 14; i++) {
    if(cantidad[i]) {
    cantidad[i].addEventListener('click' , (e)=>{
        const valor = e.target.innerHTML;
        console.log("Tarjetas elegidas: "+valor);
        document.getElementById("dropdownMenuButton").style.display='none';

        /* Cambiar tamaño de grid segun numero de tarjetas*/
        const padre = document.getElementById('contenedor');
        switch (valor) {
            case '2':
                padre.style.gridTemplateColumns='repeat(2,1fr)';
                break;
            case '8':
            case '9':
            case '10':  
            case '11':
            case '12': 
            case '13':
            case '14': 
                padre.style.gridTemplateColumns='repeat(4,1fr)';
                break;
            default:
                padre.style.gridTemplateColumns='repeat(3,1fr)';
        }
        
        /* Arrays para crear las posiciones y las imagenes de las tarjetas*/
        var lista = [];
        var arrayImg =[];

        /* Crear cartas*/    
        for (let k=0;k<valor*2;k++) {
            const crearEtiqueta = document.createElement("button");
            crearEtiqueta.textContent=k;
            crearEtiqueta.className='btn btn-dark carta';
            contenedor.appendChild(crearEtiqueta);
            
            /* Posiciones por Numero aleatorio */
            lista.push(k);
            lista = lista.sort(function() {return Math.random() - 0.5});
        }
        /* aleatorio */
        let imagenes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        imagenes = imagenes.sort(function() {return Math.random() - 0.5});
        for (let j=0;j<valor;j++) {
            arrayImg.push(`<img src='img/${imagenes[j]}.png'>`);
            arrayImg.push(`<img src='img/${imagenes[j]}.png'>`);
        }


        /* crear objetos con imagen tipo HTML, posicion y si esta activo o no*/
        var objetos = [];
        for(h=0;h<valor*2;h++) {
            objetos.push({'tarjeta':arrayImg[h],'posicion':lista[h],'activo':true});
        }
        console.log(objetos);

        /* Cambiar imagen de cartas */   
        padre.addEventListener('click',(e)=>{
            var nroTarjeta = e.target.innerHTML;
            e.target.innerHTML=objetos[objetos[nroTarjeta].posicion].tarjeta;
            /*para ocultar*/
            /*AYUDA!!!!*/
            /*No he logrado que la carta se oculte o se elimine despuesde aparecer*/
            /*El error que me sale es que el e.target.innerHTML una vez clickeado cambia a formato imagen y yo he creado un atributo activo para comparar pero no he logrado hacerlo*/
            /*AYUDA!!!!*/
            
            /* e.target.style.visibility = 'hidden'; */
        })

    },false)}
 }


