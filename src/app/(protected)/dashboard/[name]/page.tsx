import React from 'react';

const page = ({ params }: { params: { name: string } }) => {
  return (
    <div>
      <h1>Project: {params.name}</h1>
    </div>
  );
}

export default page;
