import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import InformationTooltip from "./InformationTooltip";
import PhoneticInput from "./PhoneticInput";
import InputCustom from "../../UI/InputCustom";
import SelectCustom from "../../UI/SelectCustom";
import TopicSelect from "../../UI/TopicSelect";
// import wordApi from "./../../../apis/wordApi";
import {
  MAX,
  WORD_LEVELS,
  WORD_SPECIALTY,
  WORD_TYPES,
} from "./../../../constants";
import useTitle from "./../../../hooks/useTitle";
import { setMessage } from "./../../../redux/actions/messageAction";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LoopIcon from "@mui/icons-material/Loop";
import ResetIcon from "@mui/icons-material/RotateLeft";
import SaveIcon from "@mui/icons-material/Save";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import useStyle from "./style";

const schema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required("Please enter a word here")
    .lowercase()
    .max(MAX.WORD_LEN, `The word length is already ${MAX.WORD_LEN} characters`),
  mean: yup
    .string()
    .trim()
    .lowercase()
    .required("Please enter the meaning of the word")
    .max(MAX.MEAN_WORD_LEN, `The word length is already ${MAX.MEAN_WORD_LEN} characters`),
  phonetic: yup
    .string()
    .trim()
    .lowercase()
    .required("Please enter the syllable of the word")
    .max(MAX.PHONETIC_LEN, `The word length is already ${MAX.PHONETIC_LEN} characters`),
  type: yup
    .string()
    .required("Choose the type of word")
    .oneOf(WORD_TYPES.map((i) => i.value)),
  level: yup
    .string()
    .required("Choose the rank of the word")
    .oneOf(WORD_LEVELS.map((i) => i.value)),
  specialty: yup
    .string()
    .required("Choose the rank of the word")
    .oneOf(WORD_SPECIALTY.map((i) => i.value)),
  examples: yup
    .string()
    .max(MAX.EXAMPLE_WORD_LEN, `Example up to ${MAX.EXAMPLE_WORD_LEN} characters`),
  synonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Synonyms up to ${MAX.SYNONYMS_WORD_LEN} characters`
    ),
  antonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Antonyms up to ${MAX.SYNONYMS_WORD_LEN} characters`
    ),
  note: yup
    .string()
    .max(MAX.NOTE_WORD_LEN, `Note up to ${MAX.NOTE_WORD_LEN} characters`),
});

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function WordContribution({ onSubmitForm, submitting }) {
  useTitle("Add word");

  const classes = useStyle();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const topics = useRef([]);
  const history = useNavigate();
  const defaultImg =
  "https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png";
  const [image, setImage] = useState(defaultImg);

  const convertImageToBase64 = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const handleChangePicture = (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) {
        dispatch(setMessage("No files were uploaded", "error"));
      }
      if (file.size / 1024 ** 2 > 2) {
        dispatch(setMessage("Size too large", "error"));
      }
      convertImageToBase64(file).then(res => {
        setImage(res);
      });
      
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = (data) => {
    onSubmitForm({ ...data, topics: topics.current, picture: image });
  };

  return (
    <div>
      <h1 className={classes.title}>Thêm từ mới</h1>
      <div className="english-break"></div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid container alignContent="center">
          <div className={classes.avtWrap}>
            <img
              src={image ? image : defaultImg}
              alt=""
              className={`${classes.avt} w-100 h-100`}
            />
            <div className={`${classes.cameraIconWrap} flex-center`}>
              <CameraIcon className={classes.cameraIcon} />
              <input
                type="file"
                className={classes.fileInput}
                onChange={handleChangePicture}
                accept="image/*"
              />
            </div>
          </div>
        </Grid>
        <Grid className={classes.grid} container spacing={3}>
          {/* new word */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Vocabulary (*)"
              error={Boolean(errors.word)}
              inputProps={{
                autoFocus: true,
                maxLength: MAX.WORD_LEN,
                name: "word",
                ...register("word"),
              }}
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.word && (
              <p className="text-error">{errors.word?.message}</p>
            )}
          </Grid>

          {/* mean */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Meaning of the word(*)"
              error={Boolean(errors.mean)}
              inputProps={{
                maxLength: MAX.MEAN_WORD_LEN,
                name: "mean",
                ...register("mean"),
              }}
            />
            {errors.mean && (
              <p className="text-error">{errors.mean?.message}</p>
            )}
          </Grid>

          {/* phonetic */}
          <PhoneticInput
            errorMessage={errors.phonetic?.message}
            error={Boolean(errors.phonetic)}
            valuePhonetic=""
            inputProps={{
              maxLength: MAX.PHONETIC_LEN,
              name: "phonetic",
            }}
            register={register("phonetic")}
          />

          {/* word type */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Word type (*)"
              options={WORD_TYPES}
              error={Boolean(errors.type)}
              index={0}
              inputProps={{
                name: "type",
                ...register("type"),
              }}
              // onChange={(e) => handleCheckWordExistence(null, e)}
            />
            {errors.type && (
              <p className="text-error">{errors.type?.message}</p>
            )}
          </Grid>

          {/* word level */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Level of the word(*)"
              options={WORD_LEVELS}
              error={Boolean(errors.level)}
              index={0}
              inputProps={{ name: "level", ...register("level") }}
            />
            {errors.level && (
              <p className="text-error">{errors.level?.message}</p>
            )}
          </Grid>

          {/* word specialty */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Belonging to specialization"
              options={WORD_SPECIALTY}
              error={Boolean(errors.specialty)}
              index={0}
              inputProps={{
                name: "specialty",
                ...register("specialty"),
              }}
            />
            {errors.specialty && (
              <p className="text-error">{errors.specialty?.message}</p>
            )}
          </Grid>

          {/* examples */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Example sentences"
              multiline
              endAdornment={
                <InformationTooltip title="Add example sentences for the word above. Make sure the word appears in the sentence. You can add multiple sentences by entering a newline." />
              }
              error={Boolean(errors.examples)}
              inputProps={{
                name: "examples",
                ...register("examples"),
              }}
            />

            {errors.examples && (
              <p className="text-error">{errors.examples?.message}</p>
            )}
          </Grid>

          {/* synonyms */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Synonyms"
              multiline
              error={Boolean(errors.synonyms)}
              inputProps={{
                name: "synonyms",
                ...register("synonyms"),
              }}
            />
            {errors.synonyms && (
              <p className="text-error">{errors.synonyms?.message}</p>
            )}
          </Grid>

          {/* antonyms */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Antonyms"
              multiline
              error={Boolean(errors.antonyms)}
              inputProps={{
                name: "antonyms",
                ...register("antonyms"),
              }}
            />
            {errors.antonyms && (
              <p className="text-error">{errors.antonyms?.message}</p>
            )}
          </Grid>

          {/* note */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Note"
              multiline
              endAdornment={
                <InformationTooltip title="Enter the extra note you want for the word. Add multiple lines by newline." />
              }
              error={Boolean(errors.note)}
              inputProps={{
                name: "note",
                ...register("note"),
              }}
            />
            {errors.note && (
              <p className="text-error">{errors.note?.message}</p>
            )}
          </Grid>

          <TopicSelect
            onChange={(topicList) => (topics.current = topicList)}
            buttonTitle="More topics"
            buttonWrapper={ButtonWrapper}
            tagsWrapper={TagsWrapper}
          />
        </Grid>

        <div className="english-break"></div>
        {/* button group */}
        <div className="d-flex flex-end jus-content-end pt-5 w-100">
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            color="secondary"
            endIcon={<ResetIcon />}
            variant="outlined"
            onClick={() => history.replace("/admin/word")}
          >
            Come back
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained"
          >
            More words
          </Button>
        </div>
      </form>
    </div>
  );
}

WordContribution.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

WordContribution.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default WordContribution;
