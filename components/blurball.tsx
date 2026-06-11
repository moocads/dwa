import { cn } from "@/lib/utils"

export function BlurBall(props: { className?: string }) {
  const { className } = props
  return (
    <div
      className={cn(
        "pointer-events-none h-[400px] w-[400px] rounded-full bg-dwa-orange blur-[150px]",
        className
      )}
    />
  )
}