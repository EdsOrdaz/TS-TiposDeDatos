"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('si');
    }
    else {
        console.log('no');
    }
    avengers = 123;
    console.log({ avengers: avengers });
})();
