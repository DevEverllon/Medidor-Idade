/*function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    //VALIDAÇÃO DOS DADOS:
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Varifiqy=ue os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menino.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            }else if (idade < 99){
                //Idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }else{
                //Mumia
                img.setAttribute('src', 'mumia.jpg')
            }


        } else if (fsex[1].checked){
            genero = 'Mulher'
        
            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >=0 && idade < 10){
                    //criança
                } else if(idade < 21){
                    //Jovem
                } else if (idade < 50){
                    //Adulto
                }else if (idade < 99){
                    //Idoso
                }else{
                    //Mumia
                }
        }

        //res.computedStyleMap.textAline = 'center'
        //res.innerHTML = `Detequitamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    }
}*/

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.querySelector('input#txtano');
    var res = window.document.querySelector('div#res');

    // VALIDAÇÃO DOS DADOS:
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade < 10) {
                img.setAttribute('src', 'imagens/bebe-menino.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-homem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-homem.jpg');
            } else if (idade < 99) {
                img.setAttribute('src', 'imagens/idoso-homem.jpg');
            } else {
                img.setAttribute('src', 'imagens/mumia.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade < 10) {
                img.setAttribute('src', 'imagens/bebe-menina.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta-mulher.jpg');
            } else if (idade < 99) {
                img.setAttribute('src', 'imagens/idosa-mulher.jpg');
            } else {
                img.setAttribute('src', 'imagens/mumia.jpg');
            }
        }

        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
