//Criar uma function que contenha os seguintes parametros
// * Array em que vamos procurar;
// * Posição do primeiro número;
// * Posição do último número;
// * número que queremos encontrar dentro da array;
function buscaBinaria (array, comeco, fim, busca) {
// Caso o número que estamos procurando não esteja na array, vai retornar -1
    if(comeco > fim) {
        return -1;
    }

// Vai pegar o número que está no centro do array
    const meio = Math.floor((comeco + fim) /2);
    
// Caso o número no centro do array seja o mesmo que estamos buscando, vai retornar a localização dele.
    if(array[meio] === busca){
        return meio
    }

// Vai analisar se o valor do número do meio é o mesmo que estamos buscando. se o valor que estamos buscando é menor que o meio, então vamos procurar do começo para o meio
    if(array[meio] > busca){
        return buscaBinaria(array, comeco, meio -1, busca)
    }
// Se o valor que estamos buscando não é menor e nem igual ao meio, então certamente ele é maior. Vamos procurar do meio para o final
    else {
        return buscaBinaria(array, meio +1 , fim, busca)
    }
}

const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100.];

//Vai nos dizer a posição do número dentro do array
console.log(buscaBinaria(teste, 0, teste.length-1, 1020));