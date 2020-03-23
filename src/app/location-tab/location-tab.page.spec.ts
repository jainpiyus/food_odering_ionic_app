import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationTabPage } from './location-tab.page';

describe('LocationTabPage', () => {
  let component: LocationTabPage;
  let fixture: ComponentFixture<LocationTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
