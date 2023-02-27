import React from "react"
import { Modal, Button, Text } from "@nextui-org/react"
import { Box } from '../styles/box'

interface ModalProps {
  url: string;
  visible: boolean;
  close: Function
}
/* 封装nextUI的modal组件 */
export function MyModal({ ...props }: ModalProps) {
  const closeHandler = () => {
    props.close(false)
  }
  const handler = () => {
    closeHandler()
    window.open(props.url, '_blank')
  }
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={props.visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          提 示
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Box>您即将前往第三方网站: <div style={{ fontWeight: 'bolder', wordBreak: 'break-all' }}>{props.url}</div></Box>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          再想想
        </Button>
        <Button auto onPress={handler}>
          出发
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
