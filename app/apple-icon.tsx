import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: '#282B59',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '36px',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '12px',
        height: '90px',
        width: '100px',
      }}>
        <div style={{
          width: '22px',
          height: '40px',
          background: 'white',
          borderRadius: '4px',
          opacity: 0.7,
        }} />
        <div style={{
          width: '22px',
          height: '65px',
          background: 'white',
          borderRadius: '4px',
          opacity: 0.85,
        }} />
        <div style={{
          width: '22px',
          height: '90px',
          background: 'white',
          borderRadius: '4px',
          opacity: 1,
        }} />
      </div>
    </div>,
    { ...size }
  )
}
