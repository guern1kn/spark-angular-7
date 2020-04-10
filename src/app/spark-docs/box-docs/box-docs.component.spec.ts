import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { BoxDocsComponent } from './box-docs.component';

describe('BoxDocsComponent', () => {
  let component: BoxDocsComponent;
  let fixture: ComponentFixture<BoxDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule],
      declarations: [BoxDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});