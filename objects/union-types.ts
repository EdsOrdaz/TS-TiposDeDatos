(() => {

    type Hero = {
        name:string;
        age:number;
        powers:string[];
        getName?:() => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Edson';

    console.log( typeof myCustomVariable );

    myCustomVariable = 20;

    console.log( typeof myCustomVariable );

    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 31,
        powers: ['Noche']
    }

    console.log( typeof myCustomVariable );

})()