function isvalidCar() {

    var cardNumber = prompt(" escribe el numero de tarjeta");

    while (cardNumber === "") {
        carNumber = prompt(" Ecribe un numero");

    }
    var array = [];
    for (var i = 0; i < cardNumber.length; i++) {
        array.push(parseInt(cardNumber[i].split("")));
    }
    var newArray = array.reverse();

    for (var j = 0; j < newArray.length; j++) {
        if (j % 2 === 1) {
            var duplicado = newArray[j] * 2;

            newArray[j] = parseInt(duplicado / 10) + (duplicado % 10);

        }
    }
    var SumArr = 0;
    for (var h = 0; h < newArray.length; h++) {
        SumArr += newArray[h];
    }
    if (SumArr % 10 === 0) {
        alert( "tarjeta Valida");
    } else {
        alert(" tarjeta  no valida")
    }

}

isvalidCar();
