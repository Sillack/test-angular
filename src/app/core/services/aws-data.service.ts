import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {AwsData} from "../interfaces";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.localApiUrl}`;

@Injectable({
    providedIn: 'root'
})
export class AwsDataService {

    constructor(private http: HttpClient) {

    }

    get getData(): Observable<AwsData> {
        return this.http.get<AwsData>(`${API_URL}/assets/data/aws-data.json`);
    }

}
