
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
    picture.setAttribute('data-vyber',[index]);
	picture.src = recepty[index].img;
    viewPicture.appendChild(picture);
    document.querySelector('.recepty').appendChild(viewPicture);

    let viewTitle = document.createElement('div');
    viewTitle.className = 'recept-info';
    viewTitle.setAttribute('data-vyber',[index]);
    let title = document.createElement('h3');
    title.setAttribute('data-vyber',[index]);
    title.innerHTML = recepty[index].nadpis;
    viewTitle.appendChild(title);
    document.querySelector('.recepty').appendChild(viewTitle);

    let createRecipe = document.createElement('div');
    createRecipe.className = 'recept';
    createRecipe.setAttribute('data-vyber',[index]);
    //přidá každému vytvořenému receptu klikatelnost, která spustí funkci zobrazení detailu
    createRecipe.onclick = changeRecipeDetails;

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


//Při kliknutí na tlačítko Hledat seznam receptů vyfiltrovat podle hledaného slova

function searchRecipe(){

    let bla = document.querySelector('#hledat').value 
    console.log(bla)

}


//3) Doplň filtrovanání receptů podle kategorie.

//4) Doplň řazení receptů podle hodnocení.


//funkce měnící detail receptu podle toho, na co se kliklo 
function changeRecipeDetails(event){
    let myChoice = event.target.dataset.vyber;
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

if(lastChoice === null || lastChoice === undefined) {
    
} else {
    myChoice = JSON.parse(lastChoice);
}
changeRecipe(myChoice);
}

