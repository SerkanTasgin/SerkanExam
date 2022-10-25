const names = new Array("Blindness","Moby-Dick", "Madam Hayat");
const author = new Array("Jose Saramago", "Herman Merville","Ahmet Altan")
const price = new Array("CH20","CH30", "CH25");
const stat = new Array("sold out", "in stock", "sold out")


const main = document.getElementById('list');
function createBookList(){
    const names = document.createElement('h1');
    const author= document.createElement('p');
    const price = document.createElement('p');
    const stat = document.createElement('p');
    const enter = document.createElement('a')
    enter.innerText = 'Enter'

    
    names.appendChild(author)
    names.appendChild(price)
    names.appendChild(stat)
    main.appendChild(names)
    return {names, author, price, stat}
}


function loadBooks(){
    for(let i=0;i<names.length;i++){
       let {names,author,price,stat} = createBookList();
       names.innerText = names[i];
       author.innerText = author[i];
       price.innerText = price[i];
       stat.innerText = stat[i];

    }
}

    function loads () {
        createBookList() 
        loadBooks()
    }

       