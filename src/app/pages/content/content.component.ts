import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../datas/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }

  private id: string | null = '';

  setValuesToComponent(id: string): void {
    const result = data.filter(article => article.id.toString() === this.id)[0];
    this.content = result.description;
    this.imageUrl = result.imageUrl;
    this.title = result.title;
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValuesToComponent(this.id!);
  }

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

}


