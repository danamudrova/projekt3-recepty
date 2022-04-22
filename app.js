

showAllRecipe()


// funkce, která vytvoří HTML prvky jednoho receptu (na základě indexu v poli)
function recipe(index) {

    let viewPicture = document.createElement('div');
    viewPicture.className = 'recept-obrazek';
	let picture = document.createElement('img');
	picture.src = recepty[index].img;
    viewPicture.appendChild(picture);
    document.querySelector('.recepty').appendChild(viewPicture);

    let viewTitle = document.createElement('div');
    viewTitle.className = 'recept-info';
    let title = document.createElement('h3');
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


/* 

filtrováí polí 


2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.*/


//funkce měnící detail receptu podle toho, na co se kliklo 
function changeRecipeDetails(){
    
    // document.querySelector('#recept-foto').src= recepty[myChoice].img;
    // document.querySelector('#recept-kategorie').innerHTML= recepty[index].kategorie;
    // document.querySelector('#recept-hodnoceni').innerHTML= recepty[index].hodnoceni;
    // document.querySelector('#recept-nazev').innerHTML= recepty[index].nadpis;
    // document.querySelector('#recept-popis').innerHTML= recepty[index].popis;
}


/*
5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/