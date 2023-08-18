/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Speaker from "../UI/Speaker";
import { DEFAULTS } from "../../constants/index";
import { getIPA } from "../../redux/actions/ipaAction";
import { cloudinaryImgOptimize } from "../../helper";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import RelativeIPA from "./RelativeIPA";
import useStyle from "./style";

function IPAGroupCollapse() {
  const classes = useStyle();
  const id = useParams().id;
  const ipa = useSelector((state) => state.ipaReducer.ipa);

  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getIPA(id)), [dispatch]);

  const history = useNavigate();

  function handleClickGoBack() {
    history(`/ipa`);
  }

  let imgSrc = null;
  if (ipa) {
    imgSrc = cloudinaryImgOptimize(
      ipa.Image ? ipa.Image : DEFAULTS.IMAGE_SRC,
      200,
      200,
      true,
      true
    );
  }

  return (
    <Container>
      {ipa && (
        <>
          <>
            <Typography variant="h6" align="center">
              Pronunciation
            </Typography>
            <Typography variant="h6">{ipa.Title}</Typography>
          </>
          {ipa.Video ? (
            <p align="center">
              <iframe src={ipa.Video} width="500" height="300"></iframe>
            </p>
          ) : (
            <img
              className={classes.picture}
              src={imgSrc}
              alt=""
              align="center"
            />
          )}
          <Typography>{ipa.Description}</Typography>

          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item className="flex-center-between" xs={12} lg={6}>
                <div>
                  <div className="flex-center--ver">
                    <b className={classes.word}>
                      {" "}
                      Phonetic: / {ipa.Phonetic} /
                    </b>
                    {ipa.Audio && <Speaker type={false} audioSrc={ipa.Audio} />}
                  </div>

                  <div className={classes.example}>
                    <b>Example:</b>
                    {ipa.Examples &&
                      ipa.Examples.map((example, exKey) => (
                        <div className="flex-center--ver my-4" key={exKey}>
                          <span className="mr-4">
                            {example.Word}
                            <span className="phonetic px-3">
                              {example.Phonetic}
                            </span>
                          </span>
                          <Speaker type={true} text={example.Word} />
                        </div>
                      ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </AccordionDetails>

          <RelativeIPA type={ipa.Type} phonetic={ipa.Phonetic} />

          <Typography></Typography>
          <Button color="primary" onClick={() => handleClickGoBack()}>
            {" "}
            GO BACK
          </Button>
        </>
      )}
    </Container>
  );
}

IPAGroupCollapse.propTypes = {
  phoneticList: PropTypes.array,
  title: PropTypes.string,
  isNoVoice: PropTypes.bool,
};

IPAGroupCollapse.defaultProps = {
  phoneticList: [],
  title: "",
  isNoVoice: false,
};

export default IPAGroupCollapse;
