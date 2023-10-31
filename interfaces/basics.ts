(() => {

    interface hero {
        name:string;
        age:number;
        powers:string[];
        getName?:() => string;
    }


    let flash: hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Rapido', 'viajar']
    }

    let superman: hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad']
    }

})()