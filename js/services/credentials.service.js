(function () {

    "use strict";

    const module = angular.module("authenticatejs");
    
    module.service("credentialsSrvc", constructor);

    constructor.$inject = [];

    function constructor(
    ) {

        var service = {
            clientId: "92e06e65050a4c64be6bfe39ec3fde21",
            redirectShort: "http://localhost:5500/callback",
            redirectUri: "http://localhost:5500/callback.html",
            internalRedirectUri: "http://localhost:5500/#/auth_secure",
            scopes: "streaming, user-read-playback-state, user-modify-playback-state",
            authServiceUri: "https://accounts.spotify.com/authorize",
            exchangeServiceUri: "http://localhost:8000/spotify/exchange",
            refreshServiceUri: "http://localhost:8000/spotify/refresh"
        };

        return service;

    }

})();
