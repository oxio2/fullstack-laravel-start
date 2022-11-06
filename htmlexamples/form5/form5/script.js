const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var slides = document.getElementsByClassName("required");
    var missing = "";
    for (var i = 0; i < slides.length; i++) {
        const e = slides.item(i);
        if(e.classList.contains('missing'))
            e.classList.remove("missing");
        if(!e.value){
            missing += e.name + " , ";
            e.classList.add("missing");
        }
    }

    if(!missing)   
        form.submit();
    else
        alert("NON HAI MESSO " + missing);
});
