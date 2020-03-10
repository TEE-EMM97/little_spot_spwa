(function () {

    "use strict";

    const module = angular.module("authenticatejs");
    
    module.service("credentialsSrvc", constructor);

    constructor.$inject = [];

    function constructor(
    ) {

        var service = {
            clientId: "92e06e65050a4c64be6bfe39ec3fde21",
            redirectShort: "https://littlespotspwa.herokuapp.com/little_spot_spwa/js/states/callback/callback",
            redirectUri: "https://littlespotspwa.herokuapp.com/little_spot_spwa/js/states/callback/callback.html",
            internalRedirectUri: "https://littlespotspwa.herokuapp.com/little_spot_spwa/js/states/secure-auth/authenticate.secure.html",
            scopes: "streaming, user-read-playback-state, user-modify-playback-state",
            authServiceUri: "https://accounts.spotify.com/authorize",
            exchangeServiceUri: "http://localhost:8000/spotify/exchange",
            refreshServiceUri: "http://localhost:8000/spotify/refresh"
        };

        return service;

    }

})();
