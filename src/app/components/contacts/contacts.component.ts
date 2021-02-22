import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from './../../services/contacts.service';
import { faPhone, faMapMarked,faUserTag } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  page_title:string;
  page_icon:string
  contactsIcon = faPhone;
  locationIcon = faMapMarked;
  roleIcon = faUserTag;
  contacts: Contact[];
  constructor(private contactService:ContactsService) { }

  ngOnInit(): void {
    this.page_title = 'Contacts';
    this.page_icon = 'fas fa-phone'
    this.contacts =[]
    
    this.contactService.getContacts().subscribe((contacts_list:Contact[])=>{
    this.contacts = _.sortBy(contacts_list,['first_name']);
      
      });
  }

}
