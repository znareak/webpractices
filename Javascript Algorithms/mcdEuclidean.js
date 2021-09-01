function McdEuclides(a, b){
    a = Math.abs(a);
    b = Math.abs(b);
    aux = b;

    while(b != 0 && a % b != 0){
        aux = b
        b = a % b;
        a = aux;
    }

    return (b == 0 ? a : b);//return a || b;
}


console.log(McdEuclides(450, 360));