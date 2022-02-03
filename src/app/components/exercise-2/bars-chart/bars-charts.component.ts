import { Component, OnDestroy, OnInit} from '@angular/core';
import {AwsDataService} from "../../../core/services";
import {Service} from "../../../core/interfaces/service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-charts.component.html',
  styleUrls: ['./bars-charts.component.scss']
})
export class BarsChartsComponent implements OnInit, OnDestroy {

    services: Array<Service>;
    private subscription: Subscription;
    options: any;
    region: string;
    dataRegions: Array<string> = [];

    initOpts = {
        renderer: 'svg',
        width: 1000,
        height: 600
    };



  constructor(private awsDataService: AwsDataService) {
  }

   ngOnInit() {

    this.subscription = this.awsDataService.getData.subscribe((response) => {
      this.services = response.prices;

        this.services.sort(function (a, b) {
            return Number(b.price.USD) - Number(a.price.USD) ;
        })
        this.options = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.services.map(service => service.id),
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: 'Prix',
                type: 'bar',
                barWidth: '100%',
                data: this.services.map(service => Number(service.price.USD))
            }]
        };

    });


  }

    ngOnDestroy() {
        this.subscription.unsubscribe();
  }


}
