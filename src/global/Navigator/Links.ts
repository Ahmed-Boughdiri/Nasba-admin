import { linkProps } from "./Props";
import theme from "theme";

const links:linkProps[] = [
    {
        name: "Inventory Products",
        path: "/products",
        icon: theme.icons.products
    },
    {
        name: "Deliveries List",
        path: "/deliveries",
        icon: theme.icons.deliveries
    },
    {
        name: "Add New Product",
        path: "/add/product",
        icon: theme.icons.addProduct
    },
    {
        name: "Completed Deliveries List",
        path: "/completed/deliveries",
        icon: theme.icons.completed
    }
];

export default links;
