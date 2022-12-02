import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });
    
    calculator = TestBed.get(CalculatorService); //set-up face
  });

  it('Should add two numbers', () => {
    const result = calculator.add(2,2); //trigger face

    expect(result).toBe(4); //prove assertion
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('Should subtract two numbers', () => {
    const result = calculator.subtract(2,2);

    expect(result).toBe(0, 'unexpected subtraction result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
