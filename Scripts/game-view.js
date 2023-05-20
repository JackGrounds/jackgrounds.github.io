 console.log("Game-view loaded")

 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

 let urlParams = parseURLParams(location.search);
 let game;
 let index;


 if (urlParams) {
     if (urlParams["Game"]) {
          index = urlParams["Game"][0]
 if (urlParams["Game"][0] == 0) // Cookie Clicker
     {
         console.log("Cookie Clicker")
         game = "Cookie Clicker"
       
     }
     else if(urlParams["Game"][0] == 1) // Run3
     {
            console.log("Run3")
         game = "Run3"
     }
      else if(urlParams["Game"][0] == 2) // Snowball.io
     {
            console.log("Snowball")
         game = "Snowball"
     }
      else if(urlParams["Game"][0] == 3) // Slither.io
     {
            console.log("Slither")
         game = "Slither"
     }
     else if(urlParams["Game"][0] == 4) // UnofficialFlappy
     {
            console.log("unFlappy")
         game = "UnOfficial Flappy Bird"
     }
      else if(urlParams["Game"][0] == 5) // Helix Jump
     {
            console.log("Helix Jump")
         game = "Helix Jump"
     }
       else if(urlParams["Game"][0] == 6) // Bloxorz
     {
            console.log("Bloxorz")
         game = "Bloxorz"
     }
       else if(urlParams["Game"][0] == 7) // DinoGame
     {
            console.log("Dino Game")
         game = "Dino Game"
     }
     else if(urlParams["Game"][0] == 8) // Hole.io
     {
            console.log("Hole.io")
         game = "Hole"
     }
       else if(urlParams["Game"][0] == 9) // Eggy Car
     {
            console.log("Eggy Car")
         game = "Eggy Car"
     }
       else if(urlParams["Game"][0] == 10) // SuperMarioBros
     {
            console.log("SuperMarioBros")
         game = "SuperMarioBros"
     }
      else if(urlParams["Game"][0] == 11) // Traffic Run
     {
            console.log("Traffic Run")
         game = "Traffic Run"
     }
      else if(urlParams["Game"][0] == 12) // Eggy Car 2
     {
            console.log("Eggy Car 2")
         game = "Eggy Car 2"
     }
      else if(urlParams["Game"][0] == 13) // Amongus
     {
            console.log("Amongus")
         game = "Amongus"
     }
       else if(urlParams["Game"][0] == 14) // Backrooms Online
     {
            console.log("Backrooms Online")
         game = "Backrooms Online"
     }
      else if(urlParams["Game"][0] == 15) // Escape Prison Minecraft
     {
            console.log("Escape Prison Minecraft")
         game = "Escape Prison Minecraft"
     }
     else if(urlParams["Game"][0] == 16) // Slope
     {
            console.log("Slope")
         game = "Slope"
     }
      else if(urlParams["Game"][0] == 17) // Paper2
     {
            console.log("Paper 2")
         game = "Paper 2"
     }
        else if(urlParams["Game"][0] == 18) // Minecraft Online
     {
            console.log("Minecraft Online")
         game = "Minecraft Online"
     }
       else if(urlParams["Game"][0] == 19) // Run 4
     {
            console.log("Run 4")
         game = "Run 4"
     }
      else if(urlParams["Game"][0] == 20) // Subway Surfers
     {
            console.log("Subway Surfers")
         game = "Subway Surfers"
     }
       else if(urlParams["Game"][0] == 21) // Papas Pizzeria
     {
            console.log("Papas Pizzeria")
         game = "Papas Pizzeria"
     }
      else if(urlParams["Game"][0] == 22) // Jack Smith
     {
            console.log("Jack Smith")
         game = "Jack Smith"
     }
       else if(urlParams["Game"][0] == 23) // Tower Defense
     {
            console.log("Tower Defense")
         game = "Tower Defense"
     }
     else if(urlParams["Game"][0] == 24) // Road Crossing
     {
            console.log("Road Crossing")
         game = "Road Crossing"
     }
       else if(urlParams["Game"][0] == 25) // Retro Bowl
     {
            console.log("Retro Bowl")
         game = "Retro Bowl"
     }
     else if(urlParams["Game"][0] == 26) // Snow Rider 3D
     {
            console.log("Snow Rider 3D")
         game = "Snow Rider 3D"
     }
       else if(urlParams["Game"][0] == 27) // Tiny Fishing
     {
            console.log("Tiny Fishing")
         game = "Tiny Fishing"
     }
      else if(urlParams["Game"][0] == 28) // Papas Sushi
     {
            console.log("Papas Sushi")
         game = "Papas Sushi"
     }
      else if(urlParams["Game"][0] == 29) // Moto X3M 4
     {
            console.log("Moto X3M 4")
         game = "Moto X3M 4"
     }
      else if(urlParams["Game"][0] == 30) // Stink Clicker
     {
            console.log("Stink Clicker")
         game = "Stink Clicker"
     }
     else if(urlParams["Game"][0] == 31) // Granny
     {
            console.log("Granny")
         game = "Granny"
     }
      else if(urlParams["Game"][0] == 32) // Bottle Flip 3D
     {
            console.log("Bottle Flip 3D")
         game = "Bottle Flip 3D"
     }
       else if(urlParams["Game"][0] == 33) // Bad Time Simulator
     {
            console.log("Bad Time Simulator")
         game = "Bad Time Simulator"
     }
          else if(urlParams["Game"][0] == 34) // Drift Boss
     {
            console.log("Drift Boss")
         game = "Drift Boss"
     }
      else {
         console.log("Game doesn't Exist")
     }
 }
 }
 else {
     console.log("No Url Params")
 }

 function displayError() {
document.title = document.title.replace("GAME", "Game Null")
     var errorDiv = document.getElementById("error-container")
     var fullScreenButton = document.getElementById("fullscreen-button")

     if (errorDiv) {
         var errorText = document.createElement("h1")
         errorText.innerText = "Game Doesn't Exist!"
         errorDiv.appendChild(errorText)
     }

     if (fullScreenButton) {
         fullScreenButton.style = "display: none;"
     }
 }

 if (game != null) {
     document.title = document.title.replace("GAME", game)

     var gameView = document.getElementsByClassName("game-view")
     if (gameView) {
         gameView = gameView[0]
         let fullScreenButton = document.getElementById("fullscreen-button")
         if (fullScreenButton) {
             console.log("Fulllscreen")
        fullScreenButton.setAttribute("onclick", `fullscreen("${game.replaceAll(" ", "-").toLowerCase()}")`)
         }

        
         

           var request = new XMLHttpRequest();
            request.open("GET", "../../Scripts/data-game.json", false);
            request.send(null)
        var dataGame = JSON.parse(request.responseText);



        document.getElementById("game-name").innerText = game
           let gameViewIframe = document.createElement("iframe")
       
           if (game == "UnOfficial Flappy Bird") {
 gameViewIframe.style="width: 20%; height: 700px; "
           }
           else if (game == "Snow Rider 3D") {
                gameViewIframe.style="width: 900px; height: 630px; "
           }
           else if (game == "Moto X3M 4") {
                gameViewIframe.style="width: 900px; height: 630px; "
           }
           else {
                gameViewIframe.style="width: 80%; height: 630px; "
           }

           if (game == "GAMENAMEE") {
                 var errorDiv = document.getElementById("error-container")
                   if (errorDiv) {
         var errorText = document.createElement("h1")
         errorText.innerText = "If game doesn't load use fullscreen"
         errorDiv.appendChild(errorText)
     }
           }
          

           gameView.appendChild(gameViewIframe)
        if (dataGame[game.replaceAll(" ", "-").toLowerCase()]) {
               gameViewIframe.src = dataGame[game.replaceAll(" ", "-").toLowerCase()]
        }
        else {
            console.warn("Game doesn't exist in file!")
        }
     }
     else {
         displayError()
     }
    
 }
 else {
     displayError()
 }

