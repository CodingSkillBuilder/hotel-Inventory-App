import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InitialisingEngineService {

  constructor(
    private httpClient: HttpClient
  ) {}

  engineConfig: any;

  startEngine() {
    return this.httpClient.get("../assets/engineConfigurations.json").pipe(
      tap(configurations => {this.engineConfig = configurations;})
    )
  }
}
