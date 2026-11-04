import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak'
})
export class LineBreakPipe implements PipeTransform {

  transform(value: string, splitAfter: number = 5): string {
    const words = value.split(' ');
    let result = '';
    let line = '';

    for (let i = 0; i < words.length; i++) {
      if ((line + words[i]).length <= splitAfter) {
        line += words[i] + ' ';
      } else {
        result += line.trim() + '\n';
        line = words[i] + ' ';
      }
    }

    // Add any remaining text to the result
    result += line.trim();

    return result;
  }


}
