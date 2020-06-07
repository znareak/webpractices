var objet = {
    prop1 : 'prop1',
    prop2 : 'prop2',
    *[Symbol.iterator](){
        var i, values;
        i = 0;
        values = Object.values(this);
        while(i < values.length){
            yield values[i];
            i++;
        }
    }
}


for(var item of objet){
    console.log(item)
}