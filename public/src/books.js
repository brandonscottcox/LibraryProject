//-------------------------------------------------

function findById(array, id){
  return array.find((element) => element.id === id)
}



function findAuthorById(authors, id) {
  return findById(authors, id)
}

//return authors.find(author => author.id === id)




//-------------------------------------------------






function findBookById(books, id) {
  return books.find(book=> book.id === id)
}



//-------------------------------------------------




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



//first array of borrowed books => let borrowed =[]
//second array of borrow books => let avialable = []
//loop through array check if book is borrowed by checking book.borrows[0].returned
//if returned available.push
//if not returned borrowed.push
//return [borrowed, available]

//-------------------------------------------------




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
    //return borrows.map => borrow => ({...borrow, ...findAccountById(borrow.id)})
  }

  /*const capped = book.borrows.slice(0,10)
const combinedBook = []
for (let borrow of capped){
const account =findAccount(accounts, borrow.id)
const combined = {
  ...borrow,
  ...account
}
combinedBook.push(combined)
}
return combinedBook
}
*/


//borrows = book.borrows => cap to 10 by using slice
//return borrows.map => borrow => ({...borrow, ...accountFunctions.findAccountById(borrow.id)})


/*
-------------------------------------------
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned })=> {
    const account = accounts.find(account => account.id === id);
    return {...account,returned};
  });

  return borrowers.sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.id;
      const companyB = borrowerB.id;
      return companyA.localeCompare(companyB);
    }).slice(0, 10);
}
-------------------------------------------


function getBorrowersForBook(book, accounts) {
  // `borrows` is a list of transactions, each of type { id: string, returned: true }
  const { borrows } = book;

  const borrowers = borrows.map(({ id, returned })=> {
    // find account that matches the borrower's ID
    const account = accounts.find(account => account.id === id);

    // return the matching account, along with the `returned` info
    return {
      ...account,
      returned,
    };
  });

  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0, 10);
}
*/


//-------------------------------------------------


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
