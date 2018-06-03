interface LocationResponseData {
    Keyword: string;
    Locations: Location[];
    SearchedParent: Location;
    Errors: Error[];
    Successful: boolean;
    TraceInfo: Ac;
}

interface Error {
    ErrorMessage: string;
    ExceptionType: string;
    FriendlyMessage: string;
    MessageCategory: string;
    MessageCode: string;
    Source: string;
    StopFlow: boolean;
}

interface Location {
    ac: Ac[];
    c: string;
    cc: Ac;
    co: string;
    d: string;
    h: number;
    hc: boolean;
    i: string;
    id: number;
    in: boolean;
    ip: number;
    n: string;
    pn: string;
    t: number;
}

interface Ac {
}