import React from 'react'
import { ServiceProviderGrid } from '../../components/serviceProviderGrid'

export default function Home() {

  const news = [
    {
      name: 'someName',
      category: 'someCategory',
      phoneNumber: 'somePhoneNumber',
      email: 'someEmailAddress',
      city: 'someCity',
      address: 'someAddress'
    },
    {
      name: 'someAnotherName',
      category: 'someAnotherCategory',
      phoneNumber: 'someAnotherPhoneNumber',
      email: 'someAnotherEmail',
      city: 'someAnotherCity',
      address: 'someAnotherAddress'
    }
  ]

  return <ServiceProviderGrid content={news} />
}
