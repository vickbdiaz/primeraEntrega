//Sistema de reservas de alojamiento "Los Galeses"

let name = prompt("Ingrese su nombre por favor");
let options = showMenu();
let pax;
let nights;
let finalPrice;

class Room {
    constructor(roomType, price) {
        this.roomType = roomType;
        this.price = price;
        this.info = `La habitación ${this.roomType}, tiene un precio de $${this.price} por noche.`;
    }
}

let singleRoom = new Room("Single", 2500);
let dobleRoom = new Room("Doble", 2800);
let tripleRoom = new Room("Triple", 3200);
let quadRoom = new Room("Cuádruple", 3500);

const rooms =[singleRoom, dobleRoom, tripleRoom, quadRoom];

//Funciones

function showMenu(menu) { // funcion que muestra el menú
    let options = prompt(`Bienvenido/a ${name} al sistema de reservas de la Estancia Los Galeses.
    Elija la operación que desea realizar.
    1. Realizar una reserva.
    2. Ver tarifario de habitaciones.
    3. Ver historial de reserva
    (ESC) para salir.`);
    return options;
}

function selection() { 
    //Switch para navegar el menú
    while ((options === "1" || options === "2") && (options !== "ESC")) {
        switch (options) {
            case "1": 
                pax = prompt("Ingrese la cantidad de huéspedes que desean alojarse");
                while (pax === null || pax > "4" || pax === "0") {
                    alert("Error. La estancia cuenta con habitaciones capaces de alojar hasta 4 personas.");
                    pax = prompt("Ingrese la cantidad de huéspedes");
                }

                switch (pax) {
                //Switch para realizar reserva
                    case "1":
                        nights = parseInt(prompt("Ingrese la cantidad de noches que desea alojarse"));
                        let confirmation = prompt(`Le recomendamos:\n ${singleRoom.info}\n ¿Desea reservar esta habitación?\n1.Si\n2.No`);
                        if (confirmation === "1") {
                            finalPrice = singleRoom.price * nights;
                            alert(`Has reservado la Habitación Single por ${nights} noches,\n Su precio final es de $${finalPrice}`);
                            options = showMenu();
                        } else {
                            alert("Se ha interrumpido la reserva");
                            options = showMenu();
                        }
                        break;
                        
                    case "2":
                        nights = parseInt(prompt("Ingrese la cantidad de noches que desea alojarse"));
                        let confirmation2 = prompt(`Le recomendamos:\n ${dobleRoom.info}\n ¿Desea reservar esta habitación?\n1.Si\n2.No`);
                        if (confirmation2 === "1") {
                            finalPrice = dobleRoom.price * nights;
                            alert(`Has reservado la Habitación Single por ${nights} noches,\n Su precio final es de $${finalPrice}`);
                            options = showMenu();
                        } else {
                            alert("Se ha interrumpido la reserva");
                            options = showMenu();
                        }
                        break;

                    case "3":
                        nights = parseInt(prompt("Ingrese la cantidad de noches que desea alojarse"));
                        let confirmation3 = prompt(`Le recomendamos:\n ${tripleRoom.info}\n ¿Desea reservar esta habitación?\n1.Si\n2.No`);
                        if (confirmation3 === "1") {
                            finalPrice = tripleRoom.price * nights;
                            alert(`Has reservado la Habitación Triple por ${nights} noches,\n Su precio final es de $${finalPrice}`);
                            options = showMenu();
                        } else {
                            alert("Se ha interrumpido la reserva");
                            options = showMenu();
                        }
                        break;

                    case "4":
                        nights = parseInt(prompt("Ingrese la cantidad de noches que desea alojarse"));
                        let confirmation4 = prompt(`Le recomendamos:\n ${quadRoom.info}\n ¿Desea reservar esta habitación?\n1.Si\n2.No`)
                        if (confirmation4 === "1") {
                            finalPrice = quadRoom.price * nights;
                            alert(`Has reservado la Habitación Cuádruple por ${nights} noches,\n Su precio final es de $${finalPrice}`);
                            options = showMenu();
                        } else {
                            alert("Se ha interrumpido la reserva");
                            options = showMenu();
                        }
                        break;

                    default:
                        alert("No has elegido una opción válida.");
                        options = showMenu();
                        break;
                }
                break;

            case "2":
                rooms.forEach((element) => {
                    alert(element.info);
                });
                options = showMenu();
                break;

            default:
                alert("No has elegido una opción válida.");
                options = showMenu();
                break;
        }
    }

    if (options === "ESC") {
        alert("Gracias por utilizar nuestro sistema de reservas de Estancia Los Galeses. ");
    } else {
        alert("No has elegido un valor permitido en el menú. Serás redirigido.");
        options = showMenu();
        selection();
    }
}

selection();