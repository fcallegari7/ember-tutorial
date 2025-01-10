declare module '@ember-data/json-api/request' {
    export function findRecord(modelName: string, id: string, options?: Record<string, any>): Promise<any>;
    export function query(id: string): Promise<any>;
}
