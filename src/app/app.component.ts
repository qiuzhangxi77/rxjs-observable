import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { of, scan, map, Observable, throttleTime, switchMap, Subject, tap, from, multicast, catchError, fromEvent, generate, interval, take, range, timer, concatMap, concatAll, merge, debounce, debounceTime, buffer, concatMapTo, mapTo, concat, mergeMap, mergeAll, Subscriber, connect, share, ConnectableObservable, publish, refCount, observable, filter, delay, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public testFunction () {
    // const numbers$ = of(1, 2, 4);
 
    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => {  console.log("n: ", n); return total + n;} ),  
    //     scan((total, n) => { console.log("n: ", n) ; console.log("before: ", total) ;  console.log("before + n: ", total + n) ;return total + n;}),  
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     map((sum, index) => { console.log("sum: ", sum); console.log("index: ", index); return sum / (index + 1);})
    //   )
    //   .subscribe(console.log);
    
    // console.log("numbers$: ", numbers$);

    // pipe(f1,f2,...)
    // 链式调用，结果传到下一个
    // scan(total,n: 上一个函数传下来的结果)  累积元素算和  
    // map(n: 上一个函数传下来的结果, index)  对每个元素进行映射
    // switchMap(f1) 将每个值映射到一个Observable，然后扁平化所有这些内部Observable。
    // tap(f1) 用于对来自源可观察对象的通知执行的作用 例如： tap(console.log)  tap({ complete: () => console.log(`Done with ${ n }`) })



    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
     
    // console.log('just before subscribe');
    // // observable.subscribe({
    // //   next(x) {
    // //     console.log('got value ' + x);
    // //   },
    // //   error(err) {
    // //     console.error('something wrong occurred: ' + err);
    // //   },
    // //   complete() {
    // //     console.log('done');
    // //   },
    // // });
    // observable.subscribe((x) => {
    //   console.log('got value ' + x);
    // }, (err) => {
    //   console.error('something wrong occurred: ' + err);
    // },
    // () => {
    //   console.log('done');
    // }
    // );
    // console.log('just after subscribe');


    // const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
    //   map(userResponse => console.log('users: ', userResponse)),
    //   catchError(error => {
    //     console.log('error: ', error);
    //     return of(error);
    //   })
    // );
    
    // obs$.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err)
    // });

    // const array = [10, 20, 30];
    // const result = from(array);

    // result.subscribe(x => console.log(x));


    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe(x => console.log(x));


    // const result = generate(2, x => x < 3, x => x + 1);
    // result.subscribe(x => console.log(x));

    // const numbers = interval(1000);
    // const takeFourNumbers = numbers.pipe(take(4));
    // takeFourNumbers.subscribe(x => console.log('Next: ', x));

    // const numbers = range(1, 3);
    // const nummbersMap = numbers.pipe(map(x => x + 5));
    // nummbersMap.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Complete!')
    // });

    // This could be any observable

    // timer(3000).subscribe(x => console.log(x));



  
  
  
  
  
    }

  ngOnInit(): void {

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   concatMap(ev => interval(1000).pipe(take(4)))
    // );
    // result.subscribe(x => console.log(x));

    // const clicks = of(1,2);
    // const result = clicks.pipe(
    //   concatMap(ev => of(4,5,6))
    // );
    // result.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const timer = interval(1000);
    // const clicksOrTimer = merge(clicks, timer);
    // clicksOrTimer.subscribe(x => console.log(x));

    // const clicks = of(1,2);
    // const result = clicks.pipe(
    //   mapTo(of(3,4,5,6)),
    //   concatAll()
    // );
    // result.subscribe(x => console.log(x));

    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   mergeMap(x => interval(1000).pipe(map(i => x + i)))
    // );
    // result.subscribe(x => console.log(x));

    // 高阶observable
    // const low = of(1,2,3)
    // const higherHigher = low.pipe(
    //   // map(x => of(of(1))
    //   map(x => of(of('a'),of('b')))

    //   // concatAll()
    // )
    // const down = higherHigher.pipe(
    //   concatAll(),
    //   concatAll()
    // )

    //   down.subscribe(x => console.log(x));

    // const obs1 = interval(1000);
    // const obs2 = of(1,2,3);
    // // const clicksOrTimer = concat(obs1, obs2);
    // const clicksOrTimer = concat(obs1.pipe(take(6)), obs2);
    // clicksOrTimer.subscribe(x => console.log(x));

    // const obs1 = interval(1000);
    // const obs2 = of('a','b','c');
    // // const clicksOrTimer = concat(obs1, obs2);
    // const clicksOrTimer = merge(obs1.pipe(take(6)), obs2);
    // clicksOrTimer.subscribe(x => console.log(x));

    
    // const obs1 = of('a','b','c');
    // const higher = obs1.pipe(
    //   map(x => interval(1000).pipe(take(5))),
    //   mergeAll()
    // )
    
    // higher.subscribe(x => console.log(x));

    // const numbers$ = of(1, 2, 3);
    
    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => total + n),
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     map((sum, index) => sum / (index + 1))
    //   )
    //   .subscribe(console.log);

    /////////////////////////////////////////////////////////////////////
    // observable 是单播的 subject 是多播的
    // 单播是一次给对应的observer 输出，拥有独立的数据产生环境
    // 多播是一次给所有的observer 输出，共享这个Subject主体
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(Math.random());
    //   subscriber.next(1);
    // })
    // observable.subscribe({
    //   next: (v) => console.log(`observable-observerA: ${v}`),
    // })
    // observable.subscribe({
    //   next: (v) => console.log(`observable-observerB: ${v}`),
    // })


    // const subject = new Subject<number>();
    // subject.subscribe({
    //   next: (v) => console.log(`subject-observerA: ${v}`),
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`subject-observerB: ${v}`),
    // });
    // subject.next(Math.random());
    // subject.next(2);
    // subject.subscribe({
    //   next: (v) => console.log(`subject-observerC: ${v}`),
    // });
    /////////////////////////////////////////////////////////////////////

    
    ////////////////////////////////////////////////////////////////////
    // 多播observable

    
    // multicast()
    // 通过使用 Subject 共享源Observable
    // const number$ = interval(1000).pipe(take(2));
    // const multicast$ = number$.pipe(
    //   tap(() => console.log("执行了")),
    //   map(() => Math.random()),
    //   multicast(() => new Subject())
    // ) as ConnectableObservable<number>;

    // // number$不会发射值，直到调用 connect
    // multicast$.connect();

    // multicast$.subscribe(val => console.log(`Observer 1: ${val}`));
    // multicast$.subscribe(val => console.log(`Observer 2: ${val}`));



    // publish()
    // 相当于 multicast(() => new Subject())
    // 使冷 Observable 变成热的
    // const number$ = interval(1000).pipe(take(4));
    // const multicast$ = number$.pipe(
    //   tap(() => console.log("我执行了")),
    //   map(() => Math.random()),
    //   // 使用 publish
    //   publish()
    // ) as ConnectableObservable<number>;

    // // 执行 connect
    // multicast$.connect();

    // multicast$.subscribe(val => console.log(`Observer 1: ${val}`));
    // multicast$.subscribe(val => console.log(`Observer 2: ${val}`));



    //multicast(() => new Subject())+ refCount
    // 然而到现在为止，还是在用 connect() 方法建立连接，会很容易忘记调用，有没有更简便的方法？
    // RxJS 当然有，那就是 refCoun() 方法，refCount 负责在内部统计订阅的数量，它处理了两件很重要的事情：
    // 如果订阅的数量大于等于 1，refCount 会仅订阅一次源，并调用 connect()
    // 如果订阅的数量小于1，也就是没有任何订阅者，refCount 则会从源取消订阅
    // const number$ = interval(1000).pipe(take(2));
    // const multicast$ = number$.pipe(
    //   tap(() => console.log("执行了")),
    //   map(() => Math.random()),
    //   multicast(() => new Subject()),
    //   refCount()
    // );

    // multicast$.subscribe(val => console.log(`Observer 1: ${val}`));
    // multicast$.subscribe(val => console.log(`Observer 2: ${val}`));



    // share()
    // share() 运算符相当于 multicast(() => new Subject())+ refCount
    // 返回一个多播（共享）原始 Observable 的新 Observable
    // 在这里原始指的是 observable
    // const number$ = interval(1000).pipe(take(2));

    // const share$ = number$.pipe(
    //   tap(() => console.log("我调用了")),
    //   map(() => Math.random()),
    //   share()
    // );

    // share$.subscribe(val => console.log(`Observer 1: ${val}`));
    // share$.subscribe(val => console.log(`Observer 2: ${val}`));
    ////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////
    // 错误处理
    // new Observable((subscriber) => {
    //   subscriber.next(1),
    //   subscriber.next(2),
    //   subscriber.error('err')
    // })
    //   .pipe(
    //     catchError(err => {
    //       throw 'error in source. Details: ' + err;
    //     })
    //   )
    //   .subscribe({
    //     next: x => console.log(x),
    //     error: err => console.log(err)
    //   });

    ///////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////
    // 过滤操作
    // debouch(function selector())
    // 只有当已经过去了由另一个 Observable 确定的时间段，而且在此期间源没有发出过其它值时，才会从源 Observable 上发出通知。
    // 它很像 debounceTime，不过它发送时的静默时间跨度由第二个 Observable 决定。
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   debounce( x => timer(1000))
    // );
    // result.subscribe(x => console.log(x));

    // debouchTime(time)
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   debounceTime(1000)
    // );
    // result.subscribe(x => console.log(x));


    // take(count)
    // 仅发送源 Observable 发出的前 count 个值。
    // const intervalCount = interval(1000);
    // const takeFive = intervalCount.pipe(take(5));
    // takeFive.subscribe(x => console.log(x));

    // filter(function predicate())
    // const intervalCount = interval(1000);
    // const takeFive = intervalCount.pipe(filter(x => x < 5));
    // takeFive.subscribe(x => console.log(x));


    ///////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////
    // 实用工具操作符

    // tap(((value: T) => void))
    // 用于对来自源 observable 的通知执行副作用 利用用来打印通知
    // of(Math.random()).pipe(
    //   tap(console.log),
    //   map(n => n > 0.5 ? 'big' : 'small')
    // ).subscribe(console.log);

    // delay(time)
    // 将源 Observable 的条目的发送延迟给定的超时时长或等到给定的时间（Date）
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
    // delayedClicks.subscribe(x => console.log(x));

    // timeout(config)
    // 如果 Observable 在给定的时间范围内没有发送值，则会出错。
    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(
    //   timeout(1000),
    //   catchError(err => {
    //     throw 'error in source. Details: ' + err;
    //   })
    //   ); // each click emitted after 1 second
    // delayedClicks.subscribe({next: x => console.log(x), error: x => console.log("err: ", x)});

    // toArray()
    // toArray 将等到源 Observable 完成后再发出一个包含所有发来的值的数组。
    // const source = interval(1000);
    // const example = source.pipe(
    //   take(10),
    //   toArray()
    // );

    // example.subscribe(value => console.log(value));



    ///////////////////////////////////////////////////////////////////

  }

  // concatMap（得到的是每个源值映射的高阶observable） 相当于 map + concatAll 

}

// concat merge
// concat 通过将多个 Observable 的值串行（直到前面的complete）到一个 Observable 中来将多个 Observable 串联化。
// merge 通过将多个 Observable 的值混合到一个 Observable 中来将多个 Observable 扁平化。 并行


// concat+ 高阶observable + map + mapTo + concatAll + concatMap + concatMapTo
// 高阶observable 
// 二阶：observable(observable())
// 三阶：observable(observable(observable()))
// concatAll()可降低一阶(例如3阶 -> 2阶) 且是串联的
// 高阶observable
// const low = of(1,2,3)
// const higherHigher = low.pipe(
//   map(x => of(of(1))
//   map(x => of(of('a'),of('b')))
//    concatAll()
//   )
//  const down = higherHigher.pipe(
//    concatAll(),
//    concatAll()
//    )

// map()
// 针对源 Observable 发送的每个值调用指定的 project 函数，并将这些结果作为一个 Observable 发出
// const observableA(next(1), ... next(2))
// observableB = observableA.pipe( map( x => x*10 ) )
// observableB 相当于 => observable( next(10), ... next(20) )

// mapTo() 
// 相当于影射成一个给定的常量value 或者 observable
// observableB = observableA.pipe(mapTo(10))

// concatMap() 
// 将每个值映射到一个Observable，然后使用 concatAll 展平所有这些内部 Observable。
// observableA = of(1,2,3) observableA.pipe(concatMap(x => observable))
//即 observableA = of(1,2,3) observableA.pipe( x => observable, concatAll )
// 相当于串联内部observable，再降阶展开 =》 (1映射-> observable(concatAll降一阶) -> 2映射-> observable(concatAll降一阶) -> 3映射-> observable(concatAll降一阶)  )

// concatMapTo() 
// 将每个值映射到同一个Observable，然后使用 concatAll 展平所有这些内部 Observable。
// observableA = of(1,2,3) observableA.pipe(concatMapTo(observable))



// merge + 高阶observable + map + mapTo + mergeAll + mergeMap

// mergeAll 可降低一阶(例如3阶 -> 2阶) 且是并行的 (即内部的observable 降阶并行运行)


// mergeMap()
// 将每个值映射到一个 Observable，然后使用 mergeAll 展平所有这些内部 Observable。 和 concatMap()不同的是 这个是并行展开

// mergeMapTo()
// 将每个值映射到同一个 Observable，然后使用 mergeAll 展平所有这些内部 Observable。 和 concatMapTo()不同的是这个是并行展开






