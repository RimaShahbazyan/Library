
{

    let x = new StepRange (2, 100, 3);
    for (let i of x)
        console.log (i);
}
{
    function Book (id, title, author,content, pageCount) {
        return{
            id,
            title,
            author,
            pageCount,
            content,
            isTaken:false,
        }
    }
    function Employee (firstName, lastName, phone, email) {
        return{
            firstName,
            lastName,
            phone,
            email,
        }
    }
    class  Library  {
        constructor (books, employees){
            this.books = books;
            this.employees = employees;
        };
        registerBook(book) {
            this.books.push(book);
        }
        addEmployee(employee){
            this.employees.push(employee);
        }
        removeEmployee(employeeId)
        {
            for (let employee of this.employees)
            {
                if(employeeId === employee)
                    employee = [ ...this.employees.slice(0, this.employees.findIndex(employee)),
                        ...this.employees.slice(this.employees.findIndex(employee)+1+this.employees.length)]
            }
        }

        getAllAuthors(){
            let authors = new Set();
            for(let i in this.books)
            {
                authors.add(i.author)
            }
            return authors;
        }
        getBooksOfAuthor(author)
        {
            let booksOfAuthor = [];
            for(let i in this.books)
            {
                if(i.author === author)
                    booksOfAuthor.push(i);
            }
            return booksOfAuthor;
        }
        authorReport()
        {
            let allAuthors= this.getAllAuthors();
            for ( let i of allAuthors)
                allAuthors.map(()=> this.getBooksOfAuthor(this).length);
        }
        takeBook(bookId)
        {
            for (let book of this.books)
                if (book.id === bookId)
                   book.isTaken = true;
        }
        returnBook(bookId)
        {
            for (let book of this.books)
                if (book.id === bookId)
                    book.isTaken = false;
        }
        getAllTakenBooks()
        {
            let arr = [];
            for (let book of this.books)
                if (book.isTaken)
                    arr.push(book);
            return arr;
        }
        searchBookByContent(contentPart)
        {
            let arr= [];
            for(let book in this.books )
                if(book.content.includes(contentPart))
                    arr.push(book);
            return arr;
        }

    };

    function nameGenerator (n) {

        let chars = "abcdefghijklmnopqrstuvwxuz";
        let name = "";
        for (let i = 0; i < n; i++) {
            name += chars[(Math.random () * 26).toFixed (0)];
        }
        return name;

    }
}
