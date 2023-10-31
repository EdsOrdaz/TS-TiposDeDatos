(() => {

    type typeAvenger = {
        name: string;
        weapon: string;
    }

    const ironman: typeAvenger = {
        name: 'Ironman',
        weapon: 'Armonsuit'
    }
    const capAmerica: typeAvenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }
    const thor: typeAvenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: typeAvenger[] = [ ironman, thor, capAmerica];

    for (const { name, weapon } of avengers) {
        // console.log(  name, weapon  );
    }

})()