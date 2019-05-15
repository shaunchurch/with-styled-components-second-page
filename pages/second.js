import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <>
    <Title>My second page</Title>
    <Link href="/">
      <a>go to first page</a>
    </Link>
  </>
)
