(() => {

    class Apocalipsis{

        static instance:Apocalipsis;

        private constructor( public name:string ){

        }

        static callApocaipsis(): Apocalipsis{
            if( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('soy apo');
            }
            return Apocalipsis.instance;
        }

        changeName( newName: string ){
            this.name = newName;
        }

    }

    const apoca1 = Apocalipsis.callApocaipsis();
    const apoca2 = Apocalipsis.callApocaipsis();
    const apoca3 = Apocalipsis.callApocaipsis();

    apoca1.changeName('Xavier');

    console.log( apoca1, apoca2, apoca3 );

})()