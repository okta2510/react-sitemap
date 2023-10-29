import React from 'react';
import projectsData from '../data/project.json';
class Project extends React.Component {
  render() {
  return (
  <div>
  {projectsData.projects.map((item, index ) => (
  <div key={index} className="work-row">
    <p>{index}</p>
    <h1>{item.name}</h1>
  </div>
))}
  </div>
  );
  }
}
export default Project;
