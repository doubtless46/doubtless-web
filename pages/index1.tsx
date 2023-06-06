import React from 'react';  // Change 'card' to 'Card'
import { Card as BootstrapCard } from 'react-bootstrap';
import Comments from './comments';
export default function Carousel() {
  return (
    <>
    <div className='heading'>
     <h2>Frequently Asked..</h2>
    </div>
      <div>
        <Comments/>
      </div>
    </>
  );
}
