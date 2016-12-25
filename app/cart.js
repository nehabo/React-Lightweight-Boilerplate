import React from 'react';
import _ from 'lodash';

export default (props) => {
  let cost = 0;
  return (
    <div>
      <h2>Selected Reports</h2>
      <ul>
        {
          _.map(props.selected, tag => {
            cost = cost + tag.cost;
            return <li key={tag.id}>Name: {tag.name}, Id: {tag.id}, ReportId: {tag.reportId}, status: {tag.status}  COST: {tag.cost}</li>;
          })
        }
      </ul>
      <h4>Total Cost <b>{cost}</b></h4>
    </div>
  );
};
