import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Container, Box, Typography, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Context from '../../context/Context';
import ModalFormChild from '../ModalFormChild/ModalFormChild';
import { style, FormStyled, CssTextField } from './ModalFormCheckoutStyled';
import FormCheckoutPerson from '../FormCheckoutPerson/FormCheckoutPerson';
import FormCheckoutAdress from '../FormCheckoutAdress/FormCheckoutAdress';
import FormCheckoutPayment from '../FormCheckoutPayment/FormCheckoutPayment';
import SucessComponent from '../SucessComponent/SucessComponent';

type ModalFormCheckoutProps = {
  open: boolean,
  setOpen: (open: boolean) => void,
};

function ModalFormCheckout({ open, setOpen }: ModalFormCheckoutProps) {
  const { personData, etapaAtual, setEtapaAtual } = useContext(Context);

  useEffect(() => {
    setEtapaAtual(1);
  }, [setEtapaAtual]);

  const handleClose = () => {
    setOpen(false);
    setEtapaAtual(1);
  };
  console.log(personData);

  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Modal
          open={ open }
          onClose={ handleClose }
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={ { ...style } }>
            <Grid
              item
              sx={ { width: '100%', display: 'contents', position: 'relative' } }
            >
              {etapaAtual === 1 && (
                <FormCheckoutPerson />
              )}
              {etapaAtual === 2 && (
                <FormCheckoutAdress />
              )}
              {etapaAtual === 3 && (
                <FormCheckoutPayment />
              )}
              {etapaAtual === 4 && (
                <SucessComponent handleClose={ handleClose } />
              )}
              <Box sx={ { position: 'absolute', top: 15, right: 10 } }>
                <Button
                  onClick={ handleClose }
                  variant="outlined"
                  size="small"
                  sx={ { minWidth: '0px' } }
                >
                  <CloseIcon sx={ { fontSize: 20 } } />
                </Button>
              </Box>
            </Grid>
            {/* <ModalFormChild /> */}
          </Box>
        </Modal>
      </div>
    </StyledEngineProvider>
  );
}

export default ModalFormCheckout;
