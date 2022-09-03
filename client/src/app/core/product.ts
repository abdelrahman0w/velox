export interface IProduct {
    _id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    qty: number;
    new: boolean;
    discount: number;
    rating: Map<string, number>;
}

