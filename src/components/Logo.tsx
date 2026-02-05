import Image from 'next/image'
import clsx from 'clsx'

export function Logo({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'inset-0 overflow-hidden',
        className,
      )}
    >
      <Image
        className={clsx(
          position === 'left' &&
            'left-0',
          position === 'right' &&
            'left-full',
        )}
        src="/images/Logo_break_the_pattern.png"
        alt="Break the Pattern logo"
        width={600}
        style={{ height: 'auto' }}
        priority
        unoptimized
      />
    </div>
  )
}
