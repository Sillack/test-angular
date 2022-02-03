import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post, Posts} from '../interfaces';
import {DataService} from "../../shared/services/data.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostChartsService {

  posts: Array<Post>;

  constructor(private http: HttpClient, private dataService: DataService) {

  }

  get getAllPosts(): Post[] {
    return this.dataService.combineDataFiles();
  }

  getPostsByDate(fileDate: string): Observable<Posts[]> {
    return this.dataService.getDataFileByDate(fileDate);
  }


}
