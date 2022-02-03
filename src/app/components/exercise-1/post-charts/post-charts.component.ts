import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostChartsService} from "../../../core/services";
import {Post} from "../../../core/interfaces";
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-post-graph',
  templateUrl: './post-charts.component.html',
  styleUrls: ['./post-charts.component.scss']
})
export class PostChartsComponent implements OnInit, OnDestroy {
  options: any;
  private data: any[] = [];
  private dates: Array<string>;
  posts: Post[];
  postReaction: number[] = [];
  subscriptions: Subscription[] = [];

  constructor(private postChartsService: PostChartsService) {
    this.dates = ['2021-06-29', '2021-06-30', '2021-07-01', '2021-07-02', '2021-07-03', '2021-07-04', '2021-07-05'];
  }

   ngOnInit() {

    this.dates.map(dateVal => {
      const  sub =   this.getPostReactionsByDate(dateVal).subscribe((data) => {
        this.data.push({
          name: data['key'],
          value: [
            dateVal,
            data['value'],
          ]
        });
      });
      this.subscriptions.push(sub);
    });

    this.options = {
      title: {
        text: 'Parcours emotionnel'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          params = params[0];
          return params.value[0] + ' : ' + params.name + ' = ' + Math.round(params.value[1] * 100) / 100;
        },
        axisPointer: {
          animation: true
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        },
      },
      series: [{
        name: 'Feelings Data',
        type: 'line',
        showSymbol: true,
        data: this.data
      }]
    };
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  getPostReactionsByDate(postDate: string): Observable<object>{
    let subject = new Subject<object>();
    let postsReactions = {Joy: 0,Anger: 0, Disgust: 0, Fear: 0, Surprise: 0, Sadness: 0};
    const  sub =  this.postChartsService.getPostsByDate(postDate).subscribe((data) => {
      data[0].posts.map((post) => {
        post.post_comments.map(o => {
          o.hasOwnProperty('Joy') ?
              postsReactions.Joy += o.Joy : postsReactions.Joy += 0;
          o.hasOwnProperty('Anger') ?
              postsReactions.Anger += o.Anger : postsReactions.Anger += 0;
          o.hasOwnProperty('Disgust') ?
              postsReactions.Disgust += o.Disgust : postsReactions.Disgust += 0;
          o.hasOwnProperty('Fear') ?
              postsReactions.Fear += o.Fear : postsReactions.Fear += 0;
          o.hasOwnProperty('Surprise') ?
              postsReactions.Surprise += o.Surprise : postsReactions.Surprise += 0;
          o.hasOwnProperty('Sadness') ?
              postsReactions.Sadness += o.Sadness : postsReactions.Sadness += 0;
        });
      });

      let max = Math.max.apply(null,Object.keys(postsReactions).map(function(x){ return postsReactions[x] }));
      let key = Object.keys(postsReactions).filter(function(x){ return postsReactions[x] == max; })[0];

      subject.next({
        key: key,
        value: max
      })
    });

    this.subscriptions.push(sub);
    return subject.asObservable();
  }

}
