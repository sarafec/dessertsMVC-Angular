import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unit'})

export class UnitPipe implements PipeTransform {
	transform(unit: string): any {
		if(unit === "NA"){
			return "";
		} else {
			return unit;
		}
	}
}