export interface Ingredient {
    icon: string;
    label: string;
    body: string;
  }
  
  export const allIngredients = [
    { icon: "🚗", label: "V-Drive", body: "gracias gracias gracias gracias" },
    { icon: "🚗", label: "March", body:"De nada de nada de nada" },
    { icon: "🚗", label: "Aveo", body:"por favor por favor por favor" },
  ];
  
  const [vdrive, marcha, aveo] = allIngredients;
  export const initialTabs = [vdrive, marcha, aveo];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  