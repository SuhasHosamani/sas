import { Component, OnInit, Input} from '@angular/core';
import { InputModel } from './Input-model';

@Component({
  selector: 'app-sas-custom-input',
  templateUrl: './sas-custom-input.component.html',
  styleUrls: ['./sas-custom-input.component.css']
})
export class SasCustomInputComponent implements OnInit {
	@Input()
	inputModel: InputModel;
  constructor() { }

  ngOnInit() {
	  
  }

}
