var intro = "Choose the sword, and you will join me. Choose the ball, and you join your mother, in death. You don't understand my words, but you must choose. So, come boy, choose life or death"
var beat = "dun dun duuun...dun dun duuun...dun dun duuun"

var ghostfaceKillahLyrics =  "GhostFace Killah: Why is the sky blue? Why is water wet? Why did Judas rat to Romans while Jesus slept?"
var killahPriestLyrics = "Killah Priest: I judge wisely as if nothing ever surprise me lounging between two pillars of ivory."
var rZALyrics = "RZA: Hey yo, camouflage chameleon, ninjas scaling your building No time to grab the gun, they already got your wife and children"
var gZALyrics = "GZA: The banks a G, all CREAM downs a bet Money feed good, opposites off the set"


function playIntro() {
    return intro
}

function playBeat() {
    return beat
}

function spitRhymes(artistLyrics) {
        return artistLyrics
}

function recordSong() {
    console.log(`Intro: ${playIntro()}`) 
    console.log(`Beat: ${playBeat()}`)
    console.log(spitRhymes(ghostfaceKillah))
    console.log(spitRhymes(killahPriest))
    console.log(spitRhymes(rZA))
    console.log(spitRhymes(gZA))
}

recordSong(fourthChamberArtists)


//howdy