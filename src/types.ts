export interface Inavigation {
    isActive?: boolean
}
export interface IData {
    id: string,
    category: string,
    description: string,
    image: string,
    price: number,
    title: string,
}
export interface Izz {
    items: IData[],
    loading: boolean,
    error: string
}

export interface IPro {

}

export interface ISearchBar {
    id: string,
    image: string,
    title: string,
    cancelSerachHandler: Function
}

export interface IItemsProps {
    props: IData[]
}

export interface Iurl {
    url: string
}

export interface IItems {
    id: string,
    image: string
    title: string,
    price: number,
    category: string,
    quantity: number,
    totalPrice: number,
}

export interface cartState {
    items: IItems[],
    totalQuantity: number,
}

export interface ICart {
    id: string,
    image: string
    title: string,
    price: number,
    category: string,
    quantity: number
}

export interface ICartItem {
    id: string,
    image: string
    title: string,
    price: number,
}
export interface ICartState {
    cart: ICartItem[]
}
export interface IRomoveCart {
    id: string,
    price: number,
    quantity: number,
}

export interface searchState {
    showSearch: boolean
}

export interface ICurrentProd {
    currentProd: IData[]
}

export interface IFavorits {
    id: string,
    image: string
    title: string,
    price: number,
    category: string
}


export interface IFavoritsState {
    favorits: IFavorits[]
}



