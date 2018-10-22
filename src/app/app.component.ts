import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  numbers=[1,2,3,4,6456,34234,64545,2326,534343,543];
}

@Pipe({name:"numChange"})
export class NumberChangePipe implements PipeTransform{
  transform(value: any) {
return value*10;
  }

}
