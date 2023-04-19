import { Float, type FloatProps } from '@headlessui-float/react'

// @ts-expect-error
interface Props extends FloatProps {
  button: (args: {
    open: () => void
    close: () => void
    delayClose: () => void
  }) => JSX.Element
  children: (args: {
    open: () => void
    close: () => void
    delayClose: () => void
  }) => React.ReactNode
}

export function CHoverMenu({ button, children, ...props }: Props) {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
      timer.current = null
    }
    setShow(true)
  }
  const close = () => {
    setShow(false)
  }

  const delayClose = () => {
    timer.current = setTimeout(() => {
      setShow(false)
    }, 50)
  }

  return (
      <Float
          placement="bottom"
          show={show}
          {...props}
      >

          {button({ open, close, delayClose })}

          <div className="pt-2">
              {children({ open, delayClose, close })}
          </div>
      </Float>
  )
}
