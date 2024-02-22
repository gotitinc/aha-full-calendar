import React, { useMemo } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from '../../src'
import demoEvents from '../resources/events'
import mdx from './formatsMonthHeaderFormat.mdx'

const mLocalizer = momentLocalizer(moment)

export default {
  title: 'props',
  component: Calendar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

export function FormatsMonthHeaderFormat() {
  const { defaultDate, formats } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 1),
      formats: {
        monthHeaderFormat: (date, culture, localizer) =>
          localizer.format(date, `MMMM [']YY`, culture),
      },
    }),
    []
  )

  return (
    <div className="height600">
      <Calendar
        defaultDate={defaultDate}
        events={demoEvents}
        formats={formats}
        localizer={mLocalizer}
      />
    </div>
  )
}
FormatsMonthHeaderFormat.storyName = 'formats.monthHeaderFormat'
