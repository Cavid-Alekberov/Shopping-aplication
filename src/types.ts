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

export interface ISearchBar {
    id: string,
    image: string,
    title: string,
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
    quantity: number,
    totalPrice: number,
}

export interface cartState {
    items: IItems[],
    totalQuantity: number,
    popUp: boolean
}

export interface ICart {
    id: string,
    image: string
    title: string,
    price: number,

}
export interface IRomoveCart {
    id: string,
    price: number,
    quantity: number,
}

export interface searchState {
    showSearch: boolean
}



