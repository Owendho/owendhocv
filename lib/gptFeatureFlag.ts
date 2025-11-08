// Simple feature flag for enabling GPT-5 for all clients.
// Reads from NEXT_PUBLIC_GPT5_ENABLED at build time with a safe default (enabled).

const raw = (process.env.NEXT_PUBLIC_GPT5_ENABLED ?? 'true').toString().trim().toLowerCase()

export const GPT5_ENABLED: boolean = !['false', '0', 'off', 'no'].includes(raw)

export function isGpt5Enabled(): boolean {
  return GPT5_ENABLED
}
