import React, { ReactNode, useEffect, useState } from 'react'

import { Header } from './components/Header/Header'

import s from './page.module.scss'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps {
  children: ReactNode
  context?: {
    hostname: string
  }
}

const PageComponent = ({ children, location, context }: Props) => {
  return (
    <div className={s.page}>
      <Header />
      <div className={s.main}>{children}</div>
    </div>
  )
}

export const Page = withRouter(PageComponent)
