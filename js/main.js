

function solicitarNombre() {
    alert("Bienvenido/a a nuestra tienda de consolas")
    let nombre = prompt("dejanos tu nombre por favor ");
    while(nombre === ""){
    nombre = prompt("dejanos tu nombre por favor");
    }
}

function mostrarProductos(){
let producto;
do{
producto = parseInt(prompt("Estas son nuestras OFERTAS : \n1)Play station\n2)Xbox360\n3)Nintendo\n4)Psp Portatil\n5)Pc Gamer "))}while(producto != 1 && producto!=2 && producto!=3
    && producto!=4 && producto!=5)

switch(producto){
    case 1:
        return "Play station";
    case 2:
        return "Xbox360";
    case 3:
        return "Nintendo";
    case 4 :
        return "Psp Portatil";
    case 5 :
        return "Pc Gamer";
}

}

function validarPrecio(producto){

    if(producto==="Play station"){
        return 17922;
    }

    else if(producto==="Xbox360"){
        return 23674;
    }
    else if(producto==="Nintendo"){
        return 9848;
    }
    else if (producto=== "Psp Portatil"){
        return 12500
    }
    else if(producto==="Pc Gamer"){
        return 47985
    }
       
}

function cobrar(nombre,precio){
alert("estas llevando esta consola : "+nombre+"\nPrecio: $"+precio);
let pago = parseInt(prompt("con cuanto vas abonar el producto?"))
if(pago> precio){
    alert("Gracias por tu compra! Tu vuelto es "+ (pago - precio))
}else{
    alert("No te alcanza para comprar la consola solicitada ! ")
}
}

solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre,precioProducto);
