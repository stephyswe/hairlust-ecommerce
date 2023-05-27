import { createContext, useContext, useState } from 'react'
import { handleHtmlBodyOverFlow } from '../../components/common/Layout/Layout'

interface ModalDefState {
  modalName: string
  modalIndex: number
  handleModalDefToggle: (type: string) => void
  handleModalIndexToggle: (type: string, index: number) => void
  handleModalClose: () => void
}

const ModalDefContext = createContext<undefined | ModalDefState>(undefined)

const ModalDefProvider = ({ children }: any) => {
  const [modalName, setModalName] = useState<string>('')
  const [modalIndex, setModalIndex] = useState<number>(0)

  const handleModalDefToggle = (type: any) => (
    setModalName(type), handleHtmlBodyOverFlow(modalName)
  )

  const handleModalIndexToggle = (type: any, index: number) => (
    setModalName(type), setModalIndex(index), handleHtmlBodyOverFlow(modalName)
  )

  const handleModalClose = () => (
    setModalName(''), setModalIndex(0), handleHtmlBodyOverFlow(modalName)
  )

  return (
    <ModalDefContext.Provider
      value={{
        modalName,
        modalIndex,
        handleModalDefToggle,
        handleModalIndexToggle,
        handleModalClose,
      }}
    >
      {children}
    </ModalDefContext.Provider>
  )
}

export function useModalDef() {
  const context = useContext(ModalDefContext)
  if (context === undefined) {
    throw new Error('useModalDef must be used within a ModalDefProvider')
  }
  return context
}

export { ModalDefContext, ModalDefProvider }
