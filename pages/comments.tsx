import React from 'react';
import Card from './card'
const Comments = () => {
  const comments = [
    { author: 'John',desc:'BTech 4th year', text: 'Great post!' },
    { author: 'Jane', desc:'BTech 4th year',text: 'Nice job!' },
    { author: 'Siddharth' ,desc:'BTech 4th year', text: 'You cannot rely on the faculty for the college students.' },
    { author: 'John',desc:'BTech 4th year', text: 'Great post!' },
    { author: 'Jane',desc:'BTech 4th year', text: 'Nice job!' },
    { author: 'Bob', desc:'BTech 4th year',text: 'Thanks for sharing.' },
    { author: 'John',desc:'BTech 4th year', text: 'Great post!' },
    { author: 'Jane',desc:'BTech 4th year', text: 'Nice job!' },
    { author: 'Bob', desc:'BTech 4th year',text: 'Thanks for sharing.' },
    { author: 'John',desc:'BTech 4th year', text: 'Great post!' },
    { author: 'Jane', desc:'BTech 4th year',text: 'Nice job!' },
    { author: 'Bob',desc:'BTech 4th year', text: 'Thanks for sharing.' },
  ];

  return (
    <div className="cmt">
      <Card  comments={comments} />
    </div>
  );
};
 
export default Comments;
