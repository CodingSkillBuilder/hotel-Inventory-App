import {InjectionToken} from "@angular/core";

export const localStorageToken = new InjectionToken(
  "local storage token",
  {
    providedIn: "root",
    factory() {
      return localStorage;
    }
  }
  )
