const deployedURL = null // "https://selene31.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

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

const showBook = async ()=>{

    let theBook= $("#selectbook option:selected" ).val()
    const response = await fetch(`${URL}/books/${theBook}`)
    const data = await response.json()
    console.log(data)

    const outcomeBook = $('<p id="textbook">').text(`${data.title}`)
    const outcomeBook2 = $('<p id="author">').text(`written by: ${data.writer.name}`)
    const outcomeBook3 = $("<p id='dob'>").text(` ${data.writer.bio.dob}`)
    const outcomeBook5 = $("<p id='pages'>").text(`Number of Pages: ${data.pages}`)
    const outcomeBook6 = $("<p id='biowriter'>").text(`${data.writer.bio.description}`)

    $('.infofrombook').empty()
    $('.infofrombook').append(outcomeBook)
    $('.infofrombook').append(outcomeBook2)
    $('.infofrombook').append(outcomeBook3)
    $('.infofrombook').append(outcomeBook5)
    $('.infofrombook').append(outcomeBook6)
   

}
    $('.createbuttonbook').on('click', showBook)

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

// display message when selecting a poem
const showPoem = async ()=>{

    let thePoem= $("#selectpoem option:selected" ).val()
    const response = await fetch(`${URL}/poems/${thePoem}`)
    const data = await response.json()
    console.log(data)

    const outcomePoem = $('<p id="textbook">').text(`${data.title}`)
    const outcomePoem2 = $('<p id="author">').text(`written by: ${data.writer.name}`)
    const outcomePoem3 = $('<p id="dob">').text(` ${data.writer.bio.dob}`)
    const outcomePoem4 = $('<p id="biowriter">').text(`${data.writer.bio.description}`)

    $('.infofrombook').empty()
    $('.infofrombook').append(outcomePoem)
    $('.infofrombook').append(outcomePoem2)
    $('.infofrombook').append(outcomePoem3)
    $('.infofrombook').append(outcomePoem4)
}
$('#createbuttonpoem').on('click', showPoem)

/*------------------------------------------------------------------------------------------------------------*/

//display quotes 
const allQuotes = async ()=>{
    const response = await fetch(`${URL}/quotes`)
    const data = await response.json()
    console.log(data)

    $('.quotesshowcase').empty()

    data.forEach((quote)=>{
        const $div =$('<div class="quotediv">')
        const $img = $(`<img src="${quote.quoteURL}">`)
            .addClass("userquotes")
            .attr('id',quote._id)
            .on('click', getTheId)

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

      if ($('#delete').attr('data-quoteid') !== '') {
        const response = await fetch(`${URL}/quotes/${event.target.dataset.quoteid}`, {
         method: "delete"
         })
        
          allQuotes()
          $('#url').val('')
          $('#delete').attr('data-quoteid', '')
      }
  }

  $('#delete').on('click', deleteQuote )

   const getTheId = async (event) =>{

       await $('#url').val(event.target.src)
       console.log(event.target)
       console.log(event.target.id)

       $('#delete').attr('data-quoteid', event.target.id)
       $('.edit').attr('data-quoteid', event.target.id)
   }

// Edit/Update a Quote 

  const updateQuote= async(event) => {
      console.log(event.target)
 
      const updatedQuote = {
        quoteURL: $('#url').val()
      }
      const response = await fetch(`${URL}/quotes/${event.target.dataset.quoteid}`,{
        method: "put",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedQuote)
      })

      console.log(await response)
      allQuotes()
     $('#url').val('')
     }
 $('.edit').on('click', updateQuote)
 
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

