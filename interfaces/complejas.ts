(() => {

    interface Client{
        name: string;
        age?: number;
        address: Address;
    }

    interface Address{
        id: number,
        zip: number,
        city: string,
    }

    const client: Client = {
        name: 'Edson',
        age: 25,
        address:{
            id: 125,
            zip: 42820,
            city: 'HGO',
        }
    }
    const client2: Client = {
        name: 'Eduardo',
        age: 25,
        address:{
            id: 123,
            zip: 32435,
            city: 'JAL',
        }
    }

})()