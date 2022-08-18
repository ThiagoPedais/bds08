export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type store = {
    id: number;
    name: string;
}

export type SalesByGender = {
    gender: string;
    sum: number;
}

export type PieChartConfig = {
    labels: string[];
    series: number[];
}