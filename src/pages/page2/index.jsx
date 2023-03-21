import withAuth from '@/hooks/useAuth'
import React from 'react'

const Page1 = () => {
  return (
    <div>
      In Page 2
    </div>
  )
}

export default withAuth(Page1);
