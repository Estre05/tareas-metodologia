"Use strict";

let table = {
    type:"madera", //tipo
    size:"mediano", //tamaño
    color:"gris", //color
    capacity:"grande", //capacidad 
    adress:{
        house:"CD uncovia", 
        houseNumber: 1-173
    }
}

//aceder a las propiedades del objeto es con un punto [.]
alert ("El tipo es: " + table.type);
alert ("El tamaño es: " + table.size);
alert ("El color es: " + table.color);
alert ("La capcidad es: " + table.capacity);
alert ("Casa: " + table.adress.house);
alert ("Numero de casa: " + table.adress.houseNumber);

