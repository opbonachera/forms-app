import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  public reactiveMenu : MenuItem[] = [
    {'title':'Basics', 'route':'reactive/basic'},
    {'title':'Dynamic', 'route':'reactive/dynamic'},
    {'title':'Switches', 'route':'reactive/switches'},
  ]

  public authMenu : MenuItem[] = [
    { 'title': 'Register', 'route':'auth/signup'}
  ]
}
