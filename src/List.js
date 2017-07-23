import React from 'react';
import db from './db.js';

class List extends React.Component {

  constructor() {
    super();
  }
 
  render() {

    let listItems;

    db.getAllPostsPromise.then(function(data) {
      listItems = data.Items.map((item) =>
        <li key={item.id}>
          {item.name}
        </li>
      );

      

      return (
        <ul>
          {listItems}
        </ul>
      );

    }).catch(function(err) {
      console.log(err);
    });
  }
}
export default List;