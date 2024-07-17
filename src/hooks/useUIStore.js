import { useSelector, useDispatch } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../store";

export const useUIStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch( onOpenDateModal() )
}

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  //TODO: Generar una condicional, que si han pasado mas de 10 segundos, se cierre el modal

  // const autoCloseDateModal = () => {
  //   const timer = setTimeout(() => {
  //     closeDateModal();
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }
    


  return {
    //*Propiedades
    isDateModalOpen,
    
    //*Métodos
    openDateModal,
    closeDateModal,
    // autoCloseDateModal,
  };
};
