import { Component } from '@angular/core';
import { SasCustomInputComponent } from './shared/sas-custom-input/sas-custom-input.component';
import { InputModel } from './shared/sas-custom-input/input-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  //input: InputModel[] = ['test', 'text', 'suhas', '', 1, 'Name'];
	inputModel: InputModel = new InputModel('test', 'text', 'suhas', 1, 'Name');
	
	
  }
