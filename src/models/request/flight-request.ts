import { SecurityContext } from './auth-request';

export class DepartureDate {
    Day: number;
    Month: number;
    Year: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }    
}

export class CityPairsRequest {
    DepartureDate: DepartureDate;
    Destination: string;
    NonStop: boolean;
    Origin: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }    
}

export class AirSearchData {
    CityPairsRequest: CityPairsRequest[];
    NumberADTs: number;
    NumberCHDs: number;
    NumberINFs: number;
    SearchRecommendation: boolean = true;
    SearchType: string = '3';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class SearchData {
    AirSearchData: AirSearchData = new AirSearchData();
    SearchMode: string = 'Synchronous';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }    
}

export class FlightSearchRequest {
    SecurityContext: SecurityContext = new SecurityContext();
    SearchData: SearchData = new SearchData();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}