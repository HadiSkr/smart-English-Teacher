import React from 'react';
import SelectCustom from '../../UI/SelectCustom';
// import TopicSelect from '../../UI/TopicSelect';
import { LISTEN_TOPIC } from '../../../constants/listeningTopics';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import useStyle from './style';
// import { WORD_TYPES, WORD_SPECIALTY, WORD_LEVELS } from 'constants';

const formId = 'listenTopicPackForm';

function addAllOption(optionList = []) {
  return [{ value: 'All', label: 'All' }, ...optionList];
}

function ListeningTopic(props) {
  const {
    onChoose,
    onCancel,
    open,
   // topicMultiples,
    title,
    okBtnText,
    cancelBtnText,
    okBtnProps,
    cancelBtnProps,
  } = props;

  const classes = useStyle();
  //const topics = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const topic = target.topic?.value || '-1'

    //console.log(topic);
    onChoose({
     topic
    });
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      maxWidth="md"
      fullWidth
      disableBackdropClick
      open={open}>
      <DialogTitle classes={{ root: classes.title }}>{title}</DialogTitle>

      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form id={formId} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Topic"
                className="w-100"
                index={0}
                options={addAllOption(LISTEN_TOPIC)}
                inputProps={{ name: 'topic' }}
              />
            </Grid>
           
          
          </Grid>
        </form>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onCancel}
          className="_btn _btn-stand"
          variant="outlined"
          {...cancelBtnProps}>
          {cancelBtnText}
        </Button>
        <Button
          autoFocus
          disableFocusRipple
          component="button"
          type="submit"
          form={formId}
          className="_btn _btn-primary"
          variant="contained"
          {...okBtnProps}>
          {okBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ListeningTopic.propTypes = {
  cancelBtnProps: PropTypes.object,
  cancelBtnText: PropTypes.string,
  okBtnProps: PropTypes.object,
  okBtnText: PropTypes.string,
  onCancel: PropTypes.func,
  onChoose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
 // topicMultiples: PropTypes.bool,
};

ListeningTopic.defaultProps = {
  onChoose: function () {},
  open: true,
 // topicMultiples: true,
  title: 'Topic',
  okBtnText: 'Ok',
  cancelBtnText: 'Close',
  okBtnProps: {},
  cancelBtnProps: {},
};

export default ListeningTopic;
