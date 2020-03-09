(function () {

    "use strict";

    const module = angular.module("authenticatejs");
    
    module.service("credentialsSrvc", constructor);

    constructor.$inject = [];

    function constructor(
    ) {

        var service = {
            clientId: "92e06e65050a4c64be6bfe39ec3fde21",
            redirectShort: "https://tee-emm97.github.io/little_spot_spwa/callback",
            redirectUri: "https://tee-emm97.github.io/little_spot_spwa/callback",
            internalRedirectUri: "http://localhost:5500/#/auth_secure",
            scopes: "streaming, user-read-playback-state, user-modify-playback-state",
            authServiceUri: "https://accounts.spotify.com/authorize",
            exchangeServiceUri: "http://localhost:8000/spotify/exchange",
            refreshServiceUri: "http://localhost:8000/spotify/refresh"
        };

        return service;

    }

})();
