(() => {



    let avengers: number = 10;

    console.log( avengers );

    const villians: number = 20;

    if( avengers < villians ){
        console.log( 'si' );
    }else{
        console.log( 'no' );
    }

    avengers = 123;
    console.log( {avengers} );

})()