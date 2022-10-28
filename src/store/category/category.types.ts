import { AnyAction } from 'redux';


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

export interface ICategoryMap {
  [key: string]: ICategoryItem[]
}


export type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>
}


export function withMatcher<AC extends () => AnyAction & {type: string}>(action: AC): Matchable<AC>

export function withMatcher<AC extends (...args: any[]) => AnyAction & {type: string }>(action: AC): Matchable<AC>


export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type; 

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type
    }
  })

}