(() => {

    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo salvado';
        }
    }

    class Villians extends Mutante{
        conquitarMundo(){
            return 'mundo conquistado';
        }
    }


    const wolverin = new Xmen('Wolverin', 'Logan');
    const magneto = new Villians('Magneto', 'Magnum');

    // console.log( wolverin );
    // console.log( magneto );

    const printName = ( character:Mutante ) => {
        // console.log( character.realName );
    }

    printName( magneto )
    

})()