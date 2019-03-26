import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent{
	constructor(private dataStorageService: DataStorageService){}
	onSaveData(){
		this.dataStorageService.storeRecipes()
		.subscribe(
			(data) => console.log(data),
			(error) => console.log(error)
		);
	}

	onFetchData(){
		this.dataStorageService.getRecipes();
	}
}