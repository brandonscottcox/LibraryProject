function findById(array, id){
  return array.find((element) => element.id === id)
}



function findAuthorById(authors, id) {
  return findById(authors, id)
}






function findBookById(books, id) {
  return books.find(book=> book.id === id)
}




function partitionBooksByBorrowedStatus(books) {
  let borrowed = []
  let available = []
  for (let loop of books){
    if (loop.borrows[0].returned === true) {
      available.push(loop)
    }
    if (loop.borrows[0].returned === false){
      borrowed.push(loop)
    }
  }
return [borrowed, available]
}






const findAccount = require('./accounts.js').findAccountById;


function getBorrowersForBook(book, accounts) {
    const cappedBorrows = book.borrows.slice(0, 10);
    const combinedBorrows = cappedBorrows.map((borrow) => {
      const account = findAccount(accounts, borrow.id);
      const combined = {
        ...borrow,
        ...account,
      };
  
      return combined;
    });
  
    return combinedBorrows;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
