//export microondas

exports.pipoca=(a)=>{
    if (a>=20 && a<30){
        return 'Sua comida queimou.';
    }

    else if (a<10 && a>0){
        return 'Tempo insuficiente.';
    }

    else if (a>=30){
        return 'Kabumm!';
    }

    else if (a>=10 && a<20){
        return 'Prato pronto, bom apetite!!!'
    }

    else{
        return 'Erro na matrix, corrija os parâmetros.'
    }
}

exports.macarrao=(a)=>{
    if (a>=16 && a<24){
        return 'Sua comida queimou.';
    }

    else if (a<8 && a>0){
        return 'Tempo insuficiente.';
    }

    else if (a>=24){
        return 'Kabumm!';
    }

    else if (a>=8 && a<16){
        return 'Prato pronto, bom apetite!!!'
    }

    else{
        return 'Erro na matrix, corrija os parâmetros.'
    }
}

exports.carne=(a)=>{
    if (a>=30 && a<45){
        return 'Sua comida queimou.';
    }

    else if (a<15 && a>0){
        return 'Tempo insuficiente.';
    }

    else if (a>=45){
        return 'Kabumm!';
    }

    else if (a>=15 && a<30){
        return 'Prato pronto, bom apetite!!!'
    }

    else{
        return 'Erro na matrix, corrija os parâmetros.'
    }
}

exports.feijao=(a)=>{
    if (a>=24 && a<36){
        return 'Sua comida queimou.';
    }

    else if (a<12 && a>0){
        return 'Tempo insuficiente.';
    }

    else if (a>=36){
        return 'Kabumm!';
    }

    else if (a>=12 && a<24){
        return 'Prato pronto, bom apetite!!!'
    }

    else{
        return 'Erro na matrix, corrija os parâmetros.'
    }
}

exports.brigadeiro=(a)=>{
    if (a>=16 && a<24){
        return 'Sua comida queimou.';
    }

    else if (a<8 && a>0){
        return 'Tempo insuficiente.';
    }

    else if (a>=24){
        return 'Kabumm!';
    }

    else if (a>=8 && a<16){
        return 'Prato pronto, bom apetite!!!'
    }

    else{
        return 'Erro na matrix, corrija os parâmetros.'
    }
}