/*
    Funciones que permite transform estructuras de datos de un tipo a otro tipo
    author: znareak
*/
function objectToArray(object = { }){
    let props = [];
    for(let prop in object){
        props.push(
            [prop, object[prop] ]
        );
    }
    return props;
}
function objectToMap(object = { }){
    let mapa = new Map();
    for(let prop in object){
        mapa.set(prop, object[prop])
    }
    return mapa;
}

function objectToSet(object = { }){
    let conjunto = new Set();
    for(let prop in object){
        conjunto.add({
            prop,
            value : object[prop]
        })
    }
    return conjunto;
}

// ejemplo
objectToSet({
    name : "libardo",
    age : 18,
    country : "venezuela"
})

