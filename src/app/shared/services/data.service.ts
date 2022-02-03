import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Post, Posts} from '../../core/interfaces';
import {Observable} from "rxjs";

const API_URL = `${environment.localApiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fileNames: Array<string> = ['TF1-2021-06-29','TF1-2021-06-30','TF1-2021-07-01','TF1-2021-07-02','TF1-2021-07-03','TF1-2021-07-04','TF1-2021-07-05'];
  combinedData: Array<Post> = [];

  constructor(private http: HttpClient) {

  }

  getDataFileByDate(fileDate: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${API_URL}/assets/data/TF1-${fileDate}.json`);
  }

  getDataFileNyName(fileName: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${API_URL}/assets/data/${fileName}.json`);
  }

   combineDataFiles(): Array<Post> {
    this.fileNames.map((fileName) =>
      this.getDataFileNyName(fileName)
        .subscribe((data) =>
          this.combinedData.push(...data[0].posts)
    ));
    return this.combinedData;
  }


}
