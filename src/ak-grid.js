import {children} from 'aurelia-framework';

export class AkGrid {
  @children('ak-col') columns = [];

  attached() {
    console.log(`[AK-GRID][ATTACHED] Amount of columns: ${this.columns.length}`);

    setTimeout(() => console.log(`[AK-GRID][WITH DELAY] Amount of columns: ${this.columns.length}`), 1000);
  }
}
