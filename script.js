let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let output = "";
        for(let item of data){
            output += `
            <div class="data">
              <p class="author">${item.author}</p>
              <p class="country">${item.country}</p>
              <img src="${item.image}" alt="${item.title}">
              <p class="language">${item.language}</p>
              <a href="${item.url}" target="_blank" class="link">Link</a>
              <p class="pages">${item.pages} pages</p>
              <p class="title">${item.title}</p>
              <p class="year">Published in ${item.year}</p>
            </div>`;
        }
        document.querySelector(".data").innerHTML = output;
    }
}
