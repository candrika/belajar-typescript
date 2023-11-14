export enum CustomerType{
    PLATINUM = "PLATINUM",
    REGULER = "REGULER",
    GOLD = "GOLD",

}

export type Customer = {
    id:number;
    name:string;
    type:CustomerType;
}