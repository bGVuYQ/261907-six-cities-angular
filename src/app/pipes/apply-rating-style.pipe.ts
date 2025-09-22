import { Pipe, PipeTransform } from '@angular/core';
import { MAX_RATING } from '../../const';

@Pipe({
  name: 'applyRatingStyle'
})

export class ApplyRatingStylePipe implements PipeTransform {
  transform(value: number) {
    const style = `width: ${100 / MAX_RATING * Math.round(value)}%`;

    return style;
  }
}
