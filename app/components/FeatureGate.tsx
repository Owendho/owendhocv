"use client"

import type { ReactNode } from 'react'
import { GPT5_ENABLED } from '../../lib/gptFeatureFlag'

type Props = {
  children: ReactNode
  fallback?: ReactNode
  enabled?: boolean // optional override per-instance
}

export default function FeatureGate({ children, fallback = null, enabled }: Props) {
  const on = typeof enabled === 'boolean' ? enabled : GPT5_ENABLED
  return on ? <>{children}</> : <>{fallback}</>
}
