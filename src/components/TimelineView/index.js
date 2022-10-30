import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getTimelineItemTitlesList = inputTimelineItemsDataList =>
    inputTimelineItemsDataList.map(singleTimelineItem => ({
      title: singleTimelineItem.title,
    }))

  const timelineItemTitlesList = getTimelineItemTitlesList(timelineItemsList)

  return (
    <div className="time-line-view-container">
      <h1 className="time-line-view-header">
        MY JOURNEY OF <br />
        <span className="time-line-view-program-name">CCBP 4.0</span>
      </h1>
      <div className="time-line-view-chrono-container">
        <Chrono
          items={timelineItemTitlesList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
          fontSizes={{
            title: '2rem',
          }}
          scrollable={{scrollbar: true}}
        >
          {timelineItemsList.map(timelineItemsListEntry => {
            const {categoryId} = timelineItemsListEntry
            let timelineItemCardComponent = null

            if (categoryId === 'COURSE') {
              timelineItemCardComponent = (
                <div key={timelineItemsListEntry.id}>
                  <CourseTimelineCard courseCardData={timelineItemsListEntry} />
                </div>
              )
            } else if (categoryId === 'PROJECT') {
              timelineItemCardComponent = (
                <div key={timelineItemsListEntry.id}>
                  <ProjectTimelineCard
                    projectCardData={timelineItemsListEntry}
                  />
                </div>
              )
            }

            return timelineItemCardComponent
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
