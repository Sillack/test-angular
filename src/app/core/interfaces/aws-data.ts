import {Service} from "./service";

export interface AwsData {
    metadata: {
        copyright: string,
        disclaimer: string,
        'format:version': string,
        'source:version': string
    },
    prices: Array<Service>
}
