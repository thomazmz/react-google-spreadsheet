import React, { useEffect, useState } from 'react'
import { ServiceProviderGrid } from '../../components/serviceProviderGrid'
import { getServiceProviders } from '../../spreadSheets'

export default function Home() {

  const [serviceProviders, setServiceProviders] = useState([])

  const loadServiceProvicers = async () => {
    const serviceProvidersJson = await getServiceProviders()
    setServiceProviders(serviceProvidersJson)
  }

  useEffect(() => {
    loadServiceProvicers()
  }, [])

  return <ServiceProviderGrid content={serviceProviders} />
}