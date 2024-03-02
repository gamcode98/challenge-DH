import { useState } from 'react'

export function useAlert () {
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    severity: undefined
  })

  const handleCloseAlert = () => {
    setAlert(prev => {
      return {
        ...prev,
        show: false
      }
    })
  }

  const handleShowAlert = (message, severity) => {
    setAlert({
      show: true,
      message,
      severity
    })
  }

  return {
    alert,
    handleCloseAlert,
    handleShowAlert
  }
}
