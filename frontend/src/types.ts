export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type Stores = 'Araguari' | 'Ituiutaba' | 'Uberaba' | 'Uberlândia';

export type Store = {
    id: number;
    name: string;
}

export type SalesByGender = {
    gender: string;
    sum: number;
}

export type FilterData = {
    stores?: Stores;
};

export type PieChartConfig = {
    labels: string[];
    series: number[];
}