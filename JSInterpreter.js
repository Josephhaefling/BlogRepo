var intro = "Choose the sword, and you will join me. Choose the ball, and you join your mother, in death..."

var ghostfaceKillahLyrics =  "GhostFace Killah: Why is the sky blue? Why is water wet?.."
var killahPriestLyrics = "Killah Priest: I judge wisely as if nothing ever surprise me..."
var rZALyrics = "RZA: Hey yo, camouflage chameleon, ninjas scaling your building No time to grab the gun..."
var gZALyrics = "GZA: The banks a G, all CREAM downs a bet Money feed good, opposites off the set..."
var methodManLyrics = "Cash rules everything around me C.R.E.A.M. get the money..."
var reaKwonLyrics = "I grew up on the crime side, the New York Times side..."
var inspectahDeckLyrics = "It's been twenty-two long hard years, I'm still strugglin'..."

var numArtists = 4


function recordSong(songTitle) {
    
    console.log(`Intro: ${playIntro(songTitle)}`) 
    console.log(`Beat: ${playBeat(songTitle)}`)

    if (songTitle === "C.R.E.A.M.") {
        
        for (var i = 0; i < numArtists; i++) {
            console.log(spitRhymes(i, songTitle))
        }
    } else {
        for (var i = 0; i < numArtists; i++) {
            console.log(spitRhymes(i, songTitle))
        }
    }
}

function playIntro(songTitle) {

    if (songTitle === "C.R.E.A.M.") {
        intro = "Cash rules everything around me C.R.E.A.M. get the money..."
    } 
    return intro
}

function playBeat(songTitle) {

    var beat = "dun dun duuun...dun dun duuun...dun dun duuun"

    if(songTitle === "C.R.E.A.M.") {
       var beat = "dada daaa daa daa dada dada daaaa daaaa daaa"
    }
    return beat
}

function spitRhymes(artistIndex, songTitle) {
    var trackArtists = [ghostfaceKillahLyrics, killahPriestLyrics, rZALyrics, gZALyrics]

    if(songTitle === "C.R.E.A.M.") {
        trackArtists = [methodManLyrics, reaKwonLyrics, inspectahDeckLyrics]
    } 

    return trackArtists[artistIndex]
}

recordSong("C.R.E.A.M.")
recordSong()

// 2nd example
// var intro = "Choose the sword, and you will join me. Choose the ball, and you join your mother, in death..."

// var ghostfaceKillahLyrics =  "GhostFace Killah: Why is the sky blue? Why is water wet?.."
// var killahPriestLyrics = "Killah Priest: I judge wisely as if nothing ever surprise me..."
// var rZALyrics = "RZA: Hey yo, camouflage chameleon, ninjas scaling your building No time to grab the gun..."
// var gZALyrics = "GZA: The banks a G, all CREAM downs a bet Money feed good, opposites off the set..."
// var methodMan = "Cash rules everything around me C.R.E.A.M. get the money..."
// var reaKwon = "I grew up on the crime side, the New York Times side..."
// var inspectahDeck = "It's been twenty-two long hard years, I'm still strugglin'..."

// var numArtists = 4

// function recordSong(songTitle) {
    
//     console.log(`Intro: ${playIntro(songTitle)}`) 
//     console.log(`Beat: ${playBeat(songTitle)}`)

//     if (songTitle === "C.R.E.A.M.") {
//         var numArtists = 3
        
//         for (var i = 0; i < numArtists; i++) {
//             console.log(spitRhymes(i, songTitle))
//         }
//     } else {
//         for (var i = 0; i < numArtists; i++) {
//             console.log(spitRhymes(i, songTitle))
//         } 
//     }
// }

// function playIntro(songTitle) {
//     if (songTitle === "C.R.E.A.M.") {
//         intro = "Cash rules everything around me C.R.E.A.M. get the money..."
//     } 
//     return intro
// }

// function playBeat(songTitle) {

//     if(songTitle === "C.R.E.A.M.") {
//         var beat = "dada daaa daa daa dada dada daaaa daaaa daaa"
//     }
//     return beat
// }

// function spitRhymes(artistIndex, songTitle) {

//     var trackArtists = [ghostfaceKillahLyrics, killahPriestLyrics, rZALyrics, gZALyrics]

//     if(songTitle === "C.R.E.A.M.") {
//         let trackArtists = [methodMan, reaKwon, inspectahDeck]
//     } 

//     return trackArtists[artistIndex]
// }

// recordSong("C.R.E.A.M.")
// recordSong()

// 1st example
// var intro = "Choose the sword, and you will join me. Choose the ball, and you join your mother, in death..."
// var beat = "dun dun duuun...dun dun duuun...dun dun duuun"

// var ghostfaceKillahLyrics =  "GhostFace Killah: Why is the sky blue? Why is water wet?.."
// var killahPriestLyrics = "Killah Priest: I judge wisely as if nothing ever surprise me..."
// var rZALyrics = "RZA: Hey yo, camouflage chameleon, ninjas scaling your building No time to grab the gun..."
// var gZALyrics = "GZA: The banks a G, all CREAM downs a bet Money feed good, opposites off the set..."
// var methodMan = "Cash rules everything around me C.R.E.A.M. get the money..."
// var reaKwon = "I grew up on the crime side, the New York Times side..."
// var inspectahDeck = "It's been twenty-two long hard years, I'm still strugglin'..."

// var numArtists = 4

// function recordSong(songTitle) {
    
//     console.log(`Intro: ${playIntro(songTitle)}`) 
//     console.log(`Beat: ${playBeat(songTitle)}`)

//     if (songTitle === "C.R.E.A.M.") {
//         var numArtists = 3
        
//         for (var i = 0; i < numArtists; i++) {
//             console.log(spitRhymes(i, songTitle))
//         }
//     } else {
//         for (var i = 0; i < numArtists; i++) {
//             console.log(spitRhymes(i, songTitle))
//         }
//     }
// }

// function playIntro(songTitle) {
//     if (songTitle === "C.R.E.A.M.") {
//         intro = "Cash rules everything around me C.R.E.A.M. get the money..."
//     } 
//     return intro
// }

// function playBeat(songTitle) {
//     if(songTitle === "C.R.E.A.M.") {
//         beat = "dada daaa daa daa dada dada daaaa daaaa daaa"
//     }
//     return beat
// }

// function spitRhymes(artistIndex, songTitle) {

//     var trackArtists = [ghostfaceKillahLyrics, killahPriestLyrics, rZALyrics, gZALyrics]

//     if(songTitle === "C.R.E.A.M.") {
//         let trackArtists = [methodMan, reaKwon, inspectahDeck]
//     } 

//     return trackArtists[artistIndex]
// }

// recordSong("C.R.E.A.M.")
// recordSong()

// ```javascript
// var intro = "Choose the sword, and you will join me. Choose the ball, and you join your mother, in death..."
// // Oh wow, I think that is a sample from an old Kung Fu movie
// var beat = "dun dun duuun...dun dun duuun...dun dun duuun"
// // Wow that beat is dope!
// var ghostfaceKillahLyrics =  "GhostFace Killah: Why is the sky blue? Why is water wet?..."
// // Diggin those lyrics!
// var killahPriestLyrics = "Killah Priest: I judge wisely as if nothing ever surprise me..."
// // Wow that line is so smooth!
// var rZALyrics = "RZA: Hey yo, camouflage chameleon, ninjas scaling your building No time to grab the gun..."
// // Oh wow RZA is gonna kill it with these lyrics!
// var gZALyrics = "GZA: The banks a G, all CREAM downs a bet Money feed good, opposites off the set"
// // They don't call him the Genius for nothing.

// function playIntro() {
//     return intro
// }

// function playBeat() {
//     return beat
// }

// function spitRhymes(artistLyrics) {
//         return artistLyrics
// }

// function recordSong() {
//     console.log(`Intro: ${playIntro()}`) 
//     console.log(`Beat: ${playBeat()}`)
//     console.log(spitRhymes(ghostfaceKillah))
//     console.log(spitRhymes(killahPriest))
//     console.log(spitRhymes(rZA))
//     console.log(spitRhymes(gZA))
// }

// recordSong()
// // Alright lets run the recordSong function!!!
// ```