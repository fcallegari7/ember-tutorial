type SetBuildURLConfigParams = {
    namespace: string;
};

declare module '@ember-data/request-utils' {
    export function setBuildURLConfig(params: SetBuildURLConfigParams): void;
}