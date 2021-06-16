//-------------------------------------------------


function getTotalBooksCount(books) {
  return books.length
}




//-------------------------------------------------


function getTotalAccountsCount(accounts) {
  return accounts.length
}





//-------------------------------------------------





const bookFunctions = require('./books.js');

function getBooksBorrowedCount(books) {
  return bookFunctions.partitionBooksByBorrowedStatus(books)[0].length
}


//-------------------------------------------------





function getMostCommonGenres(books) {
  const genreCount = books.reduce((genres, book)=> {
    if (book.genre in genres) {
      genres[book.genre]++
    }else{
      genres[book.genre] =1
    }
    return genres
}, {})
const popularGenres = Object.keys(genreCount).map((key)=> ({name: key, count: genreCount[key]}))
popularGenres.sort((bookA, bookB) => bookB.count - bookA.count)
return popularGenres.slice(0,5)
}






  

/*const genreCount = books.reduce((genres, book)=> {
  //if book.genre in genres => genres[book.genre] + 1
  //else genres[book.genre] =1
  //return genres
  ), {}

=>{"Travel":3, "Young Adult": 6}

*/
//const popularGenres = Object.keys(genreCount).map((key)=> ({name: key, count: genreCount[key]}))
//popularGenres.sort((bookA, bookB) => descendingSort)
//return popularGenres => slice =>5





/*
  let countObj = {};
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
  })
  */




//-------------------------------------------------



function getMostPopularBooks(books) {
  const mapBooksToNameAndCount = books.map((book)=> ({name: book.title, count: book.borrows.length}))
  mapBooksToNameAndCount.sort((bookA, bookB)=> bookB.count - bookA.count)
  return mapBooksToNameAndCount.slice(0, 5)
}



//-------------------------------------------------
function _sortObjectByValues(obj){
  const keys = Object.keys(obj)
  
  return keys.sort((keyA, keyB)=>{
    if(obj[keyA]> obj[keyB]){
      return -1
    }else if(obj[keyB]>obj[keyA]){
      return 1
    }else{
      return 0
    }
  })
}
  



function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, {authorId,borrows})=>{
    if(acc[authorId]){
      acc[authorId].push(borrows.length)
      }else{
        acc[authorId]=[borrows.length]
      }
      return acc
  }, {})
  for (let id in count){
    const sum = count[id].reduce((a,b)=>a+b)
    count[id]=sum
  }
  const sorted = _sortObjectByValues(count)
  let arr = sorted.map((authorId)=>{
    const {name:{first, last}}= authors.find(({id})=>id===Number(authorId))
    let name = `${first} ${last}`
    return {name, count:count[authorId]}
  }).slice(0,5)
return arr
}




//-------------------------------------------------






module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
