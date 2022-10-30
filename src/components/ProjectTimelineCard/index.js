import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectCardData} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectCardData

  return (
    <>
      <img
        className="project-time-line-card-img"
        src={imageUrl}
        alt="project"
      />
      <div className="project-name-duration-container">
        <h1 className="project-name">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="project-duration-calendar-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
