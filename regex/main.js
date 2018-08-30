// THEORIE REGEX//

/*

var test_regex = /pomme/;             // sensible à la casse
var test_regex1 = /pomme/i;             // Insensible à la casse grace à /i

var resultat = test_regex.test('Texte qui contient peut-être le mot à chercher... ou Pomme... eu ou pas');
var resultat1 = test_regex1.test('Texte qui contient peut-être le mot à chercher... ou Pomme... eu ou pas');

console.log(resultat);
console.log(resultat1);

// ^texte_a_chercher  => au début
// texte_a_chercher$  => au début

var test_regex2 = /^pomme/;             // sensible à la casse
var test_regex3 = /pomme$/;             // Insensible à la casse grace à /i

var resultat2 = test_regex2.test('pomme : Texte qui contient peut-être le mot à chercher... ou omme... eu ou pas');
var resultat3 = test_regex3.test('Texte qui contient peut-être le mot à chercher... eu ou pas');

console.log(resultat2);
console.log(resultat3);

// [mp]ère   => recherche pere ou mere

var test_regex4 = /[mp]ère/

var resultat4 = test_regex4.test('Papa ou mère');
console.log(resultat4);

var test_regex5 = /[a-z][0-9]/    //Sensible à la casse car pas de i

var result5 = test_regex5.test('L\'ami des jeunes, c\'est R2d2');
console.log(result5);

//[a-z][^0-9][a-z] recherche d'une lettre suivit de pas un chiffre et d'une lettre
// . represente n'importe quel caractère

//Quantificateur (logique qualitatif)
// ? une fois max
// + une ou plusieurs fois
// * zero ou plusieurs fois

//Quantificateur quantitatif
//{3} exactement 3 caractères
// {2,4} de 2 à 4 caractères
// {2,} à partir de deux caractères

// raccourci : \d = [0,9]
//             \D = [^0,9]
//             \s = espace   et \S = tout sauf un espace
//             \w = lettre, _ et \W = tout sauf lettre et underscore
//             \n = saut de ligne
//             \t = tabulation


// méthode .test, c'est cool mais .exec retourne le texte trouvé


var regex6 = /\w{5,30}@\w{2,10}\.\w{1,4}/   //adresse mail

var result = regex6.exec('Mon adresse mail est flibidi@isl.be');
console.log(result);

*/

//Exercice 1 :
/*
Donner l'expression régulière permettant d'extraire d'une chaine de caractères tous les nombres entiers.
*/
/*
var regex = /([-\s][0-9]+)[^,]/g;

var ma_ch = 'Nous le 24 ou le 11 janvier 2018 ? La température est de 1,2 ou bien -3,5 ou encore -2';

var result = ma_ch.match(regex);
console.log(result);
*/

//Exercice 2 :
/*
Donner l'expression régulière permettant d'extraire d'une chaine de caractères tous les nombres.
*/

//var regex = /[-\s][0-9]+,*[0-9]*/g;

//var ma_ch = '21 est multiple de 7 et 8000 est multiple de 100. Il n\'est pas envisageable d\'avoir 10,24 de moyenne sachant que la majorité de la classe est au dessus de 52,74 enfin ce n\'est pas comme si tu avais obtenu -0,24';

//var result = ma_ch.match(regex);
//console.log(result);

//Exercice 3 :
/*
Donner l'expression régulière permettant d'extraire d'une chaine de caractères tous les numeros de téléphone belges.
*/
/*
var regex = /0032[1-9]{2}\/[0-9]{6}/g;

var ma_ch = 'les numéro relevé sont les suivants : 003288/458523, 003377/458523 mais aussi 003294/454123 et le 003243/499663 ou encore le 003274/963963 et 003387/001123';
var result = ma_ch.match(regex);
console.log(result);
*/

//Exercice 4 :
/*
Donner l'expression régulière permettant d'extraire d'une chaine de caractères tous les adresses mails.
*/


/*
var regex =  /\w{5,30}@\w{2,10}\.\w{1,4}/g  //adresse mail
var chaine = 'Mon adresse mail est flibidi@isl.be mais celle de mon voisin est jusepe154@rhonalpe.fr';
var result = chaine.match(regex);
console.log(typeof result);
console.log(result);
*/

//Exercice 4 :
/*
Donner l'expression régulière permettant d'extraire tous les mots commençant par une majuscule.
*/

var regex = /[A-Z]/g;
var chaine = 'Cette phraSe contient Des majUScules mal Placée afin de vérifier la Regex';
var result = chaine.match(regex);
console.log(result);



























