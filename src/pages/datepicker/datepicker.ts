import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import moment from 'moment';
import { DateSelectorDirective } from '../../directives/date-selector/date-selector';

const NUM_OF_DAYS = 7;
const NUM_OF_MONTHS = 12;
const FORMAT = 'DD-MMM-YYYY';

@IonicPage()
@Component({
  selector: 'page-date-picker',
  templateUrl: 'datepicker.html',
})

export class DatepickerPage {
  public weekNames: Array<String>;
  public selectedDate: any;
  public today: any;
  public months: Array<any> = [];
  public slideOptions: any;
  public checkInDate: any;
  public checkOutDate: any;
  public focusOnCheckInDate: Boolean = true;
  public isRoundTrip: Boolean = true;

  public dateDirectivesMap: Map<String, DateSelectorDirective> = new Map<String, DateSelectorDirective>();

  @ViewChildren(DateSelectorDirective) dateSelectors: QueryList<DateSelectorDirective>;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
  ) {
    this.weekNames = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    this.today = moment();
    this.checkInDate = this.today.clone();
    this.isRoundTrip = this.navParams.get('isRoundTrip');


    // console.log(this.checkInDate);
    // console.log(this.checkOutDate);
    // console.log(this.focusOnCheckInDate);
  }

  closeModal() {
    this.viewCtrl.dismiss({ initialDate: this.checkInDate, endDate: this.checkOutDate });
  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  getSelectorKey(day) {
    return day.format(FORMAT);
  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  selectDate(selectedDate) {
    let selectorKey = this.getSelectorKey(selectedDate);
    this.dateDirectivesMap.get(selectorKey).setSelected();
  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  selectToday(selectedDate) {
    let selectorKey = this.getSelectorKey(selectedDate);
    this.dateDirectivesMap.get(selectorKey).setToday();

  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  clearSelectedDate(selectedDate) {
    if (selectedDate) {
      let selectorKey = this.getSelectorKey(selectedDate);
      this.dateDirectivesMap.get(selectorKey).unsetSelected();
    }
  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  checkInSelected() {
    this.dateSelectors.forEach((dateSelector) => {
      let selectorId = dateSelector.getId();
      let directiveDate = moment(selectorId, FORMAT);

      if (directiveDate.isBefore(this.checkInDate, 'day')) {
        dateSelector.setDisabled();
      } else {
        dateSelector.setEnabled();
      }
    });
  }

  // Programmatically set the CSS Classes on the dates displayed in the Calendar View
  checkoutSelected() {
    this.dateSelectors.forEach((dateSelector) => {
      let selectorId = dateSelector.getId();
      let directiveDate = moment(selectorId, FORMAT);

      if (directiveDate.isBefore(this.today, 'day')) {
        dateSelector.setDisabled();
      } else if (!directiveDate.isSame(this.checkOutDate, 'day')) {
        dateSelector.setEnabled();
      }
      if (directiveDate.isSame(this.checkInDate, 'day')) {
        dateSelector.setInRange('right');
      } else if (directiveDate.isAfter(this.checkInDate, 'day') && directiveDate.isBefore(this.checkOutDate, 'day')) {
        dateSelector.setInRange('full');
      } else if (directiveDate.isSame(this.checkOutDate, 'day')) {
        dateSelector.setInRange('left');
      }
    });
  }

  select(monthObj, selectedDate, rowIndex) {
    let self = this;
    let day = moment(selectedDate.id, FORMAT);

    if ((!this.focusOnCheckInDate
      && day.isBefore(this.checkInDate, 'day'))
      || day.isBefore(this.today, 'day')
      || day.isSame(this.checkInDate, 'day')) {
      return;
    }

    // CheckInDate Is Selected Again
    if (this.focusOnCheckInDate) {
      this.clearSelectedDate(this.checkInDate);
      this.clearSelectedDate(this.checkOutDate);
      this.selectDate(day);
      this.checkInDate = day;
      setTimeout(() => {
        self.checkInSelected();
      });
      this.checkOutDate = null;
      this.focusOnCheckInDate = false;
    } else { // CheckOutDate is Selected
      this.selectDate(day);
      this.checkOutDate = day;
      this.focusOnCheckInDate = true;
      setTimeout(() => {
        self.checkoutSelected();
      });
    }
  }

  setTimeToZero(dateLocal) {
    return dateLocal.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  createWeek(forDateObj, buildMonth) {
    let weekDays = [], count = 0;

    while (count < NUM_OF_DAYS) {
      if (forDateObj.month() === buildMonth) {
        let dateObj = {
          displayText: forDateObj.date(),
          id: forDateObj.format(FORMAT)
        }
        weekDays.push(dateObj);
      } else {
        weekDays.push('');
      }
      forDateObj = forDateObj.clone();
      forDateObj.add(1, 'd');
      count++;
    }
    return weekDays;
  }

  createMonth(monthObj, forMonthObj) {
    monthObj.weeks = [];
    let month = forMonthObj.clone(), done = true;

    while (done) {
      monthObj.weeks.push({ days: this.createWeek(month.clone(), monthObj.selectedMonth.month()) });
      month.add(1, 'w');
      if (month.month() !== monthObj.selectedMonth.month()) {
        done = false;
      }
    }
  }

  initMonth(monthObj) {
    let startMonth = monthObj.selectedMonth.clone();
    startMonth.date(1);
    this.setTimeToZero(startMonth.day(0));
    this.createMonth(monthObj, startMonth);

  }

  init(month) {
    let monthObj = {};
    monthObj['selectedMonth'] = month;
    this.initMonth(monthObj);
    this.months.push(monthObj);
  }

  // Populate the DateDirectivesMap with the ViewChildren of each date
  // displayed in the Calendar View
  populateSelectorMap(dateSelector) {
    let selectorId = dateSelector.getId();
    this.dateDirectivesMap.set(selectorId, dateSelector);
  }

  // Iterate through each date displayed in the View
  // and populate the ViewChildren in the dateDirectivesMap
  initSelectorMap() {
    this.dateSelectors.forEach((dateSelector) => {
      //console.log(dateSelector.getId());
      let selectorId = dateSelector.getId();
      let directiveDate = moment(selectorId, FORMAT);
      //Programmatically set the CSS Class to disable and enable the dates
      if (directiveDate.isBefore(this.today, 'day')) {
        dateSelector.setDisabled();
      } else {
        dateSelector.setEnabled();
      }
      this.populateSelectorMap(dateSelector);

    });
  }

  // Hook up into the life cycle method when the component is initialized.
  ngOnInit() {
    let nextMonth = moment();
    for (let index = 0; index <= NUM_OF_MONTHS; index++) {
      this.init(nextMonth);
      nextMonth = nextMonth.clone().month(nextMonth.month() + 1);
    }
    this.selectedDate = moment();
  }

  //Hook up into the life cycle method after View is Initialized
  //Programmatically Set the CSS classes to optimize the performance
  ngAfterViewInit() {
    this.initSelectorMap();
    this.selectDate(this.checkInDate);
    this.selectToday(this.today);
  }
}
