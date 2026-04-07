export function BlurBall(props: { className?: string }) {
    const { className } = props
  return (
    <div className={`w-[400px] h-[400px] bg-dwa-orange rounded-full blur-[150px] pointer-events-none ${className}`} />
  )
}