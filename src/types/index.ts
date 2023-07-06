export interface MongoQueryStatus<DataType> {
    reason: string,
    success: boolean,
    data: DataType | Array<DataType>
}
export interface Location {
    name: string;
    category: string;
    row: number;
    column: number;
}
export interface Dimension {
    quantity: string;
    measure_unity: string;
}
export interface Product {
    description: string;
    weight: Dimension;
    volume?: Dimension;
    price: string;
    image: string;
    quantity: number;
}
export interface Shelf_Availability {
    product_quantity: number;
    product_dimensions: string;
}
export interface Shelf {
    storage_capacity: number;
    availability: Shelf_Availability;
    level: string;
    products: Array<Product>;
}

export interface Role {
    name: string
}

export interface User {
    username: string,
    email: string,
    password: string,
    roles: Role[]
}