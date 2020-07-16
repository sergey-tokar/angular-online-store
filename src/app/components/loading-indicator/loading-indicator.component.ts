import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '../../services/loading-indicator.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  public indicatorStatus: boolean = false;
  constructor(private loadingIndicatorService: LoadingIndicatorService) { }

  ngOnInit(): void {
    this.subscribeOnLoadingIndicatorChanges();
  }

  subscribeOnLoadingIndicatorChanges() {
    this.loadingIndicatorService.getObservable().subscribe((status) => this.indicatorStatus = status)
  }
}
