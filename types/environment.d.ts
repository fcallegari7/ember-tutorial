// types/environment.d.ts
declare module 'super-rentals/config/environment' {
    interface EnvironmentConfig {
      MAPBOX_ACCESS_TOKEN: string;
      environment: string;
      modulePrefix: string;
      podModulePrefix?: string;
      locationType: 'history' | 'hash' | 'none' | 'auto';
      rootURL: string;
      APP: Record<string, unknown>;
    }

    const config: EnvironmentConfig;
    export default config;
}
