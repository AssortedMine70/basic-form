const form = document.forms["form-iscrizione"];
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
        if("/^[a-z]+$/i".test(obj[field]))
            res[field] = "Ammessi solo caratteri alfanumerici.";
    }
}