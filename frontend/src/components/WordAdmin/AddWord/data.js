import React, { useState } from "react";
import { useDispatch } from "react-redux";
import WordContribution from "./index";
import wordApi from "../../../apis/wordApi";
import { setMessage } from "../../../redux/actions/messageAction";
// import { messageReducer } from '/src/redux/reducers/messageReducer';
//import messageReducer from 'redux/reducers/messageReducer';

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

function WordContributionData() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      setSubmitting(true);
      const { examples, synonyms, antonyms, word, phonetic, ...rest } = data;

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
        word,
        phonetic: phonetic.replaceAll("/", ""),
      };
      const apiRes = await wordApi.postWord(dataSend);
      if (apiRes) {
        dispatch(setMessage("Created word successfully", "success"));
        setSubmitting(false);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Error, can not create word";
      dispatch(setMessage(message, "error"));
      setSubmitting(false);
    }
  };

  return (
    <WordContribution onSubmitForm={handleSubmit} submitting={submitting} />
  );
}

export default WordContributionData;
