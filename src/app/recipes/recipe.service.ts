import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!', 
        'https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Homemade-Pork-Schnitzel-with-Cauliflower-and-Lemons.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Mashroom Soup', 
        'Delicious Mashroom Soup!', 
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];
    
    constructor(private shoppingListService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}