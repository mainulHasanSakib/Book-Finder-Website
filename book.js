// Search field
const searchBook= () =>{
    const searchField=document.getElementById('search-field');
    const searchText= searchField.value;
    // search error message 
    if(searchText ===''){
      const error=document.getElementById('error');
      error.innerHTML=`
      <h2 class="text-center text-light">Please search A BOOK NAME!!!</h2>`
      return;
      
    }
    else{
      error.innerHTML='';
    }
    searchField.value= '';
    // getting data 
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => {
      
      displaySearchResult(data.docs)})
    
}
//  showing data
const displaySearchResult= docs => {
    const searchResult= document.getElementById('searchResult');
   searchResult.innerHTML='';

   
  
   const resultNumber=document.getElementById('resultNumber');
   resultNumber.innerHTML=`
   <h2 class="text-center text-light">Total Book Found : ${docs.length}</h2>` 
  //  no result 
   if(docs.status ===404){
   const error=document.getElementById('error');
      error.innerHTML=`
      <h2 class="text-center text-light">No Result Found!!!</h2>`
      return;
    }


    docs.forEach(book => {
      
       const div=document.createElement('div');
       div.classList.add('col');
       div.innerHTML=`
       
       <div class="card" style="width: 18rem;">
  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Book Title : ${book.title}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item">Author : ${book.author_name }</li>
    <li class="list-group-item">Publisher : ${book.publisher }</li>
    <li class="list-group-item">Publish Date: ${book.first_publish_year}</li>
    
  </ul>
  
</div>`
searchResult.appendChild(div)
   }) 

   
}