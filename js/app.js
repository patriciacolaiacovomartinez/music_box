//select you elements or define your variables
var keys = document.querySelectorAll(".key");
console.log(keys)
var notes = {
    cKey: document.querySelector ('#cAudio'),
    dKey: document.querySelector ('#dAudio'),
    eKey: document.querySelector ('#eAudio'),
    fKey: document.querySelector ('#fAudio'),
    gKey: document.querySelector ('#gAudio'),
    aKey: document.querySelector ('#aAudio'),
    bKey: document.querySelector ('#bAudio')
}





//define your functions
function playNote(key){
    // "console.log(key)"
    notes[key].currentTime = 0
    notes[key].play()
}





//call you functions and/or add event listeners
keys.forEach(function(key){
    key.addEventListener('click', function(){
        playNote(key.id)
    })

});

document.addEventListener('keydown', function(event){
    if(event.key === "z"){
        playNote("cKey")
    }
    
    if(event.key === "x"){
        playNote("dKey")
    }
    if(event.key === "c"){
        playNote("eKey")
    }
    if(event.key === "v"){
        playNote("fKey")
    }
    if(event.key === "b"){
        playNote("gKey")
    }
    if(event.key === "n"){
        playNote("aKey")
    }
    if(event.key === "m"){
        playNote("bKey")
    }
    
})

