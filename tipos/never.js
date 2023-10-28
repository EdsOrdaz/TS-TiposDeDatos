"use strict";
(function () {
    // NEVER ES UNA FUNCION DE ERROR QUE NO RETORNARA NADA PERO DEBE MOSTRAR UN ERROR
    var abc = function (message) {
        throw new Error(message);
    };
    abc('Ayuda');
})();
