export interface Todo{
    id: number;
    text: string;
    isDone: boolean;
}

export interface QuaoteResponse{
    id:number;
    quote:string;
    author:string;
}

export type FilterType = "all" | "active" | "done";