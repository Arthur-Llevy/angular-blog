import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.scss'
})
export class MenuTitleComponent {
  @Input() title: string = '';
}
