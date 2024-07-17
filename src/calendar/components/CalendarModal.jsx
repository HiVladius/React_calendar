import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material/";

import SaveIcon from "@mui/icons-material/Save";

import { modalStyles, textarea } from "../../styles";
import { addHours, differenceInSeconds } from "date-fns";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCalendarStore, useUIStore } from "../../hooks";

registerLocale("es", es);

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUIStore();
  const { activeEvent } = useCalendarStore();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";
    return formValues.title.length > 0 ? "" : "is-invalid";
  }, [formValues.title, formSubmitted]);

  useEffect(() => {
    if ( activeEvent !== null ) {
        setFormValues({ ...activeEvent });
    }    
    
  }, [ activeEvent ])

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onCloseModal = () => {
    closeDateModal();
  
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const diference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(diference) || diference <= 0) {
      Swal.fire(
        "Error",
        "La fecha fin debe ser mayor a la fecha de inicio",
        "error"
      );
      return;
    }
    if (formValues.title.length <= 0) return;
    console.log(formValues);
    setFormSubmitted(true);
  };

  return (
    <>
      <Modal
        open={isDateModalOpen}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography variant="h6" component={"h2"}>
            <strong>Nuevo evento</strong>
          </Typography>
          <hr />
          <form className="container" onSubmit={onSubmit}>
            <div className="form-group mb-2">
              <Typography
                sx={{ flexGrow: 1, marginTop: "13px", fontWeight: "bold" }}
              >
                Fecha y hora inicio
              </Typography>
              <DatePicker 
                    selected={ formValues.start }
                    onChange={ (event) => onDateChanged(event, 'start') }
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <div className="form-group mb-2">
              <Typography
                sx={{ flexGrow: 1, marginBottom: "13px", fontWeight: "bold" }}
              >
                Fecha y hora Fin
              </Typography>
              <DatePicker
                minDate={formValues.start}
                selected={formValues.end}
                onChange={(event) => onDateChanged(event, "end")}
                className="form-control"
                dateFormat="Pp"
                showTimeSelect
                locale="es"
                timeCaption="Hora"
              />
            </div>

            <div className="form-group mt-4 ">
              <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
                Titulo y notas
              </Typography>
              <input
                type="text"
                className={`form-control ${titleClass}`}
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
                value={formValues.title}
                onChange={onInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small>
            </div>

            <div className="form-group mb-2">
              <TextareaAutosize
                className={textarea.zone}
                aria-label="empty textarea"
                placeholder="Notas"
                name="notes"
                style={{ width: "100%" }}
                value={formValues.notes}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary btn-block">
              <SaveIcon
                sx={{ fontSize: 20, marginRight: "5px" }}
                color="primary"
                className="text-2xl"
              />
              <Typography
                variant="h8"
                sx={{ flexGrow: 1, marginBottom: "13px", fontWeight: "bold" }}
              >
                Guardar
              </Typography>
            </button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
