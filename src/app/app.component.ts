import { Component } from '@angular/core';
import { of, scan, map, Observable, throttleTime, switchMap, Subject, tap, from, multicast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public testFunction () {
    const numbers$ = of(1, 2, 4);
 
    numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        scan((total, n) => {  console.log("n: ", n); return total + n;} ),  
        scan((total, n) => { console.log("n: ", n) ; console.log("before: ", total) ;  console.log("before + n: ", total + n) ;return total + n;}),  
        // Get the average by dividing the sum by the total number
        // received so var (which is 1 more than the zero-based index).
        map((sum, index) => { console.log("sum: ", sum); console.log("index: ", index); return sum / (index + 1);})
      )
      .subscribe(console.log);
    
    console.log("numbers$: ", numbers$);
  }
}


// pipe(f1,f2,...)
// 链式调用，结果传到下一个
// scan(total,n: 上一个函数传下来的结果)  累积元素算和  
// map(n: 上一个函数传下来的结果, index)  对每个元素进行映射
// switchMap(f1) 将每个值映射到一个Observable，然后扁平化所有这些内部Observable。
// tap(f1) 用于对来自源可观察对象的通知执行的作用 例如： tap(console.log)  tap({ complete: () => console.log(`Done with ${ n }`) })



