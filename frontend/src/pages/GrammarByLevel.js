/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Typography from "@mui/material/Typography";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
import grammarApi from '../apis/grammarApi';
import { cloudinaryImgOptimize } from "../helper";
import { DEFAULTS } from '../constants/index';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  mobilelist : {
    height: "115px",
 
},
floatleft: {
  float: "left",
  margin: "0 10px 10px 0px",
  padding: "2px",
},
title: {
  display: 'inline-block',
  fontSize: '2.0rem',
  fontWeight: 400,
  color: 'blue',
  margin: '0.8rem 0rem 0rem 0',

  '&:hover, &:focus': {
    color: "#CCC",
  },

},
tldetail: {
  fontSize: '1.5rem',
  fontWeight:400,
  color: 'black', 
},
textlimit: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  width: "500px",
}

}));

function GrammarByLevelPage() {
  useTitle('Grammar');
  const [list, setList] = useState([]);
  const classes= useStyle();
  const history = useNavigate();

  const  level = useParams().level;
  
   useEffect(() => {
   (async function () {
     try {
       const apiRes = await grammarApi.getGrammarByLevel(level);
       if (apiRes.status === 200) {
           console.log(apiRes.data)
         setList(apiRes.data.grammars);
       }
     } catch (error) {}
   })();
 
   return () => {};
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const getImage = (image) =>{
    const imgSrc = cloudinaryImgOptimize( image ? image : DEFAULTS.IMAGE_SRC,
         200,
         200,
         true,
         true
     );
     return imgSrc;
}

// eslint-disable-next-line no-unused-vars
const viewDetail=(id)=>{
    history(`/grammar/details/${id}`)
}

  return (
      <><Typography variant="h6" align="center">
      Level {level}
    </Typography>
    <div className="container" style={{ position: "relative", left: "250px" }}>
        {list && (
          list.map((item) => <div className={classes.mobilelist}>
            <div>
            <Link to={`/grammar/details/${item._id}`}>
              <div className={classes.floatleft}>               
                  <img height="80px" width="80px" src={getImage(item.Image)}/>               
                </div>
                  <p className={classes.title}><strong> {item.Title}</strong></p>
                  <br></br>
                  </Link>
                <div className={classes.textlimit}>
                  <span className={classes.tldetail}>{item.Content}</span>
                </div>
              </div>

            </div>


         
          ))}
         </div> </>
  );
        }

export default GrammarByLevelPage;

