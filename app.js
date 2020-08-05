const deployedURL = null // "https://selene31.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//Global variables 
const deleteButton = document.getElementById('delete')
let quoteBeingEdited = ''

//Functions

/*------------------------------------------------------------------------------------------------------------*/
//displaying books

const getBooks = async ()=>{ 
    const response = await fetch(`${URL}/books`)
    const data = await response.json()
    //console.log(data)

    data.forEach((book)=>{
        const $option =$('<option>').attr('value', book._id).text(book.title)
        $('#selectbook').append($option)
         // console.log(book.title)
    })

}
getBooks()

// display message when selecting a book


/*------------------------------------------------------------------------------------------------------------*/

//displaying poems

const allPoems = async ()=>{
    const response = await fetch(`${URL}/poems`)
    const data = await response.json()
    //console.log(data)

    data.forEach((poem)=>{
        const $option =$('<option>').attr('value', poem._id).text(poem.title)
        $('#selectpoem').append($option)
         //console.log(poem.title)
    })
}
allPoems()

/*------------------------------------------------------------------------------------------------------------*/

//display quotes 
const allQuotes = async ()=>{
    const response = await fetch(`${URL}/quotes`)
    const data = await response.json()
    console.log(data)

    $('.quotesshowcase').empty()

    data.forEach((quote)=>{
        const $div =$('<div class="quotediv">')
        const $img = $(`<img src="${quote.quoteURL}">`).addClass("userquotes").attr('id',quote._id)
        $div.append($img)
        $('.quotesshowcase').append($div);
    })
}
allQuotes()

//creating quotes*/

const createQuote = async()=>{
    const url= $('#url').val() 
    const newQuote = {
        quoteURL:url
    }

    const response = await fetch(`${URL}/quotes`,{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newQuote)
    })
    console.log(await response)
    allQuotes()
    $('#url').val('')
    }

$('#create').on('click', createQuote)

//deleting quotes*/

const deleteQuote = async (event) => {



    const response = await fetch(`${URL}/quotes/${event.target.id}`, {
      method: "delete"
    })

  }
  $('#delete').on('click', deleteQuote)
  $('#url').on()


// Edit a Quote 





/*------------------------------------------------------------------------------------------------------------*/

//display writers 
const allWriters = async ()=>{
    const response = await fetch(`${URL}/writers`)
    const data = await response.json()
    console.log(data)

    data.forEach((writer)=>{
        
        const $img = $(`<img src="${writer.portrait}">`).addClass("imgauthor")
        $('.allwriters').append($img)
        //console.log(writer.portrait)  
    })
}
allWriters()

/*------------------------------------------------------------------------------------------------------------*/




/*const allFlip = async ()=>{
    const response = await fetch(`${URL}/writers`)
    const data = await response.json()
    console.log(data)

    data.forEach((writer)=>{
        const $h6 = $('<h2 id="nameofauthor">').text(writer.name)
        $(".flip-box-back").append($h6)
})
}
allFlip()*/