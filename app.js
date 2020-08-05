const deployedURL = null // "https://selene31.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//Global variables 


//Functions
//displaying books

const getBooks = async ()=>{ 
    const response = await fetch(`${URL}/books`)
    const data = await response.json()
    console.log(data)

    data.forEach((book)=>{
        const $option =$('<option>').attr('value', book._id).text(book.title)
        $('#selectbook').append($option)
          console.log(book.title)
    })

}
getBooks()



//displaying poems

const allPoems = async ()=>{
    const response = await fetch(`${URL}/poems`)
    const data = await response.json()
    console.log(data)

    data.forEach((poem)=>{
        const $option =$('<option>').attr('value', poem._id).text(poem.title)
        $('#selectpoem').append($option)
         console.log(poem.title)
    })
}
allPoems()



//display quotes 
const allQuotes = async ()=>{
    const response = await fetch(`${URL}/quotes`)
    const data = await response.json()
    console.log(data)

    data.forEach((quote)=>{
        const $div =$('<div class="quotediv">').text(quote.updatedAt)
        $('.quotesshowcase').append($div);

        const $img = $(`<img src="${quote.quoteURL}">`).addClass("userquotes")
        $('.quotediv').append($img)
    })
}
allQuotes()



//display writers 
const allWriters = async ()=>{
    const response = await fetch(`${URL}/writers`)
    const data = await response.json()
    console.log(data)

    data.forEach((writer)=>{
        const $div =$('<div class="quotediv">').text(quote.updatedAt)
        $('.quotesshowcase').append($div);

        const $img = $(`<img src="${quote.quoteURL}">`).addClass("userquotes")
        $('.quotediv').append($img)
    })
}
allQuotes()