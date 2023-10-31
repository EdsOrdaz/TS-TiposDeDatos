(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log( 'creado' );
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super( name, realName)
            // console.log( 'xmen llamado' );
        }
    
        get fullName(){
            return `${ this.name } - edson`
        }
        
        set fullName( name: string ){
            this.name = name
        }

        public getFullNameDesdeXmen(){
            super.getFullName();
        }
    }

    const Wolverin = new Xmen('Wolverin', 'Logan', true);

    Wolverin.fullName = 'Achis';
    
    // console.log( Wolverin.fullName );

})()