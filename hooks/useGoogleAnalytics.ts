'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import * as gtag from '@/lib/gtag'

export const useGoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtag.pageview(url)
  }, [pathname, searchParams])
}