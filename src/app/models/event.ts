import { Person } from "./person";
import { Reference } from "./reference";

export class Event {
    DateTime: String;
    Location: String;
    Description: String;
    PeopleOfInterest: Person[]
    References: Reference[];
    
    constructor() {
    }
}