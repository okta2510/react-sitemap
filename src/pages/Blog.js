import React from 'react';
import projectsData from '../data/project.json';
import { withRouter } from 'react-router-dom';
class Blog extends React.Component {
  render() {
  const { id } = this.props.match.params;
  return (
  <div>
  <h1>params: {id}</h1>
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
export default withRouter(Blog);
