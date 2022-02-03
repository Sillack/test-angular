import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interfaces';
import {DataService} from "../../shared/services/data.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private dataService: DataService) {

  }

  get getAllPosts(): Post[] {
  return this.dataService.combineDataFiles();
  }

}
