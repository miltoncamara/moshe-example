export interface ArrivalTime {
    Day: number;
    DayOfWeek: number;
    Month: number;
    Year: number;
    Hour: number;
    Millisecond: number;
    Minutes: number;
    Seconds: number;
}

export interface DepartureTime {
    Day: number;
    DayOfWeek: number;
    Month: number;
    Year: number;
    Hour: number;
    Millisecond: number;
    Minutes: number;
    Seconds: number;
}

// export interface ExternalProperties {
//     codeShareDetails-Company: string;
// }

export interface ExternalProperties2 {
    FlightClasses: string;
    RuleNumber?: any;
    AgreementType: string;
    CommercialAgreement_PaxType: string;
    AgreementLoginInformationId: string;
}

export interface FareOption {
    AgreementCode: string;
    BaggagesIncluded: number;
    ClassOfService: string;
    ExternalProperties: ExternalProperties2;
    FareBasis: string;
    TripType: number;
}

export interface ArrivalDateTime {
    Day: number;
    DayOfWeek: number;
    Month: number;
    Year: number;
    Hour: number;
    Millisecond: number;
    Minutes: number;
    Seconds: number;
}

export interface DepartureDateTime {
    Day: number;
    DayOfWeek: number;
    Month: number;
    Year: number;
    Hour: number;
    Millisecond: number;
    Minutes: number;
    Seconds: number;
}

export interface ExternalProperties3 {
}

export interface Flight {
    AnacDetailsIndex: number;
    ArrivalAirportId: number;
    ArrivalDateTime: ArrivalDateTime;
    CabinType: number;
    CiaCode: string;
    ClassOfService: string;
    DepartureAirportId: number;
    DepartureDateTime: DepartureDateTime;
    DurationInMinutes: number;
    ExternalProperties: ExternalProperties3;
    FlightNumber: string;
    Legs: any[];
}

export interface FlightGroup {
    ArrivalTime: ArrivalTime;
    DepartureTime: DepartureTime;
    DestinationId: number;
    DurationInMinutes: number;
    ExternalProperties: any;
    FareOption: FareOption;
    Flights: Flight[];
    IssuerCia: string;
    OriginId: number;
    SourceType: string;
}

export interface PriceGroup {
    BaggagesIncluded: number;
    DUTaxes: number;
    Fee: number;
    FlightGroupIndexes: number[][];
    Installments: number;
    InstallmentsPrice: number;
    Price: number;
    Taxes: number;
}

export interface Cell {
    BestInstallments: number;
    BestInstallmentsPrice: number;
    Points: number;
    Price: number;
    Type: number;
}

export interface AirCompany {
    AirCompany: string;
    BestPointAirCompany: number;
    BestPriceAirCompany: number;
    Cells: Cell[];
    CiaCode: string;
    InBlackList: boolean;
}

export interface PriceMatrix {
    AirCompanies: AirCompany[];
}

export interface ExternalProperties4 {
    FlightClasses: string;
    RuleNumber?: any;
    AgreementType: string;
    CommercialAgreement_PaxType: string;
    AgreementLoginInformationId: string;
}

export interface FareOption2 {
    AgreementCode: string;
    BaggagesIncluded: number;
    ClassOfService: string;
    ExternalProperties: ExternalProperties4;
    FareBasis: string;
    TripType: number;
}

export interface FlightGroup2 {
    FareOption: FareOption2;
    FlightGroupIndex: number;
}

export interface Recommendation {
    BaggagesIncluded: number;
    FlightGroups: FlightGroup2[];
    Installments: number;
    InstallmentsPrice: number;
    TotalAmount: number;
    TotalTaxes: number;
    TotalDUTaxes?: number;
}

export interface AirResponseData {
    AnacDetails: any[];
    FlightGroups: FlightGroup[];
    PriceGroups: PriceGroup[];
    PriceMatrix: PriceMatrix;
    Recommendations: Recommendation[];
}

export interface HotelResponseData {
    Chains: any[];
    FilteredTotalItems: number;
    HotelFiltersData?: any;
    Hotels: any[];
    TotalItems: number;
}

export interface PullStatusFrom {
    TravelEngine: string;
    Orchestration: string;
}



export interface Error {
    ErrorMessage: string;
    ExceptionType: string;
    FriendlyMessage: string;
    MessageCategory?: any;
    MessageCode?: any;
    Source: string;
    StopFlow: boolean;
}

export interface FlightSearchResponse {
    AirResponseData: AirResponseData;
    HotelResponseData: HotelResponseData;
    PullStatusFrom: PullStatusFrom;
    SearchId: string;
    SessionId: string;
    Status: number;
    Locations: any;
    Errors: Error[];
    Successful: boolean;
    TraceInfo?: any;
}