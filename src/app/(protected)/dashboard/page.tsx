
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import React from 'react';

const page = () => {
  return (
    <div className='h-full pt-4'>
      <h1>This is the dashboard</h1>
      {/* <Button onClick={() => redirect("/dashboard")}>Dashboard</Button> */}
    </div>
  );
}

export default page;
