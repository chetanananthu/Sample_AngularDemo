import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  newBookTitle:string="";
  newBookAuthor:string="";
  books:Book []=[];

  ngOnInit(){
    let savedBooks=localStorage.getItem("books");
    this.books=savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    let newEntry:Book ={
      id:Date.now(),
      title:this.newBookTitle,
      author:this.newBookAuthor
    }
    this.books.push(newEntry);
    localStorage.setItem("books",JSON.stringify(this.books));
    this.newBookTitle="";
    this.newBookAuthor="";
  }

  deleteBook(index:number){
    this.books.splice(index,1);
    localStorage.setItem("books",JSON.stringify(this.books));
  }

}
