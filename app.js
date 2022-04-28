
//načti recepty
showAllRecipe();

// a pokud je něco v local storage, tak i ten poslední recept
if (localStorage.length !== 0 ){
    showLastRecipe();
};


// funkce, která vytvoří HTML prvky jednoho receptu (na základě indexu v poli)
function recipe(index) {

    let viewPicture = document.createElement('div');
    viewPicture.className = 'recept-obrazek';
	let picture = document.createElement('img');
	picture.src = recepty[index].img;
    viewPicture.appendChild(picture);

    let viewTitle = document.createElement('div');
    viewTitle.className = 'recept-info';
    let title = document.createElement('h3');
    title.innerHTML = recepty[index].nadpis;
    viewTitle.appendChild(title);

    let createRecipe = document.createElement('div');
    createRecipe.className = 'recept';
    createRecipe.setAttribute('data-vyber',[index]);
    //přidá každému vytvořenému receptu klikatelnost, která spustí funkci zobrazení detailu
    createRecipe.addEventListener('click', () => {
		changeRecipeDetails(index);
	});

    createRecipe.appendChild(viewPicture);
    createRecipe.appendChild(viewTitle);
    document.querySelector('.recepty').appendChild(createRecipe);
}

// funkce pro vygenerování seznamu receptů z databáze do prvku id="recepty"
function showAllRecipe(){
    for(let i = 0; i < recepty.length; i++) {
		recipe(i); 
        };     
}


//FILTROVÁNÍ
//Při kliknutí na tlačítko Hledat seznam receptů vyfiltrovat podle hledaného slova

document.querySelector('#hledat').onkeypress = searchRecipe 

function searchRecipe(){
    

    //porovnej input s tím,co je v recepty.nadpis a vyfiltruj to

}


//funkce na vyčištění seznamu receptů
function clearRecipe(){
    document.getElementById('recepty').innerHTML=''
}

// filtrovanání receptů podle kategorie
document.querySelector('#kategorie').onchange = sorting 

function sorting() {
    let jidlo = document.getElementById("kategorie");
    clearRecipe();
    
    if (jidlo.value ==="Snídaně"){ 
     recepty.filter(breakfast)
    }
    else if (jidlo.value === "Dezert"){
        recepty.filter(dessert)
    }
    else if (jidlo.value === "Hlavní jídlo"){
        recepty.filter(lunch)
    }
}  

function breakfast(kateg){
    let poradi = recepty.indexOf(kateg)
   
    if (kateg.kategorie === "Snídaně"){
       recipe(poradi); 
    }
}

function dessert(kateg){
    let poradi = recepty.indexOf(kateg)
   
    if (kateg.kategorie === "Dezert"){
       recipe(poradi); 
    }
}

function lunch(kateg){
    let poradi = recepty.indexOf(kateg)
   
    if (kateg.kategorie === "Hlavní jidlo"){
       recipe(poradi); 
    }
}


//řazení receptů podle hodnocení 
document.querySelector('#razeni').onchange = evaluateRecipe 


function evaluateRecipe(){
    clearRecipe()
    let jidlo = document.getElementById("razeni");
    if (jidlo.value == 1){ 
        showAllRecipe(recepty.sort(best))
         //POZOR - BUG - když kliknu na ten sorted recept, tak se mi příště načte jiný!prohozené indexy...
    } else {
        showAllRecipe(recepty.sort(worst))
        
    }
}

function best(rec1, rec2){
    if (rec1.hodnoceni<rec2.hodnoceni){
        return 1;
    } else {
        return -1;
    }
}

function worst(rec1, rec2){
if (rec1.hodnoceni>rec2.hodnoceni){
return 1;
    } else {
return -1;
}

}

//DETAIL
//funkce měnící detail receptu podle toho, na co se kliklo 
function changeRecipeDetails(index){
    let myChoice = index;
    //uložení výběru do local storage
       
    localStorage.myChoice = JSON.stringify(myChoice);
    changeRecipe(myChoice);
}

//funkce tvorby detailu
function changeRecipe(index){  
    document.querySelector('#recept-foto').src= recepty[index].img;
    document.querySelector('#recept-kategorie').innerHTML= recepty[index].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML= recepty[index].hodnoceni;
    document.querySelector('#recept-nazev').innerHTML= recepty[index].nadpis;
    document.querySelector('#recept-popis').innerHTML= recepty[index].popis;
}

//funkce pro zobrazení posledníhi receptu
function showLastRecipe(){
let lastChoice = localStorage.myChoice;

if(!(lastChoice === null || lastChoice === undefined)) {
     myChoice = JSON.parse(lastChoice);
}
changeRecipe(myChoice);
}

