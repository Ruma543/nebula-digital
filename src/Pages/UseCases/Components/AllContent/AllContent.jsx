import React from 'react';
import Message from '../Message/Message';
import Cards from '../Cards/Cards';
import Contact from '../../../../Component/Contact/Contact';

const AllContent = () => {
  return (
    <div>
      <Message></Message>
      <Cards></Cards>
      <div className=" mb-20 md:mb-20 lg:mb-1 ">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default AllContent;
