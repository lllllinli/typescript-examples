import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from '../popup/popup.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'mif-test-popup',
  templateUrl: './test-popup.component.html',
  styleUrls: ['./test-popup.component.scss']
})
export class TestPopupComponent {
  title = 'Test Popup';
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

}
