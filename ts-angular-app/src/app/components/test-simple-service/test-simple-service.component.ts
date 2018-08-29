import { Component } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'mif-test-simple-service',
  templateUrl: './test-simple-service.component.html',
  styleUrls: ['./test-simple-service.component.scss'],
  providers: [
    SimpleService,
  ]
})
export class TestSimpleServiceComponent {
  title = 'Test simple service';
  constructor(private simpleService: SimpleService) {
    console.log('> name:', simpleService.getName());
    simpleService.setName('statendleylin');
    console.log('> name:', simpleService.getName());
    console.log(`> user:`, simpleService.getUser());
  }
}
