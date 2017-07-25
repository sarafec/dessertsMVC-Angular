import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fraction'})

export class FractionPipe implements PipeTransform {
	transform(quantity: string): any {
		let baseQuantity = quantity.split(".");
		if (baseQuantity.length === 1){
			return quantity;
		} else if (+baseQuantity[0] < 1) {
			if (quantity === ".25") {
				return "¼";
			} else if(quantity === ".33"){
				return "⅓";
			} else if(quantity === ".5"){
				return "½";
			} else if (quantity === ".75"){
				return "¾";
			}
		} else if (+baseQuantity[0] >=  1){
			if (baseQuantity[1] === "25") {
				return baseQuantity[0] + "¼";
			} else if(baseQuantity[1] === "33"){
				return baseQuantity[0] + "⅓";
			} else if(baseQuantity[1] === "5"){
				return baseQuantity[0] + "½";
			} else if (baseQuantity[1] === "75"){
				return baseQuantity[0] + "¾";
			}
		}

	}
}