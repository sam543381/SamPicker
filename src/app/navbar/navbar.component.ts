import { Component, OnInit } from '@angular/core';

export interface NavbarItem {

  title: string
  route?: string
  
  header?: boolean
  divider?: boolean

  children?: NavbarItem[]

}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = new Array<NavbarItem>()

  addItem(item: NavbarItem) {
    this.items.push(item)
  }

  constructor() { }

  ngOnInit() {
    this.addItem({ title: 'Sam picker', route: '' })
  }

}
