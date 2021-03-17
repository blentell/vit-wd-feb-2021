function submit() {
    var titleEntry = document.getElementById("title");
    var authorEntry = document.getElementById("author");
    var genreEntry = document.getElementById("genre");
    var descriptionEntry = document.getElementById("description");
    var ul = document.getElementById("mainBookList");
    var li = document.createElement("li");
   
    li.innerHTML = (titleEntry.value) + "&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp" +(authorEntry.value)+ "&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+(genreEntry.value)+ "&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+(descriptionEntry.value);
    ul.appendChild(li)
    
}