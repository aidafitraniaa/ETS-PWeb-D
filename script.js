let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let output = "";
        for(let item of data){
            output+= `
            <div class="data">
            <p class="author"></p>
            <p class="country"></p>
            <img src= "${item.image}" alt ="${item.image}">
            <p class="language"></p>
            <link url= "${item.url}" alt ="${item.url}">
            <p class="pages"></p>
            <p class="title"></p>
            <p class="year"></p>

            </div>

            ;`
        }
        document.querySelector(".data").innerHTML = output;
    }
}
