const form = document.forms["form-iscrizione"];
let dialog = undefined;

dialog = document.querySelector('dialog');

document.addEventListener("DOMContentLoaded", ()=>{
	dialog = document.querySelector('dialog');
	document.querySelector(".help-icon").addEventListener("click", toggleDialog);
})

function toggleDialog() {
	if(!dialog) {
		alert("Dialog non trovato");
		return;
	}
	if(dialog.open) {
		dialog.close();
	} else {
		dialog.showModal();
	}
}

form.addEventListener('submit', (event) => {
    
    // stop form submission
    event.preventDefault();
});


function isAlpha(field) {
    return function(obj, res) {
        if("/^[a-z]+$/i".test(obj[field]))
            res[field] = "Ammessi solo caratteri alfabetici.";
    }
}

function isAlphaNumeric(field) {
    return function(obj, res) {
        if("/^[a-z0-9]+$/i".test(obj[field]))
            res[field] = "Ammessi solo caratteri alfanumerici.";
    }
}

