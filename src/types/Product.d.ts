
export interface ProductProps {
    name: String;
    label: String;
    price: Number;
    discountPrice?: Number;
    size: String;
    genre: String;
    thumbnail: String[];
    status: "AVAILABLE" | "NOT AVAILABLE",
    id: String
}
