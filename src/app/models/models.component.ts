import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Model } from './model';
import { ModelsService } from './models.service';

@Component({
  selector: 'app-model-component',
  templateUrl: 'models.component.html',
  styleUrls: ['models.component.scss'],
})

export class AppModelComponent implements OnInit, OnDestroy {
  Models: Model[];
  sub: Subscription;

  constructor(private modelsService: ModelsService) {}

  ngOnInit(): void {
    this.sub = this.modelsService.getModels()
      .subscribe(
        models => {
          this.Models = models;
          console.log(this.Models);
        },
        error => console.error(error)
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
