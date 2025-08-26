import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appConfig.interface";
import {environment} from "../../environments/environment";


export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>("App configuration service");

export const APP_CONFIGURATION: AppConfig = {
  apiUrl: environment.apiUrl,
}
