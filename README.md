# Introduction

An events calendar component built for React and designed for modern browsers (read: not IE) and uses flexbox over the classic tables-caption approach.

- Cloned from [react-big-calendar](https://jquense.github.io/react-big-calendar/examples/index.html)
- Inspired by [Full Calendar](http://fullcalendar.io/).

## Use and Setup

`yarn add aha-full-calendar` or `npm install --save aha-full-calendar`

Include `aha-full-calendar/lib/css/aha-full-calendar.css` for styles, and make sure your calendar's container element has a height, or the calendar won't be visible.

## Run examples locally

```sh
$ git clone git@github.com:gotitinc/aha-full-calendar.git
$ cd aha-full-calendar
$ yarn
$ yarn storybook
```

- Open [localhost:3000/examples/index.html](http://localhost:3000/examples/index.html).

### Localization and Date Formatting

`aha-full-calendar` includes four options for handling the date formatting and culture localization, depending
on your preference of DateTime libraries. You can use either the [Moment.js](https://momentjs.com/), [Globalize.js](https://github.com/jquery/globalize), [date-fns](https://date-fns.org/), [Day.js](https://day.js.org) localizers.

Regardless of your choice, you **must** choose a localizer to use this library:

#### Moment.js

```js
import { Calendar, momentLocalizer } from 'aha-full-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
```

#### Globalize.js v0.1.1

```js
import { Calendar, globalizeLocalizer } from 'aha-full-calendar';
import globalize from 'globalize';

const localizer = globalizeLocalizer(globalize);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
```

#### date-fns v2

```js
import { Calendar, dateFnsLocalizer } from 'aha-full-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
```

#### Day.js

Note that the dayjsLocalizer extends Day.js with the following plugins:

- [IsBetween](https://day.js.org/docs/en/plugin/is-between)
- [IsSameOrAfter](https://day.js.org/docs/en/plugin/is-same-or-after)
- [IsSameOrBefore](https://day.js.org/docs/en/plugin/is-same-or-before)
- [LocaleData](https://day.js.org/docs/en/plugin/locale-data)
- [LocalizedFormat](https://day.js.org/docs/en/plugin/localized-format)
- [MinMax](https://day.js.org/docs/en/plugin/min-max)
- [UTC](https://day.js.org/docs/en/plugin/utc)

```js
import { Calendar, dayjsLocalizer } from 'aha-full-calendar';
import dayjs from 'dayjs';

const localizer = dayjsLocalizer(dayjs);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
```
