import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlujoAcumuladoPage } from './flujo-acumulado.page';

describe('FlujoAcumuladoPage', () => {
  let component: FlujoAcumuladoPage;
  let fixture: ComponentFixture<FlujoAcumuladoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujoAcumuladoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlujoAcumuladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
