import React, { useEffect, useState } from 'react'
interface MeetingEmbedProps {
  height?: string
  width?: string
}
export const ZoomMeeting: React.FC<MeetingEmbedProps> = ({
  height = '600px',
  width = '100%',
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const meetingUrl = localStorage.getItem("eduSpace_zoom_join_link");

  const handleIframeLoad = () => {
    setIsLoading(false)
  }
  const handleIframeError = () => {
    setIsLoading(false)
    setError('Failed to load the meeting. Please check the URL and try again.')
  }

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile && meetingUrl) {
      window.location.href = meetingUrl // redirects user directly
    }
  }, [meetingUrl])

  
  return (
    <div className="w-full flex flex-col items-center">
      {isLoading && (
        <div className="py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600">Loading your meeting...</p>
        </div>
      )}
      {error && (
        <div className="py-8 text-center text-red-500">
          <p>{error}</p>
        </div>
      )}
      <iframe
        src={meetingUrl ?? ""}
        width={width}
        height={height}
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        style={{
          border: 'none',
        }}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        className={`${isLoading ? 'hidden' : 'block'} border-0 rounded-lg shadow-lg`}
      ></iframe>
    </div>
  )
}