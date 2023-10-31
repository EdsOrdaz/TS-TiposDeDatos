(() => {

    type typeAvengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers: typeAvengers = {
    nick: 'Samuel',
    ironman: 'Robert',
    vision: 'Paul',
    activo: true,
    poder: 1500.1234323
    }
    const { nick, poder } = avengers;
    // console.log( nick.toUpperCase(), poder.toFixed(2) );

    const printAvenger = ( { vision, ...resto }:typeAvengers ) => {
        // console.log( vision, resto.ironman );
    }

    printAvenger( avengers );



    const avengersArr: [string, boolean, number] = ['Cap America', true, 150.15];
    const [ capitan, ironman, ] = avengersArr;

    // console.log( { ironman, capitan } );

})()