import React, { useRef } from 'react';
import TopicSelect from '../TopicSelect';
import SelectCustom from '../../UI/SelectCustom';
import { TOPIC_OPTIONS } from '../../../constants/topics';
import { WORD_LEVELS, WORD_TYPES, WORD_SPECIALTY } from '../../../constants/index';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import useStyle from './style';

const formId = 'wordPackForm';

function addAllOption(optionList = []) {
  return [{ value: '-1', label: 'Tất cả' }, ...optionList];
}

function WordPack(props) {
  const {
    onChoose,
    onCancel,
    open,
    topicMultiples,
    title,
    okBtnText,
    cancelBtnText,
    okBtnProps,
    cancelBtnProps,
  } = props;

  const classes = useStyle();
  const topics = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const type = target.type?.value || '-1',
      specialty = target.specialty?.value || '-1',
      topic = target.topic?.value || '-1',
      level = target.level?.value || '-1';

    onChoose({
      type,
      specialty,
      level,
      topics: topicMultiples ? topics.current : topic === '-1' ? [] : [topic],
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
                label="Word type"
                className="w-100"
                options={addAllOption(WORD_TYPES)}
                inputProps={{ name: 'type' }}
                index={0}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Level"
                className="w-100"
                options={addAllOption(WORD_LEVELS)}
                inputProps={{ name: 'level' }}
                index={0}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                label="Specialized"
                className="w-100"
                options={addAllOption(WORD_SPECIALTY)}
                inputProps={{ name: 'specialty' }}
                index={0}
              />
            </Grid>

            {topicMultiples ? (
              <TopicSelect
                onChange={(topicList) => (topics.current = topicList)}
                buttonWrapper={(props) => (
                  <Grid {...props} item xs={12} md={6} />
                )}
                tagsWrapper={(props) => <Grid {...props} item xs={12} />}
              />
            ) : (
              <Grid item xs={12} md={6}>
                <SelectCustom
                  label="Topic"
                  className="w-100"
                  options={addAllOption(TOPIC_OPTIONS)}
                  inputProps={{ name: 'topic' }}
                />
              </Grid>
            )}

            {Boolean(props.children) && (
              <Grid item xs={12} md={6}>
                {props.children}
              </Grid>
            )}
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

WordPack.propTypes = {
  cancelBtnProps: PropTypes.object,
  cancelBtnText: PropTypes.string,
  okBtnProps: PropTypes.object,
  okBtnText: PropTypes.string,
  onCancel: PropTypes.func,
  onChoose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  topicMultiples: PropTypes.bool,
};

WordPack.defaultProps = {
  onChoose: function () {},
  open: true,
  topicMultiples: true,
  title: 'Vocabulary Pack',
  okBtnText: 'Ok',
  cancelBtnText: 'Close',
  okBtnProps: {},
  cancelBtnProps: {},
};

export default WordPack;
