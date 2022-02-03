export interface Service {
    id: string,
    unit: string,
    price: {
        USD: string
    },
    attributes: {
        'aws:region': string,
        'aws:label': string
    }
}
