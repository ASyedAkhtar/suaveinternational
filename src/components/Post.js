import blueglazedterracotta from './img/blueglazedterracotta.png';
import basalttop from './img/basalttop.png';
import cyanglazedterracotta from './img/cyanglazedterracotta.png';

const Post = ({post}) => {

  const images = {
    blueglazedterracotta,
    basalttop,
    cyanglazedterracotta
  };

  return(
    <div className='post'>
      <h4>{post.title}</h4>
      <h6>{post.date}</h6>
      {post.paragraphs.map((postParagraph) => {
        return(
          <div>
            {postParagraph.images.map((postParagraphImage) => {
              return(
                <img className='post-picture'/*{`${post._id}_${i+1}_${j+1}`} */ src={images[postParagraphImage.source]} alt={postParagraphImage.caption}></img>
              );
            })}
            <span className='post-text'>{postParagraph.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
