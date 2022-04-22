

showAllRecipe()


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
    let myChoice = event.target.dataset.vyber
    let newPicture = document.createElement('img');
    newPicture.id = 'recept-foto';
    document.querySelector('.recept-detail-obrazek').appendChild(newPicture)
    
    document.querySelector('#recept-foto').src= recepty[myChoice].img;
    document.querySelector('#recept-kategorie').innerHTML= recepty[myChoice].kategorie;
    document.querySelector('#recept-hodnoceni').innerHTML= recepty[myChoice].hodnoceni;
    document.querySelector('#recept-nazev').innerHTML= recepty[myChoice].nadpis;
    document.querySelector('#recept-popis').innerHTML= recepty[myChoice].popis;
}


/*

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/