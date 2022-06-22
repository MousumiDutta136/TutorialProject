import { Injectable } from '@angular/core';
import { BookData } from '../models/book.interface';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _books: BehaviorSubject<BookData[] | any>  = new BehaviorSubject(null);
  books$: Observable<BookData[]> = this._books.asObservable();
  private fullBookList!: BookData[];

  constructor() { }
  setBooks(books: BookData[]) {
    this._books.next(books);
  }

  filterBooks(text: string) {
    this._books.pipe(
      take(1)
    ).subscribe(books => {
      if (text === "") {
        this._books.next(this.fullBookList)
      } else {
        const filteredBooks = books.filter((book: BookData) => {
          const lowerCaseText = text.toLowerCase();
          const bookName = book.name.toLowerCase();
          return bookName.includes(lowerCaseText)
        })

        this._books.next(filteredBooks);
      }
    })
  }

  setFullBooksList(books: BookData[]) {
    this.fullBookList = books;
  }
}
