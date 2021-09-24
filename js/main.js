var elList = document.querySelector('.list');

elList.innerHTML = null;
for (var pokemon of pokemons) {
    //create elements
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newHeadding = document.createElement('h2');
    var newImg = document.createElement('img');
    var newTypeList = document.createElement('ul');
    var newheight = document.createElement('p');
    var newweight = document.createElement('p');
    var newCandyHeadding = document.createElement('h4');
    var newCandyCount = document.createElement('span');
    var newParagrfAgg = document.createElement('p');
    var newSpawnChanceP = document.createElement('p');
    var newAvgspawnsP = document.createElement('p');
    var newSpawnTime = document.createElement('time');
    var newMultiplierSpan = document.createElement('span');
    var newWeaknessesList = document.createElement('ul');
    // var newPrevEvolution = document.createElement('ul');
    // var newPrevEvalution = document.createElement('p')


    //set atribute
    newLi.setAttribute('class', 'item border p-3');
    newSpan.setAttribute('class', 'item__num text-center text-secondary');
    newHeadding.setAttribute('class', 'item__headding text-center text-secondary');
    newImg.setAttribute('class', 'item__img  rounded-3  mb-3 ');
    newImg.setAttribute('src', pokemon.img);
    newImg.setAttribute('alt', pokemon.name +' picture');
    newImg.setAttribute('width', '250');
    newImg.setAttribute('height', '150');
    newTypeList.setAttribute('class', 'type list-unstyled text-success');
    newheight.setAttribute('class', 'height m-0 text-success');
    newweight.setAttribute('class', 'weight m-0 text-success');
    newCandyHeadding.setAttribute('class', 'candy h6 m-0 text-success');
    newCandyCount.setAttribute('class', 'candy_count m-0 text-success');
    newParagrfAgg.setAttribute('class', 'agg m-0 text-success');
    newSpawnChanceP.setAttribute('class', 'spawn_chance m-0 text-success');
    newAvgspawnsP.setAttribute('class', 'avg_spawns m-0 text-success');
    newSpawnTime.setAttribute('class', 'spawn_time m-0 text-success');
    newMultiplierSpan.setAttribute('class', 'multipliers d-block text-success');
    newWeaknessesList.setAttribute('class', 'mweaknesses list-unstyled text-success');
    // newPrevEvalution.setAttribute('class', 'prev_valution m-0 text-success');
    // newPrevEvolution.setAttribute('class', 'prev_evolution list-unstyled');


    // loop ichida looop
    //type
    for (var item of pokemon.type) {
        var newTypeLi = document.createElement('li');
        newTypeLi.textContent = item;

        newTypeList.appendChild(newTypeLi);
    }

    //weaknesses

    for (var weaknesse of pokemon.weaknesses) {
        var newWeaknesseLi = document.createElement('li');
        newWeaknesseLi.textContent = weaknesse;

        newWeaknessesList.appendChild(newWeaknesseLi);
    }

    // prev_evolution

    // for (var item of [pokemon.prev_evolution]) {
    //     var newPrevLi = document.createElement('li');
    //     var newPrevP = document.createElement('p');
    //     var newPrevHeadding = document.createElement('h6');
        
    //     newPrevP.textContent = item;
    //     newPrevHeadding.textContent = item;

    //     newPrevLi.appendChild(newPrevP);
    //     newPrevLi.appendChild(newPrevHeadding);

    //     newPrevEvolution.appendChild(newPrevLi);

    // }
    // var prevEvalution=pokemon.prev_evolution

    // for (var item of prevEvalution) {
    //     var newPrevLi = document.createElement('li');
    //     var newPrevP = document.createElement('p');
    //     var newPrevHeadding = document.createElement('h6');
        
    //     newPrevP.textContent = item;
    //     newPrevHeadding.textContent = item;

    //     newPrevLi.appendChild(newPrevP);
    //     newPrevLi.appendChild(newPrevHeadding);

    //     newPrevEvolution.appendChild(newPrevLi);

    // }

    //assayn text content
    newSpan.textContent = 'Number: ' + pokemon.num;
    newHeadding.textContent = pokemon.name;
    newheight.textContent ='Height: ' +  pokemon.height;
    newweight.textContent ='Weight: ' + pokemon.weight;
    newCandyHeadding.textContent = pokemon.candy;
    newCandyCount.textContent ='Candy_count: ' + pokemon.candy_count;
    newParagrfAgg.textContent ='Egg: ' + pokemon.egg;
    newSpawnChanceP.textContent ='Spawn_chance: ' + pokemon.spawn_chance;
    newAvgspawnsP.textContent ='Avg_spawns: ' + pokemon.avg_spawns;
    newSpawnTime.textContent ='Spawn_time ' + pokemon.spawn_time;
    newMultiplierSpan.textContent ='Multipliers: ' + pokemon.multipliers;
    // newPrevEvalution.textContent = pokemon.prev_evolution;
    
    //append elements
    newLi.appendChild(newSpan);
    newLi.appendChild(newHeadding);
    newLi.appendChild(newImg);
    newLi.appendChild(newTypeList);
    newLi.appendChild(newheight);
    newLi.appendChild(newweight);
    newLi.appendChild(newCandyHeadding);
    newLi.appendChild(newCandyCount);
    newLi.appendChild(newParagrfAgg);
    newLi.appendChild(newSpawnChanceP);
    newLi.appendChild(newAvgspawnsP);
    newLi.appendChild(newSpawnTime);
    newLi.appendChild(newMultiplierSpan);
    newLi.appendChild(newWeaknessesList);
    // newLi.appendChild(newPrevEvolution);
    elList.appendChild(newLi);


}

// console.log(pokemon.prev_evolution);