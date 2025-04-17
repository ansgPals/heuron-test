import Modal from "@/components/commons/Modal";
import CanvasViewer from "@/components/parts/CanvasViewer";
import { CanvasModalProps } from "@/types/interfaces/components";

export default function CanvasModal(props: CanvasModalProps) {
  const { handleClose, imageSrc, isOpen } = props;
  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
      <CanvasViewer src={imageSrc} />
    </Modal>
  );
}
