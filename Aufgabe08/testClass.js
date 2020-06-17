"use strict";
var A08Server;
(function (A08Server) {
    async function fetchURl() {
        let formData = new FormData(document.forms[0]);
        let url = "https://compaktdisk.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        await fetch(url);
    }
    fetchURl();
})(A08Server || (A08Server = {}));
//# sourceMappingURL=testClass.js.map