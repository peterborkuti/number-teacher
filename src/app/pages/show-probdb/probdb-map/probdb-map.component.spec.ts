import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProbdbMapComponent } from './probdb-map.component';

describe('ProbdbMapComponent', () => {
  let component: ProbdbMapComponent;
  let fixture: ComponentFixture<ProbdbMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbdbMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProbdbMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows db values', () => {
    const expected = Array(10).fill(1).map( i => Math.floor(Math.random()* 100));
    component.probabilities = [expected];
    fixture.detectChanges();

    const table: HTMLTableElement = fixture.nativeElement.querySelector('table');
    const row: HTMLTableRowElement = table.rows[1];
    const cells: HTMLCollectionOf<HTMLTableDataCellElement> = row.cells;

    expect(cells[0].innerText).toBe("0");
    expected.forEach((e,i) => expect(cells[i + 1].innerText).toBe('' + e));
  })
});
