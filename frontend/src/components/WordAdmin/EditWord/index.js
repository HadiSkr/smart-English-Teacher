import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InformationTooltip from "./../AddWord/InformationTooltip";
import PhoneticInput from "./../AddWord/PhoneticInput";
import wordApi from "./../../../apis/wordApi";
import InputCustom from "../../UI/InputCustom";
import SelectCustom from "../../UI/SelectCustom";
import {
  MAX,
  WORD_LEVELS,
  WORD_SPECIALTY,
  WORD_TYPES,
} from "./../../../constants/index";
import TopicSelect from "../../UI/TopicSelect";
import { convertImageToBase64 } from "./../../../helper/index";
import useTitle from './../../../hooks/useTitle';
import { setMessage } from "./../../../redux/actions/messageAction";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LoopIcon from "@mui/icons-material/Loop";
import ResetIcon from "@mui/icons-material/RotateLeft";
import SaveIcon from "@mui/icons-material/Save";
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
    .required("Enter the word's phonogram")
    .max(MAX.PHONETIC_LEN, `The maximum length of the word is ${MAX.PHONETIC_LEN} characters`),
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

const analysisExample = (exampleStr = "", word = "") => {
  if (typeof exampleStr !== "string" || exampleStr === "") {
    return [];
  }

  const exampleArr = exampleStr.split("\n");
  for (let str of exampleArr) {
    if (str.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) === -1) {
      return false;
    }
  }

  return exampleArr;
};

const getTypeCurrent = (type = "", options = []) => {
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === type) {
      return i;
    }
  }
  return 0;
};

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function EditWord() {
  useTitle('Edit word');
  const classes = useStyle();
  const [submitting, setSubmitting] = useState(false);
  const defaultImg =
    "https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png";

  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  const [phonetic, setPhonetic] = useState('');

  const [wordValue, setWordValue] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async function () {
      const apiRes = await wordApi.getWord(id);
      apiRes.data.examples = apiRes.data.examples.join('\n');
      apiRes.data.synonyms = apiRes.data.synonyms.join('\n');
      apiRes.data.antonyms = apiRes.data.antonyms.join('\n');
      setWordValue(apiRes.data);
      setPhonetic(apiRes.data.phonetic)
      setImage(apiRes.data.picture);
    })();
    return () => {};
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWordValue({ ...wordValue, [name]: value });
  }

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
      convertImageToBase64(file).then((res) => {
        setImage(res);
      });
    } catch (err) {
      throw err;
    }
  };
  const topics = useRef([]);
  const onSubmit = async (e) => {
    try {
      setSubmitting(true);
      const { examples, synonyms, antonyms, word, ...rest } = wordValue;
      // check examples validation
      const exampleArr = analysisExample(examples, word);
      if (typeof exampleArr === "boolean" && !exampleArr) {
        dispatch(setMessage("Example sentences must contain new vocabulary.", "warning"));
        setSubmitting(false);
        return;
      }

      // split synonyms string to an array synonyms
      const synonymArr = synonyms !== "" ? synonyms.split("\n") : [];

      // split antonyms string to an array synonyms
      const antonymArr = antonyms !== "" ? antonyms.split("\n") : [];

      // call API
      const dataSend = {
        ...rest,
        examples: exampleArr,
        synonyms: synonymArr,
        antonyms: antonymArr,
        topics: topics.current,
        picture: image,
        phonetic: phonetic.replaceAll("/", ""),
      };

      const apiRes = await wordApi.putWord(id, dataSend);

      if (apiRes) {
        dispatch(setMessage("Update word successfully", "success"));
        setSubmitting(false);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Error, can not update word.";
      dispatch(setMessage(message, "error"));
      setSubmitting(false);
    }
  };


  function handleClickGoBack() {
    history("/admin/word");
  }

  return (
     <div >
      <h1 className={classes.title}>Edit word</h1>
      <div className="english-break"></div>

      {wordValue && (
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
                label="Word"
                value={wordValue.word}
              //  onChange={handleChange}
              />
            </Grid>

            {/* mean */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Meaning"
                value={wordValue.mean}
                error={Boolean(errors.mean)}
                inputProps={{
                  maxLength: MAX.MEAN_WORD_LEN,
                  name: "mean",
                  ...register("mean"),
                }}
                onChange={handleChange}
              />
              {errors.mean && (
                <p className="text-error">{errors.mean?.message}</p>
              )}
            </Grid>

            {/* phonetic */}
            <PhoneticInput
              errorMessage={errors.phonetic?.message}
              error={Boolean(errors.phonetic)}
              value={wordValue.phonetic}
              inputProps={{
                maxLength: MAX.MEAN_WORD_LEN,
                name: "phonetic",
              }}
              register={register("phonetic")}
              onChange={handleChange}
            />

            {/* word type */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Type (*)"
                options={WORD_TYPES}
                error={Boolean(errors.type)}
                index={getTypeCurrent(wordValue.type, WORD_TYPES)}
                inputProps={{
                  name: "type",
                  ...register("type"),
                }}
                onChange={handleChange}
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
                index={getTypeCurrent(wordValue.level, WORD_LEVELS)}
                inputProps={{ name: "level", ...register("level") }}
                onChange={handleChange}
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
                index={getTypeCurrent(wordValue.specialty, WORD_SPECIALTY)}
                inputProps={{
                  name: "specialty",
                  ...register("specialty"),
                }}
                onChange={handleChange}
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
                value={wordValue.examples}
                multiline
                endAdornment={
                  <InformationTooltip title="Add example sentences for the word above. Make sure the word appears in the sentence. You can add multiple sentences by entering a newline." />
                }
                error={Boolean(errors.examples)}
                inputProps={{
                  name: "examples",
                  ...register("examples"),
                }}
                onChange={handleChange}
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
                value={wordValue.synonyms}
                error={Boolean(errors.synonyms)}
                inputProps={{
                  name: "synonyms",
                  ...register("synonyms"),
                }}
                onChange={handleChange}
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
                value={wordValue.antonyms}
                error={Boolean(errors.antonyms)}
                inputProps={{
                  name: "antonyms",
                  ...register("antonyms"),
                }}
                onChange={handleChange}
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
                value={wordValue.note}
                endAdornment={
                  <InformationTooltip title="Enter the extra note you want for the word. Add multiple lines by newline." />
                }
                error={Boolean(errors.note)}
                inputProps={{
                  name: "note",
                  ...register("note"),
                }}
                onChange={handleChange}
              />
              {errors.note && (
                <p className="text-error">{errors.note?.message}</p>
              )}
            </Grid>

            {/* word topics */}
            <TopicSelect
              onChange={(topicList) => (topics.current = topicList)}
              buttonTitle="Choose a theme"
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
              // disabled={}
              onClick={() => handleClickGoBack()}
            >
              Back
            </Button>
            <Button
              type="submit"
              className={`${classes.btn} _btn _btn-primary`}
              disabled={submitting}
              endIcon={
                submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
              }
              variant="contained"
              onClick={() => onSubmit()}
            >
              Sửa từ
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

EditWord.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

EditWord.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default EditWord;
