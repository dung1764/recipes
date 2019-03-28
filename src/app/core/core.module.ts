import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShareModule } from '../shared/share.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        ShareModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService
    ]
})
export class CoreModule{}