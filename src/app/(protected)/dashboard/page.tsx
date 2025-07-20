
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import React from 'react';

const page = () => {
  return (
    <div className='h-full pt-4 flex items-center justify-center space-y-5 flex-col'>
      <h1 className='text-4xl font-bold'>Welcome to the Dashboard</h1>
      <p className='text-lg max-w-4xl'>Start a new project by clicking the create project button from sidebar or select an existing project.</p>
      {/* <Button onClick={() => redirect("/dashboard")}>Dashboard</Button> */}
    </div>
  );
}

export default page;

