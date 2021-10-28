export interface IRates{
    name:string|null;
    unit:string|null;
    cell:string;
    BtnColor:string;
}
export const rates:IRates[]=[
    {
        name: "Plastic Bottles 🍼",
        unit: "2.50/bottle",
        cell:"table-danger",
        BtnColor:"btn-outline-danger"
    },
    {
        name: "Glass Bottles",
        unit: "3.50/bottle",
        cell:"table-info",
        BtnColor:"btn-outline-info"
    },
    {
        name: "Saw Dust",
        unit: "150/bag",
        cell:"table-warning",
        BtnColor:"btn-outline-warning"
    },
    {
        name: "Vegetable waste",
        unit: "20/bag",
        cell:"table-success",
        BtnColor:"btn-outline-success"
    },
    {
        name: "Dark",
        unit: "50/bag",
        cell:"table-primary",
        BtnColor:"btn-outline-primary"
    },
    {
        name: "Light",
        unit: "2.50",
        cell:"table-light",
        BtnColor:"btn-outline-dark"
    }
]