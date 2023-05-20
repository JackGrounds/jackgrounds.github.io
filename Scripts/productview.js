console.log("Product view Loaded")


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
 let utility;
 let version;
 

if (urlParams["utility"]) {
     if (urlParams["utility"][0] == 0) {
      utility = "AutoClickers"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
  document.getElementById("product-img").src = "../images/utilityIcons/" + utility.toLowerCase() + ".png";
  document.getElementById("product-description").innerText = "Ever want to click super fast without having the need to click? Well this is the solution. Featuring 2 superfast, unblocked autoclickers!"

       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Auto Clicker 3.0"
      document.getElementById("select-dropdown").appendChild(option1)

        let option2 = document.createElement('button');
       option2.setAttribute("onclick","switchVersion(1,this.innerText)")
       option2.innerText = "(OP) Speed Auto Clicker"
         document.getElementById("select-dropdown").appendChild(option2)

      
     }
     else if ((urlParams["utility"][0] == 1)) {
        utility = "WaterFox"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
       document.getElementById("product-img").src = "../images/utilityIcons/" + utility.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Are you sad that most website are blocked. Well, not to worry with WaterFox everything is better. WaterFox is microsoft edge but unblocked. How does this work, well the school uses a proxy which can run a script to tell if the website is good or bad. WaterFox has a option to disable the proxy. However, sometimes it doesn't work. The only website I know thats fully unblocked is YouTube(Fully Unblocked with ads comments everything)    **IMPORTANT SETUP** Go to settings scroll all the way down until you see network settings. Click change proxy and click no proxy."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "WaterFox"
      document.getElementById("select-dropdown").appendChild(option1)

     }
       else if ((urlParams["utility"][0] == 3)) {
        utility = "UnderTale"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
       document.getElementById("product-img").src = "../images/gameIcons/" + utility.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "UnderTale is a rpg game 𝙒𝙖𝙧𝙣𝙞𝙣𝙜 𝙈𝙖𝙠𝙚 𝙨𝙪𝙧𝙚 𝙩𝙤 𝙚𝙭𝙩𝙧𝙖𝙘𝙩 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚! 𝙄𝙛 𝙮𝙤𝙪 𝙜𝙚𝙩 𝙖𝙣 𝙚𝙧𝙧𝙤𝙧 𝙬𝙝𝙞𝙡𝙚 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙣𝙜 𝙨𝙖𝙮𝙞𝙣𝙜 𝙥𝙖𝙩𝙝 𝙩𝙤𝙤 𝙡𝙤𝙣𝙜. 𝙍𝙚𝙣𝙖𝙢𝙚 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚 𝙩𝙤 𝙤𝙣𝙚 𝙡𝙚𝙩𝙩𝙚𝙧 𝙖𝙣𝙙 𝙥𝙪𝙩 𝙞𝙩 𝙤𝙣 𝙮𝙤𝙪𝙧 𝙙𝙚𝙨𝙠𝙩𝙤𝙥."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "UnderTale"
      document.getElementById("select-dropdown").appendChild(option1)

     }
      else if ((urlParams["utility"][0] == 4)) {
        utility = "Backrooms"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
       let utilitys = utility.trim().replaceAll(" ", "-")
       let oneUtility = utilitys
       console.log(oneUtility)
       document.getElementById("product-img").src = "../images/gameIcons/" + oneUtility.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Explore the backrooms on your school computer! 𝙒𝙖𝙧𝙣𝙞𝙣𝙜 𝙈𝙖𝙠𝙚 𝙨𝙪𝙧𝙚 𝙩𝙤 𝙚𝙭𝙩𝙧𝙖𝙘𝙩 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚! 𝙄𝙛 𝙮𝙤𝙪 𝙜𝙚𝙩 𝙖𝙣 𝙚𝙧𝙧𝙤𝙧 𝙬𝙝𝙞𝙡𝙚 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙣𝙜 𝙨𝙖𝙮𝙞𝙣𝙜 𝙥𝙖𝙩𝙝 𝙩𝙤𝙤 𝙡𝙤𝙣𝙜. 𝙍𝙚𝙣𝙖𝙢𝙚 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚 𝙩𝙤 𝙤𝙣𝙚 𝙡𝙚𝙩𝙩𝙚𝙧 𝙖𝙣𝙙 𝙥𝙪𝙩 𝙞𝙩 𝙤𝙣 𝙮𝙤𝙪𝙧 𝙙𝙚𝙨𝙠𝙩𝙤𝙥."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Backrooms"
      document.getElementById("select-dropdown").appendChild(option1)

     }
     else if ((urlParams["utility"][0] == 5)) {
        utility = "Blooket Hacks"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
       let utilitys = utility.split(" ");
       let oneUtility = utilitys[0] + utilitys[1];
       document.getElementById("product-img").src = "../images/utilityIcons/" + oneUtility.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Ever want to get ahead in the game. Well, here's your chance. With blooket hacks you can pick any skin you want or set your currency to whatever amount. With blooket hacks imagine anything except for permanent skins"


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Blooket Cheats"
      document.getElementById("select-dropdown").appendChild(option1)
     }
     else if ((urlParams["utility"][0] == 6)) {
        utility = "Tabs"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
       document.getElementById("product-img").src = "../images/gameIcons/" + utility.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Tabs (Tottaly accurate battle simulator) 𝙒𝙖𝙧𝙣𝙞𝙣𝙜 𝙈𝙖𝙠𝙚 𝙨𝙪𝙧𝙚 𝙩𝙤 𝙚𝙭𝙩𝙧𝙖𝙘𝙩 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚! 𝙄𝙛 𝙮𝙤𝙪 𝙜𝙚𝙩 𝙖𝙣 𝙚𝙧𝙧𝙤𝙧 𝙬𝙝𝙞𝙡𝙚 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙣𝙜 𝙨𝙖𝙮𝙞𝙣𝙜 𝙥𝙖𝙩𝙝 𝙩𝙤𝙤 𝙡𝙤𝙣𝙜. 𝙍𝙚𝙣𝙖𝙢𝙚 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚 𝙩𝙤 𝙤𝙣𝙚 𝙡𝙚𝙩𝙩𝙚𝙧 𝙖𝙣𝙙 𝙥𝙪𝙩 𝙞𝙩 𝙤𝙣 𝙮𝙤𝙪𝙧 𝙙𝙚𝙨𝙠𝙩𝙤𝙥."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "New Tabs (2023)"
      document.getElementById("select-dropdown").appendChild(option1)

       let option2 = document.createElement('button');
       option2.setAttribute("onclick","switchVersion(1,this.innerText)")
       option2.innerText = "Old Tabs (Alpha)"
      document.getElementById("select-dropdown").appendChild(option2)

     }
     else if ((urlParams["utility"][0] == 7)) {
        utility = "60 Seconds"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
         let utilitys = utility.replaceAll(" ", "-")

       document.getElementById("product-img").src = "../images/gameIcons/" + utilitys.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "60 Seconds. A fun survival game. 𝙒𝙖𝙧𝙣𝙞𝙣𝙜 𝙈𝙖𝙠𝙚 𝙨𝙪𝙧𝙚 𝙩𝙤 𝙚𝙭𝙩𝙧𝙖𝙘𝙩 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚! 𝙄𝙛 𝙮𝙤𝙪 𝙜𝙚𝙩 𝙖𝙣 𝙚𝙧𝙧𝙤𝙧 𝙬𝙝𝙞𝙡𝙚 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙣𝙜 𝙨𝙖𝙮𝙞𝙣𝙜 𝙥𝙖𝙩𝙝 𝙩𝙤𝙤 𝙡𝙤𝙣𝙜. 𝙍𝙚𝙣𝙖𝙢𝙚 𝙩𝙝𝙚 𝙛𝙞𝙡𝙚 𝙩𝙤 𝙤𝙣𝙚 𝙡𝙚𝙩𝙩𝙚𝙧 𝙖𝙣𝙙 𝙥𝙪𝙩 𝙞𝙩 𝙤𝙣 𝙮𝙤𝙪𝙧 𝙙𝙚𝙨𝙠𝙩𝙤𝙥."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "60 Seconds"
      document.getElementById("select-dropdown").appendChild(option1)

  
     }
          else if ((urlParams["utility"][0] == 8)) {
        utility = "Quizizz Hacks"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
         let utilitys = utility.replaceAll(" ", "-")

       document.getElementById("product-img").src = "../images/utilityIcons/" + utilitys.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Quizizz Hacks. Hack quizizz our brand new hack. "


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Quizizz Cheats"
      document.getElementById("select-dropdown").appendChild(option1)

  
     }
   else if ((urlParams["utility"][0] == 9)) {
        utility = "Gimkit Hacks"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
         let utilitys = utility.replaceAll(" ", "-")

       document.getElementById("product-img").src = "../images/utilityIcons/" + utilitys.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Gimkit Hacks, hack Gimkit."


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Gimkit Cheats"
      document.getElementById("select-dropdown").appendChild(option1)

  
     }
  else if ((urlParams["utility"][0] == 10)) {
        utility = "Edpuzzle Hacks"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
         let utilitys = utility.replaceAll(" ", "-")

       document.getElementById("product-img").src = "../images/utilityIcons/" + utilitys.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Edpuzzle Hacks, hack Edpuzzle. 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗧𝗛𝗜𝗦 𝗖𝗛𝗘𝗔𝗧 𝗪𝗔𝗦𝗡'𝗧 𝗧𝗘𝗦𝗧𝗘𝗗"


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Edpuzzle Cheats"
      document.getElementById("select-dropdown").appendChild(option1)

  
     }
  else if ((urlParams["utility"][0] == 11)) {
        utility = "Minecraft Java Edition"
       console.log("Utility is " + utility)
       document.title = document.title.replace("NAME", utility);
       document.getElementById("product-name").innerText = utility;
         let utilitys = utility.replaceAll(" ", "-")

       document.getElementById("product-img").src = "../images/gameIcons/" + utilitys.toLowerCase() + ".png";
       document.getElementById("product-description").innerText = "Minecraft.. just minecraft"


       let option1 = document.createElement('button');
       option1.setAttribute("onclick","switchVersion(0,this.innerText)")
       option1.innerText = "Minecraft Java Edition"
      document.getElementById("select-dropdown").appendChild(option1)

  
     }
     else {
         console.log("Not a valid Utility")
     }
 }
 else {
     console.log("No Param Found")
 }

 if (utility == null) {
     console.log("Creating Error Text")
     let text = document.createElement('h1');
     text.innerText = "Utility Doesn't Exist"
     text.style.color = "#b81200"
     text.style.textAlign = "center"
     text.style.fontSize = "3rem"

     document.getElementById("error-container").appendChild(text)
   throw new Error("Error While Downloading.. The utility file doesn't exist");

 }

function downloadFile() {
 console.log("downloading file")

 if (utility) {
    if (utility == "AutoClickers") {
        if (version == 0) {
          console.log("Version 0")
          open("https://www.dropbox.com/s/2l6916bom736vik/AutoClicker-3.0.exe?dl=0")
        }
        else if (version == 1) {
            console.log("Version 1")
           open("https://www.dropbox.com/s/xu2t6si63e8us9i/SpeedAutoClicker-v1.6.2%20%281%29.zip?dl=0")
        }
         else {
        console.log("Version null")
      }
    }
    else if (utility == "WaterFox") {
        if (version == 0) {
          console.log("Version 0")
          open("https://waterfox.com")
        }
    }
    else if (utility == "UnderTale") {
        if (version == 0) {
          console.log("Version 0")
          open("../download.html?download=0")
        }
    }
    else if (utility == "Backrooms") {
        if (version == 0) {
          console.log("Version 0")
          alert("Backrooms is in TESTING")
        // open("../download.html?download=1")
        }
    }
     else if (utility == "Blooket Hacks") {
        if (version == 0) {
          console.log("Version 0")
          open("https://minesraft2.github.io/Blooket-Cheats/")
        }
     }
         else if (utility == "Tabs") {
        if (version == 0) {
          console.log("Version 0")
         open("../download.html?download=2")
        }
        else if (version == 1) {
           console.log("Version 1")
             open("../download.html?download=3")
        }
         }
         else if (utility == "60 Seconds") {
        if (version == 0) {
          console.log("Version 0")
         open("../download.html?download=4")
        }
    }
    else if (utility == "Quizizz Hacks") {
        if (version == 0) {
          console.log("Version 0")
          var tempPage = `
            <html>
            <head>
            <title>Quizizz Hacks</title>
            </head>
            <body style="padding: 0; margin: 0; overflow: hidden;">
              <h1>The Quizizz Hacks works and has been tested</h1>
               <br>
                <br>
               <h3>Please drag the link to your bookmarks tab</h3>
               <br>
                <br>
               <a href='javascript:(()=>{const e=parseInt(prompt("Points per question (max is 7000):"))-5e3,o=fetch;window.fetch=function(r,s){if(["https://game.quizizz.com/play-api/v4/soloProceed","https://game.quizizz.com/play-api/v4/proceedGame"].includes(r)){const o=JSON.parse(s.body);o.response.provisional.scores={correct:e+5e3,incorrect:e+5e3},o.response.provisional.scoreBreakups={correct:{base:5e3,timer:5e3,streak:5e3,powerups:[],total:e+5e3},incorrect:{base:5e3,timer:5e3,streak:5e3,powerups:[],total:e+5e3}},s.body=JSON.stringify(o)}return o(r,s)}})();'>Please Drag me to your bookmarks tab - Choose your points in a quizizz live match</a>
                <br>
                 <br>
                <a href='javascript:(function()%7Bfetch("https%3A%2F%2Fraw.githubusercontent.com%2Fseanv999%2Fquizizz-flooder%2Fmain%2Fflood.js")%0A.then((res) %3D> res.text()%0A.then((t) %3D> eval(t)))%7D)()%3B'>Please Drag me to your bookmarks tab - Flood the quizizz live match with bots</a>
            </body>
      `;

      var w = window.open(''); 
    w.document.write(tempPage);
        }
    }
    else if (utility == "Gimkit Hacks") {
        if (version == 0) {
          console.log("Version 0")
         var tempPage = `
            <html>
            <head>
            <title>Gimkit Hacks</title>
            </head>
            <body style="padding: 0; margin: 0; overflow: hidden;">
              <h1>The Gimkit hacks works and has been tested</h1>
               <br>
                <br>
               <h3>Please drag the link to your bookmarks tab</h3>
               <br>
                <br>
               <a href='javascript:var answerDatabase = {};var lastQuestion = "";var mx = 0;var my = 0;var lastAnswer = null;var lastAnswerAlphabet = [];alert("Started.");setInterval(() => { var items = document.getElementsByClassName("notranslate lang-en"); if (items.length == 5) { var question = items[0].innerText; var answer1 = items[1]; var answer2 = items[2]; var answer3 = items[3]; var answer4 = items[4]; var answersAlphabet = [answer1.innerText,answer2.innerText,answer3.innerText,answer4.innerText]; answersAlphabet.sort(); lastAnswerAlphabet = answersAlphabet; lastQuestion = question; if (answerDatabase[`${question}_${lastAnswerAlphabet}`] != null) { answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; if (answer1.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer2.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer3.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } if (answer4.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) { answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } } } else if (items.length == 1) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = items[0].innerText; } else { var divs = document.getElementsByTagName("div"); for (let i = 0; i < divs.length; i++) { if (divs[i].innerHTML.slice(0,2) == "+$" && `${lastQuestion}_${lastAnswerAlphabet}` in answerDatabase == false) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = lastAnswer.innerText; } } }});addEventListener('mousemove', (event) => { mx = event.clientX; my = event.clientY; const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); px = mx/vw; py = my/vh; var possibleQuadrants = [true,true,true,true]; if (py >= 0.74) { possibleQuadrants[0] = false; possibleQuadrants[1] = false; } else { possibleQuadrants[2] = false; possibleQuadrants[3] = false; } if (px >= 0.5) { possibleQuadrants[0] = false; possibleQuadrants[2] = false; } else { possibleQuadrants[1] = false; possibleQuadrants[3] = false; } var quadrant = 0; for (let i = 0; i<4; i++) { if (possibleQuadrants[i] == true) { quadrant = i; } } var items = document.getElementsByClassName("notranslate lang-en"); for (let i = 0; i < items.length; i++) { items[i].style.color = ""; } if (items.length == 5) { lastAnswer = items[quadrant+1]; lastAnswer.style.color = "red"; }});window.onerror = function(msg, url, linenumber) { alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber); return true;}'>Please Drag me to your bookmarks tab - click on it will bring you to a new page. After you cycle through questions it will only show the correct one.</a>
            </body>
      `;

      var w = window.open(''); 
    w.document.write(tempPage);
        }
    }
    else if (utility == "Edpuzzle Hacks") {
        if (version == 0) {
          console.log("Version 0")
         open("")
        }
    }
     else if (utility == "Minecraft Java Edition") {
        if (version == 0) {
          console.log("Version 0")
         open("https://drive.google.com/file/d/1rFEyHC6HmzgaYTJFZP9jVOusCKKinTsV/view?usp=share_link")
             open("https://drive.google.com/drive/folders/1cGij_AUzJseqQyMkA8y5E4bCrJckhsqz?usp=share_link")
        }
    }
    
 }


}

function switchVersion(index, text) {
    version = index;
    document.getElementById("select-dropbtn").innerText = "Selected " + text;
    document.getElementById("download-product").removeAttribute("disabled");
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function selectDropDown() {
  document.getElementById("select-dropdown").classList.toggle("show");
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.select-dropbtn')) {
    var dropdowns = document.getElementsByClassName("select-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
