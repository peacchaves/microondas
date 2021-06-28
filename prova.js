//import microondas

const micro = require('./modulos/modProva.js');

function aquecer(a,alimento){
    let resultado;

    if (alimento == 'pipoca'){
        resultado = micro.pipoca(a);
    }

    else if (alimento == 'macarrao'){
        resultado = micro.macarrao(a);
    }

    else if (alimento == 'carne'){
        resultado = micro.carne(a);
    }

    else if (alimento == 'feijao'){
        resultado = micro.feijao(a);
    }

    else if (alimento == 'brigadeiro'){
        resultado = micro.brigadeiro(a);
    }

    else{
        resultado = 'Prato inexistente.'
    }

    console.log(resultado);
}

aquecer(15,'pipoca');
aquecer(15,'macarrao');
aquecer(15,'carne');
aquecer(15,'feijao');
aquecer(15,'brigadeiro');
aquecer(15,'miojao');