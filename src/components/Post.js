import blueglazedterracotta from './img/blueglazedterracotta.png';

const Post = ({post}) => {
  return(
    <div key={post._id} className='box'>
      <div className='box'>
        <h4>{post.title}</h4>
        <h6>{post.date}</h6>
        {post.paragraphs.map((postParagraph, i) => {
          return(
            <div>
              <span>{postParagraph.text}</span>
              {postParagraph.images.map((postParagraphImage, j) => {
                return(
                  <img className={`${post._id}_${i+1}_${j+1}`} src={blueglazedterracotta} alt={postParagraphImage.caption}></img>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
  
export default Post;
