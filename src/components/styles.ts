import { styled, Grid } from '@mui/material';

const CustomForm = styled('form')({
    display: 'flex',
    width: '95%',
    position: 'relative',
    alignItems: 'center'
});

const CustomInput = styled('input')({
    width: '100%',
    borderRadius: '50px',
    padding: '20px 30px',
    fontSize: '25px',
    border: 'none',
    transition: '0.2s',
    boxShadow: 'inset 0 0 5px black',
    '&:focus': {
        boxShadow: '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        outline: 'none'
    }
});

const SxButton = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    margin: '12px',
    borderRadius: '50px',
    right: '0',
    border: 'none',
    fontSize: '15px',
    backgroundColor: '#2f74c0',
    color: '#fff',
    transition: '0.2s all',
    boxShadow: '0 0 10px black',
    '&:hover': { backgroundColor: '#388ae2' },
    '&:active': { transform: 'scale(0.8)', boxShadow: '0 0 5px black' },
    textTransform: 'none'
};

const CustomFormSingle = styled('form')({
    display: 'flex',
    borderRadius: '5px',
    padding: '20px',
    marginTop: '15px',
    backgroundImage:
        "url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')",
    transition: '0.2s',
    '&:active': {
        boxShadow: '0 0 20px black'
    },
    '&:hover': {
        transform: 'scale(0.95)'
    }
});

const CustomInputSingle = styled('input')({
    flex: '1',
    padding: '5px',
    border: 'none',
    fontSize: '20px'
});

const StrikeThrough = styled('span')({
    flex: '1',
    padding: '5px',
    border: 'none',
    fontSize: '20px',
    '&:focus': { outline: 'none' }
});

const SxIcon = {
    marginLeft: '10px',
    fontSize: '25px',
    cursor: 'pointer'
};

const SxHeading = {
    textTransform: 'uppercase',
    fontSize: '40px',
    margin: '30px 0',
    color: '#fff',
    zIndex: '1',
    textAlign: 'center',
    fontFamily: "'Neucha', cursive"
};

const SxApp = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2f74c0',
    fontFamily: "'Neucha', cursive"
};

const CustomGrid = styled(Grid)({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: '15px',
    borderRadius: '5px'
});

const SxTasks = {
    fontSize: '30px',
    color: 'white',
    fontFamily: "'Neucha', cursive"
};

export {
    CustomForm,
    CustomInput,
    SxButton,
    CustomFormSingle,
    CustomInputSingle,
    StrikeThrough,
    SxIcon,
    SxHeading,
    SxApp,
    SxTasks,
    CustomGrid
};
