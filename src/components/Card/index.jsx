import React from 'react';
import LoadSkeleton from '../Skeleton';



function CardComponent({ post }) {
    
  return post.length > 0 ? (
    <div className="Card-Wrapper">
      {post.map((item) => {
        const {
          id,
          imageUrl,
          firstName,
          lastName,
          email,
          contactNumber,
          age,
          dob,
          address,
        } = item;
        return (
          <div className="CardContent">
            <h4>ID:{id}</h4>
            <div className="CardHeader">
              <h5>{firstName + " " + lastName}</h5>
              <img src={imageUrl} alt={imageUrl} />
            </div>
            <div>
              <p>
                Email:<small>{email}</small>
              </p>
              <p>Phone:{contactNumber}</p>
              <p>dob:{dob}</p>
              <p>Age:{age}</p>
              <p>Address:{address}</p>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="SkeletonCard">
      <p>Nothing is Found</p>
      <LoadSkeleton count={6} />
    </div>
  );
}

export default CardComponent;

