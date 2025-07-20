"use client";
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
const ButtonRedirect = () => {
  return (
    <div>
      <Link href="/dashboard">
        <Button>
          Dashboard
        </Button>
      </Link>
    </div>
  );
}

export default ButtonRedirect;
