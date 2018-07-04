import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fields = new Array<{ value: string, id: number }>()
  picked: string = undefined

  constructor() { }

  ngOnInit() {
    this.addField()
  }

  submit() {
    let elements = document.getElementsByClassName('name-input')
    let names = []

    for (let i = 0; i < elements.length; i++) {
      let el = elements.item(i) as HTMLInputElement
      if (el.value) names.push(el.value)
    }

    this.picked = names[Math.floor(Math.random() * names.length)]

  }

  addField() {
    this.fields.push({
      value: null,
      id: Math.floor(Math.random() * 10000)
    })
    this.picked = undefined
  }

  removeField(id: number) {
    let index = this.fields.findIndex((val, i) => val.id === id)
    this.fields.splice(index, 1)
    this.picked = undefined
  }

}
