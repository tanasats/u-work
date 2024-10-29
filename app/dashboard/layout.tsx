import Header from '@/components/Header';
import React from 'react'
import Container from "@/components/Container";


function layout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main>
      <Header />
      <Container>
        {children}
      </Container>
    </main>
  )
}

export default layout
