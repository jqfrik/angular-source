interface IDataTableInnerItem {
    title?:string;
    unit?:string;
    index1?:number;
    index2?:number;
    warning?:boolean;
}

export interface IDataTableItem {
    material:string;
    deviations:number;
    active:boolean;
    children:IDataTableInnerItem[];
}