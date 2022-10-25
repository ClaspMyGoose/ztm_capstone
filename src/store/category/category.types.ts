export enum ACTION_TYPES {
  FETCH_CATEGORY_START = 'FETCH_CATEGORY_START',
  FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_FAILED = 'FETCH_CATEGORY_FAILED'
}

export interface ICategoryItem {
  id: number; 
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICategory {
  title: string;
  imageUrl: string;
  items: ICategoryItem[];
}