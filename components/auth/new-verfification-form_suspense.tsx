import React, { lazy, Suspense } from 'react';
import NewVerificationForm from './new-verification-form';

const NewPasswordVerificationSuspense = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
          <NewVerificationForm/>
      </Suspense>
    </div>
  )
}

export default NewPasswordVerificationSuspense
