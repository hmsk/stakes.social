import React from 'react'
import { Header } from '../Header'
import { Button } from 'antd'
import { Headline } from 'src/components/atoms/Headline'
import { H1 } from 'src/components/atoms/Typography'
import { A } from 'src/components/atoms/A'
import { useTranslation } from 'src/utils/i18n'

export const MainHeader = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <Headline>
        <H1>{t('hero')}</H1>
        {A({ href: '/how-it-works' })(
          <Button type="primary" size="large">
            How it works
          </Button>
        )}
      </Headline>
    </>
  )
}
