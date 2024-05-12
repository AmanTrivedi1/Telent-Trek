'use client';
import React, { lazy, Suspense } from 'react';
import { NewPasswordForm } from './new-password';

const NewPasswordPageSuspense = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading ...</p>}>
        <NewPasswordForm/>
      </Suspense>
    </div>
  )
}

export default NewPasswordPageSuspense
