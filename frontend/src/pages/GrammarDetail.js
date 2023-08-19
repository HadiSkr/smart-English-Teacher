import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useTitle from "../hooks/useTitle";
// import CardMedia from "@mui/material/CardMedia"
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import {getGrammar}  from "../redux/actions/grammarAction";
import { makeStyles } from "@mui/styles";
import { cloudinaryImgOptimize } from "../helper";
import { DEFAULTS } from '../constants/index';


const useStyle = makeStyles(() => ({
  borderTopic: {
      borderStyle: "solid",
      borderColor: "initial",
      borderWidth: "1px",
      backgroundColor: "#ccff66",
      width: "700px",
      height: "auto",
    },
    grammarbox: {
      backgroundColor: "#99ffff",

      padding: "10px 10px",
      border: "1px solid #666",
      marginBottom: "10px",	
    },
    picture: {
      width: '50rem',
      height: '30rem',
      marginLeft: '15rem',
    },
 
}));


function TabPanel(props) {
const { children, value, index, ...other } = props;


return (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
};
}

export default function GrammarDetailPage() {
  useTitle("Grammar Details");
  const classes= useStyle();
  const [value, setValue] = useState(0);
  const grammarId = useParams().id;
  const {grammar} = useSelector((state) => state.grammarReducer);
 
  const history = useNavigate();

  function handleClickEdit() {
    history(`/admin/grammar/edit/${grammarId}`);
  }

  function handleClickGoBack() {
    history("/admin/grammar");
  }


  const dispatch = useDispatch();
  useEffect(() => 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  dispatch(getGrammar(grammarId)), [dispatch])

  const getText = (text) =>{
    let Text =[];
    if(text){
    Text = text.split("\n");
    } 
    return Text;
  };

  let imgSrc = null;
    if(grammar)
    {
        imgSrc = cloudinaryImgOptimize( grammar.Image ? grammar.Image : DEFAULTS.IMAGE_SRC,
            200,
            200,
            true,
            true
        );
    }

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <>
      <Container>
        <><Typography variant="h6" align="center">
            {grammar.Title}
        </Typography>
        <Typography>
            {grammar.Content}
        </Typography></>

        {grammar.Video ?  (
              // eslint-disable-next-line jsx-a11y/iframe-has-title
              <p align="center"><iframe src= {grammar.Video} width="500" height="300"></iframe></p>             
            ):(              
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img className={classes.picture} src={imgSrc} alt="photo" align="center" />
        )}
        
        {grammar.Audio && (
        <audio controls>
        <source src={grammar.Audio} type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        )}

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
            >
              <Tab label="Script" {...a11yProps(0)} />
              <Tab label="Grammar" {...a11yProps(1)} />
             
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          <td dangerouslySetInnerHTML={{__html: grammar.Script}} />
          </TabPanel>

          <TabPanel value={value} index={1}>
          {grammar.Items && (
              grammar.Items.map((item, index) =>
            <>
            <Typography className={classes.grammarbox}>
              <p><strong>Point {index+1} :  </strong>{item.Point}</p>
            </Typography>
           
            <div>
                {getText(item.Examples).map((it) => 
                <Typography variant="body2" align="justify">
                {it}
                </Typography>
                )}
            </div></>
         ))}
          </TabPanel>
    <Button color='primary' onClick={() => handleClickGoBack()}>GO BACK</Button>
    <Button color='primary'onClick={() => handleClickEdit()}>Edit</Button>
           
        </Box>
      </Container>
    </>
  );
}
