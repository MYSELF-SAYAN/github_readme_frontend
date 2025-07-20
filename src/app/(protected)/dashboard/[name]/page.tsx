// app/(protected)/dashboard/[name]/page.tsx

import React from 'react';

interface PageProps {
  params: Promise<{ name: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  return (
    <div>
      <h1>Project: {resolvedParams.name}</h1>
    </div>
  );
};

export default Page;
