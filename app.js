const deployedURL = null // "https://selene31.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//Global variables 


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
    //getTheId()
    const response = await fetch(`${URL}/quotes/${event.target.id}`, {
    method: "delete"
    })
    event.target.remove()
}

// const getTheId = async (event) =>{

//     await $('#url').val(event.target.attr('src'))
//     console.log(event.target)
// }

$('#quoteshow').on('click', deleteQuote)


// Edit a Quote 

// const editQuote= async(event) => {

//     const updatingQuote= {
//       
//       quoteURL: $nameEditInput.val(),
//     }
//     //make our put request
//     const responde = await fetch(`${URL}/rat/${event.target.id}`,{
//       method: "put",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(updatedRat)
//     })
    // const getTheId = async (event) =>{

    //     await $('#url').val(event.target.attr('src'))
    //     console.log(event.target)
    // }


/*------------------------------------------------------------------------------------------------------------*/

//display writers 
const allWriters = async ()=>{
    const response = await fetch(`${URL}/writers`)
    const data = await response.json()
    console.log(data)

    data.forEach((writer)=>{
        
        const $div =$('<div class="picdiv">')
        const $img = $(`<img src="${writer.portrait}">`).addClass("imgauthor")
        $div.append($img)
        $('.allwriters').append($div)
        //console.log(writer.portrait)  
    })
}
allWriters()
/*----------------------------------------------------------------------------------------*/


$('.createbuttonpoem').on('click', ()=>{
    let thePoem= $("#selectpoem option:selected" ).text()
    const outcomePoem = $('<p>').text(`You have chosen ${thePoem}`)
    $('specificpoem').append(outcomePoem)
}) 



$('.createbuttonbook').on('click', ()=>{
    let theBook= $("#selectbook option:selected" ).text()
    const outcomeBook = $('<p>').text(`You have chosen ${theBook}`)
    $('#specificbook').append(outcomeBook)
  
})  
