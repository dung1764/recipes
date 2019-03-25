import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingListService: ShoppingListService) { }

  /**
   * 初始化, 訂閱shoppinglistservice服務
   */
  ngOnInit(){
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredinet(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
      );
  }

  /**增加食譜材料
   * [onSubmit description]
   */
  onSubmit(form: NgForm){
    const value:Ingredient = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onResetForm();
  }

  /**
   * 移除指定食譜材料
   */
  onRemove(){
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.onResetForm();
  }

  /**
   * 清除表單
   */
  onResetForm(){
    this.slForm.reset();
    this.editMode= false;
  }

  /**
   * 離開component: 取消訂閱
   */
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
