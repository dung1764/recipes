import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

/**
 * 指定DOM目標來擴充目標元素變化
 * @param {'[appDropdown]'}} {	selector [description]
 */
@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	/**
	 * 透過Elementref 抓取目標叢集parent
	 * @param {[type]} '.dropdown' [description]
	 */
	private dropdownParentEl = this.el.nativeElement.closest('.dropdown');

	/**
	 * 構造函數, 注入Elementref 訪問DOM
	 * @param {ElementRef} private el [description]
	 */
	constructor(private el: ElementRef){
	}

	/**
	 * DOM 屬性裝飾器, 目標class裝上show class, 只要isShow為真
	 * @param {[type]} 'class.show' [description]
	 */
	@HostBinding('class.show') isShow = false;


	/**
	 * DOM 屬性監聽器, 目標監聽click event
	 * @param {[type]} 'click') toogleOpen( [description]
	 */
	@HostListener('click') toogleOpen(){
		this.isShow = !this.isShow;
		if (this.isShow) {
			this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
		}else{
			this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
		}
	}

	/**
	 * DOM 屬性監聽器, 目標監聽click event
	 * @param {click'} 'document [description]
	 * @param {[type]} '$event'  [description]
	 */
	@HostListener('document:click', ['$event'])
	clickout(event) {
		if (!this.el.nativeElement.contains(event.target) && this.isShow) {
			this.dropdownParentEl.classList.remove('show');
			this.dropdownParentEl.querySelector(".dropdown-menu").classList.remove('show');
			this.isShow = false;
		}
	}

}
