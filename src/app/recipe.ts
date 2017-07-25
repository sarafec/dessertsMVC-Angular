export interface Recipe {
	title: string;
	servings: number;
	url: string;
	ingredients: Ingredients[];
	steps: Steps[];
}

export interface Ingredients {
	quantity: number;
	unit: string;
	item: string;
}

export interface Steps {
	order: number;
	instruction: string;
}