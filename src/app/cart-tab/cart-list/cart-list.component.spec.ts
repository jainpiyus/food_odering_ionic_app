import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartListComponent } from './cart-list.component';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
