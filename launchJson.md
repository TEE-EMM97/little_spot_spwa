{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/index.js",
      "env":{
        "API_DOMAIN":	"localhost",
        "API_PORT":	"8000",
        "API_SCHEME":	"http",
        // "SPOTIFY_API_DOMAIN":	"accounts.spotify.com/authorize:443/api/token",
        "SPOTIFY_API_DOMAIN":	"accounts.spotify.com",
        "SPOTIFY_API_PATH":	"/api/token",
        "SPOTIFY_CLIENT_CALLBACK_URL": "http://localhost:5500/callback.html",
        "SPOTIFY_CLIENT_ID":"92e06e65050a4c64be6bfe39ec3fde21",
        "SPOTIFY_CLIENT_SECRET":"09f6407f9557411680fc4cddd8d0e995",
        "SPOTIFY_ENCRYPTION_SECRET": "siojfidoshjfoisd"
      }
    }
  ]
}
