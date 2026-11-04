import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedData: string;

  public updateData: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public fireEvent(event: any) {
    this.updateData.emit(event);
    console.log(event);
  }

  public receiveEvent(): EventEmitter<void> {
    return this.updateData;
  }

}
