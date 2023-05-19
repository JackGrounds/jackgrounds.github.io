console.log("Downloads JS is loaded")

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

if (urlParams["download"]) {
     if (urlParams["download"][0] == 0) {
      game = "undertale"
       console.log("Game is " + game)
     }
     else if (urlParams["download"][0] == 1) {
        game = "backrooms"
       console.log("Game is " + game)
     }
     else if (urlParams["download"][0] == 2) {
        game = "tabs_new"
       console.log("Game is " + game)
     }
      else if (urlParams["download"][0] == 3) {
        game = "tabs_old"
       console.log("Game is " + game)
     }
      else if (urlParams["download"][0] == 4) {
        game = "60_seconds"
       console.log("Game is " + game)
     }

     else {
         console.log("Not a valid file download")
     }
 }
 else {
     console.log("No Param Found")
 }

 if (game == null) {
     console.log("Creating Error Text")
     let text = document.createElement('h1');
     text.innerText = "Error While Downloading"
     text.style.color = "#b81200"

     document.getElementById("download-section").appendChild(text)
   throw new Error("Error While Downloading.. The game file doesn't exist");

 }

function downloadFile() {
 console.log("downloading file")

 if (game) {
    if (game == "undertale") {
      open("https://www.dropbox.com/s/943ykxtxtpv7lqu/Undertale.v1.08.rar?dl=0")
    }
    else if (game == "backrooms") {
      alert("**This File is in TESTING**")
    }
     else if (game == "tabs_new") {
        open("https://www.dropbox.com/s/5ciqt7hb2syt3a6/Tabs.zip?dl=0")
    }
     else if (game == "tabs_old") {
        open("https://www.dropbox.com/s/wik6yooaru0m875/TabsOLD.zip?dl=0")
    }
     else if (game == "60_seconds") {
        open("https://drive.google.com/file/d/1mzSuK_sTjWpDZje3NxJiVSfjyqhxSUsZ/view?usp=share_link")
    }
  
 }


}


const download = async (url, filename) => {
    const data = await fetch(url)
    const blob = await data.blob()
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.setAttribute('href', objectUrl)
    link.setAttribute('download', filename)
    link.style.display = 'none'

    document.body.appendChild(link)
  
    link.click()
  
    document.body.removeChild(link)
}

if (game) {
let objectPassword = document.getElementById("download-password");
objectPassword.innerHTML = objectPassword.innerHTML.replace("GAMENAME", game)
}


async function startTimer() {
document.getElementById("download-text").innerText = "Your Download is starting in... 3"
await sleep(1000);
document.getElementById("download-text").innerText = "Your Download is starting in... 2"
await sleep(1000);
document.getElementById("download-text").innerText = "Your Download is starting in... 1"
await sleep(1000);
document.getElementById("download-text").innerText = "Your Download is starting in... 0"
downloadFile()
}


startTimer();