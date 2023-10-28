(()=>{

    // NEVER ES UNA FUNCION DE ERROR QUE NO RETORNARA NADA PERO DEBE MOSTRAR UN ERROR

    const abc = ( message: string ):never => {
      throw new Error( message )
    }
    

    abc( 'Ayuda' );


})()