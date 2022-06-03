"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book('Tam Quốc Diễn Nghĩa', 'La Quán Trung', false);
var book2 = new Book_1.Book('Truyện Kiều', 'Nguyễn Du', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" Của ' + book.author;
    if (book.alreadyRead) {
        console.log('Sách đã đọc "' + bookInfo);
    }
    else {
        console.log('Sách bạn cần đọc  "' + bookInfo);
    }
}
