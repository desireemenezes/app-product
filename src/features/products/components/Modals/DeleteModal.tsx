import {
  Actions,
  CancelButton,
  DeleteButton,
  ModalContainer,
  Overlay,
} from "./DeleteModal.styles";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName?: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  productName,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h3>Excluir</h3>
        <p>
          Tem certeza que deseja excluir{" "}
          <strong>{productName || "este produto"}</strong>?
        </p>
        <Actions>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <DeleteButton onClick={onConfirm}>Excluir</DeleteButton>
        </Actions>
      </ModalContainer>
    </Overlay>
  );
}
