import React,{ useEffect, useState}  from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import quizApi from "../apis/quizApi";
import questionApi from "../apis/questionApi";
import { dictionaryRoot } from "../components/UI/style";
import useTitle from '../hooks/useTitle';
import { deleteQuestion } from "../redux/actions/questionAction";
import { setMessage } from "../redux/actions/messageAction";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function QuizDetailPage() {

  useTitle('Quiz detail');

  const classes = useStyle();
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [quizID, settQuizID] = useState(null);
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    (async function () {
      const apiRes = await quizApi.getQuizByListen(id);
      setQuiz(apiRes.data);
      settQuizID(apiRes.data ? apiRes.data._id : null);
    })();
    return () => {};
  }, [id]);

  useEffect(() => {
    (async function () {
      if (quizID === null) {
        return;
      }
      const apiRes = await questionApi.getQuestionByQuiz(quizID);
      setQuestions(apiRes.data.questions);
    })();
    return () => {};
  }, [quizID]);

  const deleteHandler = (id) => {
    try{
    if (window.confirm('Are you sure you want to delete this question?')) {
     dispatch(deleteQuestion(id))
       dispatch(setMessage("Delete successfully", "success"));
        window.location.reload();
      }
    }
    catch {

      dispatch(setMessage("Can't delete question", "error"));
    }
  };

  const handleAddQuiz = async () => {
    try {
      const apiRes = await quizApi.postQuizByListen(id);
      if (apiRes) {
        dispatch(setMessage("Create quiz successfully", "success"));
        window.location.reload();
      }
    } catch (error) {
      dispatch(setMessage(error.response.data.message));
    }
  };
  return (
    <div className={`${classes.root} english-container`}>
      <div className="flex-center-between">
        <h1 className="english-title">Quiz</h1>
        {quiz && (
          <AddIcon
            className="english-setting-icon mr-5"
            onClick={() => history(`/admin/quiz/add/${id}/${quizID}`)}
          />
        )}
      </div>
      <div className="english-break"></div>
      {quiz ? (
        questions ? (
          questions.map((question, index) => (
            <>  <div className={`${classes.root} flex-center-between`}>
            <div key={index} className="mb-6">
              <Typography variant="h5">{question.Content}</Typography>
              {question.Answers.map((answer, index) => (
                <div key={index} className="d-flex">
                  <Typography variant="body2" className="mb-2">
                    {answer.content}
                  </Typography>
                  {answer.isCorrect && <CheckIcon className="ml-3" />}
                </div>))}
              
            </div>
           
            <div className="flex-center--ver">
                <div className="mr-5">
                  <EditIcon className="english-setting-icon"
                    onClick={() => history(`/admin/quiz/edit/${id}/${question._id}`)} 
                  />
                </div>
                <DeleteIcon className="english-setting-icon"
                  onClick={() => deleteHandler(question._id)} 
                  />

              </div>
              </div></>
           
          ))
        ) : (
          <Typography className="mt-5" variant="h5">
            There are no questions in the quiz
          </Typography>
        )
      ) : (
        <div>
          <Typography className="mt-5 mb-5" variant="h5">
          The listening song has no quiz
          </Typography>
          <Button className="_btn _btn-primary" onClick={handleAddQuiz}>
          More quiz
          </Button>
        </div>
      )}

<Button color='primary' onClick={() => history("/admin/quiz")}>GO BACK</Button>
    </div>

  );
}
