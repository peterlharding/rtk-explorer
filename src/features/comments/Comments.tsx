
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EntityId} from '@reduxjs/toolkit';

import {fetchComments, selectComments, selectIds} from './commentsSlice';

// import {Comment} from '../../models/comment';

export const Comments = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchComments())
    }, [dispatch]
  );

  const {comments} = useSelector(selectComments);
  const ids = useSelector(selectIds);

  const render = () => {
    console.log(JSON.stringify(ids));

    if (ids !== undefined) {
      return ids.map((id: EntityId) => (
        <div>
          {id}
        </div>
      ));
    } else {
      return (
        <div>
          Loading
        </div>
      );
    }
  }

  return (
    <div>
     Comments
     {render()}
    </div>
  );

}

export default Comments;