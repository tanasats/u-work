import Container from '@/components/Container'
import React from 'react'

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default layout
