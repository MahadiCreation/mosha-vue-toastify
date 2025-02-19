import { createVNode, render } from 'vue'
import { DEFAULT_OPTIONS, TOAST_GAP } from '../config'
import { Position, ToastObject, ToastOptions, ToastContent } from '../types'
import Toast from './MToast.vue'

const toasts: Record<Position, ToastObject[]> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
  'top-center': [],
  'bottom-center': []
}

let toastId = 0

export const initializeOptions = (options: ToastOptions): ToastOptions => {
  const processedOptions: ToastOptions = {
    ...options,
    type: options.type || DEFAULT_OPTIONS.type,
    timeout: options.timeout || DEFAULT_OPTIONS.timeout,
    showCloseButton: options.showCloseButton,
    position: options.position || DEFAULT_OPTIONS.position,
    showIcon: options.showIcon,
    swipeClose: options.swipeClose,
    transition: options.transition || DEFAULT_OPTIONS.transition
  }

  processedOptions.hideProgressBar =
    processedOptions.timeout !== undefined && processedOptions.timeout <= 0
  if (options.hideProgressBar !== undefined) {
    processedOptions.hideProgressBar = options.hideProgressBar
  }
  return processedOptions
}

export const initializeContent = (
  content: ToastContent
): { text: string; description: string | undefined } => {
  const text = typeof content === 'string' ? content : content.title
  const description =
    typeof content === 'string' ? undefined : content.description

  return { text, description }
}

export const moveToastsOnAdd = (options: ToastOptions): number => {
  let verticalOffset = TOAST_GAP

  if (!options.position) throw new Error('no position')
  toasts[options.position].forEach(({ toastVNode }) => {
    const offsetHeight = (toastVNode.el as HTMLElement).offsetHeight + TOAST_GAP
    verticalOffset += offsetHeight || 0
  })
  return verticalOffset
}

// eslint-disable-next-line
export const setupVNodeProps = (
  options: ToastOptions,
  content: { text: string; description: string | undefined },
  id: number,
  offset: number
) => {
  return {
    ...options,
    ...content,
    id,
    offset,
    visible: false,
    onCloseHandler: () => {
      close(id, options.position ? options.position : 'top-right')
    }
  }
}

export const setupVNode = (
  options: ToastOptions,
  content: { text: string; description: string | undefined }
): void => {
  const verticalOffset = moveToastsOnAdd(options)
  const id = toastId++

  const container = document.createElement('div')
  document.body.appendChild(container)

  const toastVNode = createVNode(
    Toast,
    setupVNodeProps(options, content, id, verticalOffset)
  )

  render(toastVNode, container)

  if (!options.position) return
  toasts[options.position].push({ toastVNode, container })

  if (toastVNode.component) {
    toastVNode.component.props.visible = true
  }
}

export const createToast = (
  content: ToastContent,
  options?: ToastOptions
): void => {
  if (!content) return
  const initializedContent = initializeContent(content)
  const initializedOptions = options
    ? initializeOptions(options)
    : DEFAULT_OPTIONS

  setupVNode(initializedOptions, initializedContent)
}

const moveToastsOnClose = (
  index: number,
  toastArr: ToastObject[],
  position: Position,
  toastHeight: number
) => {
  for (let i = index; i < toastArr.length; i++) {
    const { toastVNode } = toastArr[i] as ToastObject

    if (!toastVNode.el) return

    const verticalPos: string = position.split('-')[0] || 'top'
    const pos =
      parseInt(toastVNode.el.style[verticalPos], 10) - toastHeight - TOAST_GAP

    if (!toastVNode.component) return
    toastVNode.component.props.offset = pos
  }
}

const close = (id: number, position: Position) => {
  const toastArr = toasts[position]

  const index = toastArr.findIndex(
    ({ toastVNode }) => toastVNode.props && id === toastVNode.props.id
  )

  if (index === -1) return
  const { container, toastVNode } = toastArr[index] as ToastObject

  if (!toastVNode.el) return
  const height = toastVNode.el.offsetHeight

  toasts[position].splice(index, 1)
  moveToastsOnClose(index, toastArr, position, height)

  if (!toastVNode.component) return
  toastVNode.component.props.visible = false

  if (toastVNode.component.props.onClose) {
    // eslint-disable-next-line
    ;(toastVNode.component.props as any).onClose()
  }

  setTimeout(() => {
    render(null, container)
    document.body.removeChild(container)
  }, 1000)
}
