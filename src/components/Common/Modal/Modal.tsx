import { forwardRef, useCallback, useState, useImperativeHandle, useEffect } from "react"
import { createPortal } from "react-dom"
import { IActions, IModal } from "../../../interfaces/IModal"
import { IconClose } from "../../../theme/common/Icons.styled"
import ModalStyled from "./Modal.styled"

const modalElement = document.getElementById("modal-root")

const Modal = forwardRef<IActions | null, IModal>(({ children, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close],
  )

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close()
    },
    [close],
  )

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.removeEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (!modalElement) return null
  return createPortal(
    isOpen ? (
      <ModalStyled>
        <div className="modal-overlay" onClick={close} />
        <span role="button" className="modal-close" aria-label="close" onClick={close}>
          <IconClose />
        </span>
        <div className="modal-body">{children}</div>
      </ModalStyled>
    ) : null,
    modalElement,
  )
})

export default Modal
