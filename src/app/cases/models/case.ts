import { Event } from "./event";
import { Reference } from "./reference";

export class Case {
    Title: String;
    Description: String;
    Type: String[];
    Status : String[];
    Events : Event[ ];
    References: Reference[];

    constructor() {
    }
}