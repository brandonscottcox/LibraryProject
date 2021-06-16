//-------------------------------------------------



function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id) 
}



//-------------------------------------------------




function sortAccountsByLastName(accounts) {
  return accounts.sort((letter1,letter2)=>letter1.name.last.toLowerCase() > letter2.name.last.toLowerCase() ? 1:-1)
}




//-------------------------------------------------


/*
function getBorrowsForAccount(accountId, borrows) {
  return borrows.filter((borrow)=> borrow.id === accountId)
}
*/




function getTotalNumberOfBorrows(account, books) {
  const { id: accountId } = account;

  return books.reduce((total, book) => total + book.borrows.filter(borrow => 
  borrow.id === accountId).reduce((accumulatorBorrows) => accumulatorBorrows + 1, 0), 0)
}


//filter and reduce
//books.reduce
//book.borrows.filter => borrow.id === account.id
//acc + books.borrow.filter.length
//return books.reduce

//DOES WORK
/*
function getTotalNumberOfBorrows(account, books) {
  const { id: accountId } = account;

  return books.reduce((total, book) => {
    return (total + book.borrows.filter(borrow => borrow.id === accountId).reduce((accumulatorBorrows) => accumulatorBorrows + 1, 0));
  }, 0);
}

                       or

function getTotalNumberOfBorrows(account, books) {
  const { id: accountId } = account;

  return books.reduce((total, book) => 
  total + book.borrows.filter(borrow => 
  borrow.id === accountId).reduce((accumulatorBorrows) => accumulatorBorrows + 1, 0), 0)
}
*/

/*
  let total = 0
  for (let book of books){
  const borrows = book.borrows
  const accountIdBorrows = borrows.filter((borrow)=> borrow.id === account.id)
  
  total += accountIdBorrows.length
  }
  
  return total
}
*/


/*  if (!account || books || books.length === 0) return 0;

const reduce = books.reduce((borrowCount, book)=> {
  return borrowCount + getBorrowsForAccount(account.id, book.borrows)
}, 0)

const filter = reduce.filter(x => x.books.borrows === account.id)
return filter
*/

/*
function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
}
*/




//-------------------------------------------------





function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  })
  booksTaken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return booksTaken;
}

//const filterBooks = books.filter => book.borrows[0].returned === false
// filterBooks.map => book => {...book, author: books.find => author => book.authorId === author.id}
/*
function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  })
  booksTaken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return booksTaken;
}
  */


//-------------------------------------------------



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
