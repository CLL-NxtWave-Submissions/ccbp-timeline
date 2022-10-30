import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseCardData} = props
  const {courseTitle, description, duration, tagsList} = courseCardData

  return (
    <>
      <div className="course-time-line-card-header-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="course-duration-clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tag-list">
        {tagsList.map(tagsListItem => (
          <li key={tagsListItem.id} className="course-tag">
            {tagsListItem.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
