import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /**
   * 設定材料清單變數
   * @type {Ingredient[]}
   */
  ingredients: Ingredient[];

  /**
   * 服務訂閱
   */
  sLsubscription: Subscription;

  /**
   * 構造函數, 注入ShoppingListService
   * @param {ShoppingListService} private shoppingListService [description]
   */
  constructor(private shoppingListService: ShoppingListService) {
  }

  /**
   * 初始化:設定初始材料資料, 並且訂閱材料改變的服務
   */
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.sLsubscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  /**
   * shopping 清單item click 送出
   * @param index 
   */
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }


  /**
   * 離開component
   */
  ngOnDestroy() {
    // 移除訂閱
    this.sLsubscription.unsubscribe();
  }


}
