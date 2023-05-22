 console.log("global-announcements-loaded")

var globalAnnouncement = document.getElementById("global-announcement")
if (globalAnnouncement == null) {
    console.log("GlobalAnnouncement is null");
} else {
const announcementBoolean = true


if (announcementBoolean == true) {
globalAnnouncement.style = "width: 100%; height: auto;"


var announcement = document.createElement("section");
announcement.style = "text-align: center; padding: 10px; width: 100%; height: 100%;"
globalAnnouncement.appendChild(announcement)

var announceTextHead = document.createElement("h1")
announceTextHead.innerText = "**Global Announcement**"
announceTextHead.style = "font-size: 2rem"
announcement.append(announceTextHead)

var announceText = document.createElement("h3")
announceText.innerText = "We have important information! Ads are Coming! We should have ads soon to monetize our website. The more we monetize the more games we provide."
announceText.style = "font-size: 1.2rem"
announcement.append(announceText)
}
else {
 globalAnnouncement.remove()

}
}

