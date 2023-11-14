export interface Employee{
    id:string;
    name:string;
    disivion:string;
}

export interface Manager extends Employee{
    numberOfEmploye:number;
}