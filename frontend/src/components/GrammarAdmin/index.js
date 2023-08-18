import React from 'react';
import { useNavigate } from 'react-router-dom';
import AutoSearchInput from '../UI/AutoSearchInput';
import InfiniteScroll from '../UI/InfiniteScroll';
import { ROUTES } from '../../constants/index';
import WordItem from './GrammarItem/index';
import WordSkeleton from './WordSkeleton';
import WordPackSetting from './WordPackSetting';
import PropTypes from 'prop-types';
import LoopIcon from '@mui/icons-material/Loop';
import AddIcon from '@mui/icons-material/Add';
import useStyle from './style';
// import RichTextEditor from '../UI/RichTextEditor';

function GrammarAdmin({
  list,
  loading,
  onLoadData,
  more,
  isFirstLoad,
  onSettingWordPack,
  onSearchWord,
}) {
  const classes = useStyle();
  const history = useNavigate();
  
  return (
    <div className={`${classes.root} english-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="english-title">Grammar management</h1>
        <div>
          <AddIcon className="english-setting-icon mr-5" onClick={() => history(ROUTES.CREATE_GRAMMAR)}/>
  
          <WordPackSetting
              onChoose={onSettingWordPack}
              classNameIcon="english-setting-icon"
          />
        </div>
      </div>
      <div className="english-break"></div>

      {/* list content */}
      <div className={classes.contentWrap}>
        <AutoSearchInput disabled={loading} onSearch={onSearchWord} />

        <div className={`${classes.listWrap} w-100`}>
          <ul id="dictionaryId" className={`${classes.list} flex-col w-100`}>
            <>
              {isFirstLoad ? (
                <WordSkeleton className={classes.skeleton} />
              ) : (
                <>
                  {list && list.length > 0 ? (
                    <>
                      {/* render list */}
                      {list.map((item, index) => (
                        <li className={classes.listItem} key={index}>
                          <WordItem {...item} />
                        </li>
                      ))}

                      {/* infinite scrolling */}
                      {!loading && more && (
                        <InfiniteScroll
                          onTouchAnchor={onLoadData}
                          threshold={1}>
                          <div className="w-100 t-center">
                            <LoopIcon className="ani-spin" />
                          </div>
                        </InfiniteScroll>
                      )}
                    </>
                  ) : (
                    // empty list
                    <h3 className="notfound-title h-100 flex-center t-center">
                      No result.
                    </h3>
                  )}
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

GrammarAdmin.propTypes = {
  isFirstLoad: PropTypes.bool,
  list: PropTypes.array,
  loading: PropTypes.bool,
  more: PropTypes.bool,
  onLoadData: PropTypes.func,
  onSearchWord: PropTypes.func,
  onSettingWordPack: PropTypes.func,
};

GrammarAdmin.defaultProps = {
  list: [],
  loading: false,
  more: true,
  isFirstLoad: true,
  onLoadData: function () {},
  onSearchWord: function () {},
  onSettingWordPack: function () {},
};

export default GrammarAdmin;
