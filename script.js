console.log("dom loaded")
let notes;
let saveButton = document.getElementById("save")
let inputField = document.getElementById("input")
saveButton.addEventListener("click", function(){
    
     notes = inputField.innerHTML.replace(/<br\s*\/?>/gi, "").trim();
    if(notes){
    localStorage.removeItem("notes")
    localStorage.setItem("notes",notes)
    } else{
        alert("Empty!!")
        return
    }
})
window.addEventListener("load", function() {
    let savedNotes = localStorage.getItem("notes")
    console.log(savedNotes)
    inputField.innerHTML = savedNotes
    inputField.focus()
})
