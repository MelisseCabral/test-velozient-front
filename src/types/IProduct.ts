

export interface IProduct {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    available: boolean;
    quantity: number;
}