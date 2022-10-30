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
      <h1 className="time-line-view-header">MY JOURNEY OF</h1>
      <h1 className="time-line-view-program-name">CCBP 4.0</h1>
      <div className="time-line-view-chrono-container">
        <Chrono items={timelineItemTitlesList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(timelineItemsListEntry => {
            const {categoryId} = timelineItemsListEntry
            let timelineItemCardComponent = null

            if (categoryId === 'COURSE') {
              timelineItemCardComponent = (
                <div>
                  <CourseTimelineCard
                    key={timelineItemsListEntry.id}
                    courseCardData={timelineItemsListEntry}
                  />
                </div>
              )
            } else if (categoryId === 'PROJECT') {
              timelineItemCardComponent = (
                <div>
                  <ProjectTimelineCard
                    key={timelineItemsListEntry.id}
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
