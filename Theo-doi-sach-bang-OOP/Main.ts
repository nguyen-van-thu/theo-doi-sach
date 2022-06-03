import {Book} from "./Book";

let book1 = new Book('Tam Quốc Diễn Nghĩa','La Quán Trung', false);
let book2 = new Book('Truyện Kiều','Nguyễn Du', true);
let books: Book[] = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" Của ' + book.author;
    if (book.alreadyRead) {
        console.log('Sách đã đọc "' + bookInfo);
    } else {
        console.log('Sách bạn cần đọc  "' + bookInfo);
    }
}