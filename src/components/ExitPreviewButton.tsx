'use client'
import React from 'react'
import { Button } from '@payloadcms/ui'

const onPreviewExit = () => {
  return fetch('/next/exit-preview')
    .then(() => {
      window.location.reload()
    })
    .catch(console.error)
}

export const ExitPreviewButton: React.FC = () => (
  <div>
    <Button onClick={onPreviewExit}>Exit Preview</Button>
  </div>
)
