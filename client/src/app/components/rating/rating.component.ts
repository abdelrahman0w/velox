import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  // @Input('ratings') ratings: number[] = [
  //   0,
  //   0,
  //   0,
  //   0,
  //   0
  // ]

  @Input('rating') rating: number = 0;
  @Input('numRatings') numRatings: number = 0;

  // calculateRating(
  //   rateDict: { [key: number]: number } = this.ratings
  // ): Array<number> {
  //   const totalRevs: number = rateDict[4] + rateDict[3] + rateDict[2] + rateDict[1] + rateDict[0];

  //   return [
  //     (5 * rateDict[4] + 4 * rateDict[3] + 3 * rateDict[2] + 2 * rateDict[1] + 1 * rateDict[0]) / totalRevs,
  //     totalRevs
  //   ]
  // }

  // rating: number = this.calculateRating(
  //   this.ratings
  // )[0]
  // numRatings: number = this.calculateRating(
  //   this.ratings
  // )[1]

  ratingArr: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index);
    }
  }

  ngOnChanges(): void {
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    }
    else if (this.rating > index && this.rating < index + 1) {
      return 'star_half';
    }
    else {
      return 'star_border';
    }
  }

}
