export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST';

interface AddToWishListAction {
  type: typeof ADD_TO_WISH_LIST;
  itemName: string;
}

export type WishListActionTypes = AddToWishListAction;