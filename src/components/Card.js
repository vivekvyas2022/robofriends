import React from 'react';

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <React.Fragment>
      <div className='bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5'>
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt='robots'
        />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
