var mockDb = [];

function submit() {
   //store inputted data into variables
    var titleEntry = document.getElementById("title");
    var authorEntry = document.getElementById("author");
    var genreEntry = document.getElementById("genre");
    var descriptionEntry = document.getElementById("description");
    //define variables for where the new list will be input

    var obj = {};
    obj.title = titleEntry.value;
    obj.author = authorEntry.value;
    obj.genre = genreEntry.value;
    obj.desc = descriptionEntry.value;

    mockDb.push(obj);

    populateList();

}

function populateList() {
    // remove everything and repopulate
    var titleListItem = document.getElementById("titleContentList");
    var authorListItem = document.getElementById("authorContentList");
    var genreListItem = document.getElementById("genreContentList");
    var descriptionListItem = document.getElementById("descriptionContentList"); 
    
    if (titleListItem.children.length) {
        [...titleListItem.children].forEach(item => {
            titleListItem.removeChild(item);
        });
        [...authorListItem.children].forEach(item => {
            authorListItem.removeChild(item);
        });
        [...genreListItem.children].forEach(item => {
            genreListItem.removeChild(item);
        });
        [...descriptionListItem.children].forEach(item => {
            descriptionListItem.removeChild(item);
        });
    };
    
    mockDb.forEach(item => {
        //create the new element
       var li1 = document.createElement("li");
       var li2 = document.createElement("li");
       var li3 = document.createElement("li");
       var li4 = document.createElement("li");

       //append the new element into the webpage
   
      li1.innerHTML = item.title;
      titleListItem.appendChild(li1)
      li1.className += "info"
      li2.innerHTML = item.author;
      authorListItem.appendChild(li2)
      li2.className += "info"
      li3.innerHTML = item.genre;
      genreListItem.appendChild(li3)
      li3.className += "info"
      li4.innerHTML = item.desc;
      descriptionListItem.appendChild(li4)
      li4.className += "info"
    });
    
};

function sortAuthor(){
    mockDb.sort((a, b) => {
        if (b.author > a.author ) return -1;
        else return 1;
    })

    populateList();
}
function sortTitle(){
    mockDb.sort((a, b) => {
        if (b.title > a.title ) return -1;
        else return 1;
    })

    populateList();
}
function sortGenre(){
    mockDb.sort((a, b) => {
        if (b.genre > a.genre ) return -1;
        else return 1;
    })

    populateList();
}
// sortTitle(){

// }

// sortGenre(){

// }