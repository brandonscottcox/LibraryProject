function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id) 
}








function sortAccountsByLastName(accounts) {
  return accounts.sort((letter1,letter2)=>letter1.name.last.toLowerCase() > letter2.name.last.toLowerCase() ? 1:-1)
}











function getTotalNumberOfBorrows(account, books) {
  const { id: accountId } = account;

  return books.reduce((total, book) => total + book.borrows.filter(borrow => 
  borrow.id === accountId).reduce((accumulatorBorrows) => accumulatorBorrows + 1, 0), 0)
}







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





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
