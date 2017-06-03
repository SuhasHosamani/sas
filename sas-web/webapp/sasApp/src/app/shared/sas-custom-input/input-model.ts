export class InputModel {
	inputId: string;
	inputType: string;
	inputValue: string;
	inputIndex: number;
	inputLabel: string;
	
	constructor(inputId, inputType, inputValue, inputIndex, inputLabel){
		this.inputId = inputId;
		this.inputType = inputType;
		this.inputValue = inputValue;
		this.inputIndex = inputIndex;
		this.inputLabel = inputLabel;
	}
}
