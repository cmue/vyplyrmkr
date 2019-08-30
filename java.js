// preview param must be checked if Pomo
function check() {
    document.getElementById("preview").checked = true;
}

// paw button provides uuid of doggo video
function example_uuid() {
    document.getElementById("player_id").value = "y8b3o9GRfs3aCp5aHJCf6L";
    //clear out any selected players in Players list
    document.getElementById("players").selectedIndex = -1; 
}

// set uuid for Players select options
//special case for Personalized video
function changeFunc() {
    var selectBox = document.getElementById("players");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue === "8xQUekqbypXJ8qdvMm6HRq") {
        document.getElementById("player_id").value = selectedValue;
        document.getElementById("custom_id").value = "Hk1vgA98GaHwTK6Af8rGev";
    } else {
        document.getElementById("player_id").value = selectedValue;
        document.getElementById("custom_id").value = null;
    }
}

// function will loop through all input tags and create
// url string from checked checkboxes. Also grab strings for params
function checkbox_test() {
    var extraParam = '';

    var chap = document.getElementById("chapter").value;
    if (chap) {
        extraParam += '&chapter=' + chap
    }
    var video_id = document.getElementById("video_id").value;
    if (video_id) {
        extraParam += '&video_id=' + video_id
    }
    var second = document.getElementById("seconds").value;
    if (second) {
        extraParam += '&second=' + second
    }
    var redirect = document.getElementById("redirect_url").value;
    if (redirect) {
        extraParam += "&redirect_url=" + redirect
    }
    var cc = document.getElementById("cc").value;
    if (cc) {
        extraParam += "&cc=" + cc
    }
    var type = document.getElementById("type").value;
    if (type) {
        extraParam += "&type=" + type
    }
    var quality = document.getElementById("quality").value;
    if (quality) {
        extraParam += "&quality=" + quality
    }
    var custom_id = document.getElementById("custom_id").value;
    if (custom_id) {
        extraParam += "&custom_id=" + custom_id
    }
    var env = document.getElementById("enviro_selected").value;
    var uuid = document.getElementById("player_id").value;
    var counter = 0, // counter for checked checkboxes
        i = 0,       // loop variable
        url = '',    // final url string
        // get a collection of objects with the specified 'input' TAGNAME
        input_obj = document.getElementsByTagName('input');
    // loop through all collected objects
    for (i = 0; i < input_obj.length; i++) {
        // if input object is checkbox and checkbox is checked then ...
        if (input_obj[i].type === 'checkbox' && input_obj[i].checked === true) {
            // ... increase counter and concatenate checkbox value to the url string
            counter++;
            url = url + '&' + input_obj[i].value;
        }
    }
    // check for uuid & enviro then open url string or message to enter uuid/enviro
    if (uuid !== null && uuid !== '' && env !== null && env !== '') {
        // remove first "&" from the generated url string
        url = url.substr(1);
        // check if v3 or not
        v3 = document.getElementById('v3');
        if (v3.checked === true) {
            window.open('https://embed-staging.vystaging.com/share/' + uuid + '?' + url + '&upstream_subdomain=' + env + extraParam);
        }
        else {
            window.open('https://fidget-tower.vidyard.com/?https://play-' + env + '.vidyard.com/' + uuid + '?' + url + extraParam);
        }
    }
    else {
        alert('Please enter your player UUID and set staging environment.');
    }
}