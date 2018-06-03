export class SecurityContext {
    CompanyContext: CompanyContext = new CompanyContext();
    SecurityToken: SecurityToken = new SecurityToken();
    Culture: string = 'pt-BR';
    PermissionGroupId: number = 10327;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class CompanyContext {
    ConsolidatorId: string = '';
    ConsolidatorSystemAccountId: string = '';
    CustomerId;
    CustomerSystemAccountId;
    TravelAgencyId: number = 24733;
    TravelAgencySystemAccountId: number = 12405;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class SecurityToken {
    CheckKey: string = 'L57lYOBNOlzP9GUe2NwE6Z9dn04=';
    CurrentLang: string = '';
    Key: string = '20233503|12405||[0:24733:0]|TravelAgent|636402292846830000|636537281119164234|sokH3oIYH+6TcGrx0AszSrwCYUY=';
    Expiration: Expiration = new Expiration();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class Expiration {
    Day: number = 1;
    Month: number = 1;
    Year: number = 1;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}