import { SecurityContext } from './auth-request';

export class LocationSearchRequest {
    SecurityContext: SecurityContext = new SecurityContext();
    Keyword: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}