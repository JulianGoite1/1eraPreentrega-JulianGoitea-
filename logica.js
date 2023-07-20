console.log ("Bienvenidos a Ollie Skate & Surf")

let nombreUsurio = prompt ("Ingrese su Nombre y Apellido para registrarse")

console.log("Hola "+nombreUsurio+" "+"gracias por registrarte a mi tienda online")



const ropa= prompt("¿Que tipo de producto te gustaria comprar?"); //Skate, Oversizes, Accesorios

    
    switch (ropa){
        case "Oversizes":
        
        console.log("5 Oversizes dispobles de Santa Cruz $5999 c/u");
         break;

        case "Skate":

        console.log(" Skate Element Unica Edicion Ilimitada $99.999 c/u");
            break;

        case "Accesorios":

        console.log("8 Gorros disponibles Urban DC $3.999 c/u");
            break;

        default:

        console.log ("Lo siento no tenemos ese tipo de productos");
            break;

    }
    
    const ropa1= prompt("¿Que tipo de producto te gustaria comprar?"); //Skate, Oversizes, Accesorios

    
    switch (ropa1){
        case "Oversizes":
        
        console.log("5 Oversizes disponibles de Santa Cruz $5999 c/u");
         break;

        case "Skate":

        console.log("Skate Element Unica Edicion Ilimitada $99.999 c/u");
            break;

        case "Accesorios":

        console.log("8 Gorros disponibles de Urban DC $3.999 c/u");
            break;

        default:

        console.log ("Lo siento no tenemos ese tipo de productos");
            break;

        }

        const ropa2= prompt("¿Que tipo de producto te gustaria comprar?"); //Skate, Oversizes, Accesorios

    
        switch (ropa2){
            case "Oversizes":
            
            console.log("5 Oversizes disponibles de Santa Cruz $5999 c/u");
             break;
    
            case "Skate":
    
            console.log("Skate Element Unica Edicion Ilimitada $99.999 c/u");
                break;
    
            case "Accesorios":
    
            console.log("8 Gorros disponibles de Urban DC $3.999 c/u");
                break;
    
            default:
    
            console.log ("Lo siento no tenemos ese tipo de productos");
                break;
    
            }

                
            
            for (let i= 0; i < 110000; i++ ) {


                const primerValor = parseInt(prompt("Para calcular su carrito de compras ingrese el primer valor"));
                const segundoValor =parseInt(prompt("Acontinuacion ingrese el segundo valor"));
                const operacion = prompt("Proceda a (sumar, restar o multiplicar)");

                let resultado = 0;

                switch (operacion ){
                    case "sumar":
                        resultado = primerValor + segundoValor;
                        alert ("El subtotal de su carrito es $" + resultado);
                        break;

                    case "restar":
                        resultado = primerValor - segundoValor;
                        alert ("El subtotal de su carrito es $" + resultado);
                        break;

                    case "multiplicar":
                        resultado = primerValor * segundoValor;
                        alert ("El subtotal de su carrito es $" + resultado);
                        break;

                    default:
                        alert ("Ese tipo de cuenta no es posible");
                        break;
                
                    
                    }
                    let comentario = prompt("¿Que te parece el sitio oficial de OLLIE?");
                    alert (comentario = "Gracias por tu comentario te saluda Ollie Skate & Surf");
                    console.log("Puedes dar un vistazo al sitio oficial de Ollie: https://ollieskatesurf.000webhostapp.com/index.html");
                    break;
            }

