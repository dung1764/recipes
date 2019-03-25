import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  /**
   * 初始化, 訂閱route服務, 即時獲的url參數
   */
  ngOnInit() {
  	this.route.params
  	.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
  			this.editMode = params['id'] != null;
  		}
  	);
  }

}
