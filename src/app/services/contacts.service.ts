import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient,private firestore:AngularFirestore) {}

  getContacts(){


    return this.http.get('/assets/data/contacts.json');
  }
}
