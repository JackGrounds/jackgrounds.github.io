 console.log("loaded Scripts")
 

 var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

findIP.then(ip => document.getElementById('save-ip').innerHTML = ip).catch(e => console.error(e))

 function fullscreen(game) {
     alert("Please note before continuing: ")
     alert("Please disable your ad blocker. UI may be not scaled properly. We only provide the games not make them! Please press ok if you agree")


 var request = new XMLHttpRequest();
  request.open("GET", "https://jackgrounds.github.io/Scripts/data-game.json", false);
            request.send(null)
        var dataGame = JSON.parse(request.responseText);


if (game != "unofficial-flappy-bird") {
   if (dataGame[game.replaceAll(" ", "-").toLowerCase()]) {
             var tempPage = `
            <html>
            <head>
            <title>Fullscreen | ${game}</title>
            <script>
            var iframe = document.querySelector('iframe');
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.body.style.cursor = 'none';
            </script>
            </head>
            <body style="padding: 0; margin: 0; overflow: hidden;">
            <iframe src="${dataGame[game.replaceAll(" ", "-").toLowerCase()]}" allowfullscreen="" width="100%" height="100%" frameborder="0"></iframe></html>
            </body>
      `;

      var w = window.open(''); 
    w.document.write(tempPage);
    }
    else {
            console.warn("Game doesn't exist in file!")
        }
}
else {
  alert("Game doesn't support fullscreen!")
}

   
   
 
 }

