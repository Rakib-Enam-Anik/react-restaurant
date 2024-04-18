import React from 'react'
import dateFormat from 'date-format';

const LoadComments = ({ comments }) => {

const previewComments = comments.map((c) => {
    return ( 
        <div key={c.id}>
             <h5>{c.author}</h5>
             <p>{c.comment}</p>
             <p>{dateFormat(c.dateFormat, 'dddd, mmmm dS, yyyy ' )}</p>
        </div>
      );
     
});

  return <div> {previewComments} </div>
    
};

export default LoadComments;
