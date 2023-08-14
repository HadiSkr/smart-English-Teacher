/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULTS } from "../../constants/index";
import { cloudinaryImgOptimize } from "../../helper";
import { getIPARelative } from "../../redux/actions/ipaAction";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStyle from "./style";

function IPARelative(props) {
  const classes = useStyle();
  const ipas = useSelector((state) => state.ipaReducer.ipas);

  const { type, phonetic } = props;
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getIPARelative(type, phonetic)), [dispatch]);

  const handleClick = (id) => {
    window.location.href = `${id}`;
  };

  let imgList = [];
  if (ipas) {
    for (let i = 0; i < ipas.length; i++) {
      if (ipas[i].Image) {
        let imgSrc = cloudinaryImgOptimize(
          ipas[i].Image ? ipas[i].Image : DEFAULTS.IMAGE_SRC,
          200,
          200,
          true,
          true
        );
        imgList[i] = imgSrc;
      }
    }
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}
      >
        <b className={classes.relative}>Relative Pronunciation</b>
      </AccordionSummary>

      <AccordionDetails>
        <div className="container">
          {ipas &&
            ipas.map((item, key) => (
              <div className={classes.mobilelist}>
                <div>
                  <div className={classes.floatleft}>
                    <a>
                      <img
                        height="80px"
                        width="80px"
                        src={imgList[key]}
                        onClick={() => handleClick(item._id)}
                      />
                    </a>
                  </div>
                  <a
                    className={classes.title}
                    href={`/ipa/details/${item._id}`}
                  >
                    <u> {item.Title}</u>
                  </a>
                  <br></br>

                  <div className={classes.textlimit}>
                    <span className={classes.tldetail}></span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default IPARelative;
