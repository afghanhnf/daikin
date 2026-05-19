import { cn } from '@/utils/cn'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('animate-pulse bg-soft-gray-2 rounded', className)} />
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 space-y-4">
      <Skeleton className="h-48 rounded-lg w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-8 w-1/3 rounded-btn" />
    </div>
  )
}
