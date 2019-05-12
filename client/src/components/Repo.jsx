import React from 'react';

const Repo = (props) => {
  {console.log(props.repo)}
  return (
    <div>
      <a href={props.repo.html_url}>{props.repo.username}</a>
    </div>
  )
}

export default Repo;