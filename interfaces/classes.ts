(() => {

    interface Xmen{
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human{
        age: number;
    }

    class Mutant implements Xmen, Human{
        public age: number;
        public name: number;
        public realName: number;

        mutantPower( id:number ){
            return `${ this.name } (${ this.realName })`
        }
    }

})()