import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { delay } from "cypress/types/bluebird";
import { of } from "rxjs/internal/observable/of";

describe('Async Testing Examples', () => {

  it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {
      test = true;

      expect(test).toBeTruthy();

      done();

    }, 1000);

  });

  it('Asynchronous test example - setTimeout()', fakeAsync(() => {

    let test = false;

    setTimeout(() => {

      test = true;

    }, 1000);

    //tick(1000)

    flush();

    expect(test).toBeTruthy();

  }));

  it('Asynchronous test example - plain Promise', fakeAsync(() => {

    let test = false;

    Promise.resolve().then(() => {
      return Promise.resolve();
    }).then(() => { test = true });

    flushMicrotasks();
    
    expect(test).toBeTruthy();

  }));

  it('Asynchronous test example - Promises + setTimeout()', fakeAsync(() => {
    
    let counter = 0;

    Promise.resolve().then(
      () => {
        counter += 10;

        setTimeout(()=> counter ++, 1000)
      }
    );

    expect(counter).toBe(0);

    flushMicrotasks();

    expect(counter).toBe(10)

    tick(500);

    expect(counter).toBe(10);

    tick(500);

    expect(counter).toBe(11);

  }));

  it('Asynchronous test example - Observables', fakeAsync(() => {

    let test = true;

    console.log('creating obss');

    const test$ = of(test).pipe();

    test$.subscribe(() => {
      test = true;
    });

    tick()
    
    console.log('Running test assertions');

    expect(test).toBe(true);

  }));

});
