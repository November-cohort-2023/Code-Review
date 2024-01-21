import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {

  console.log(props.tweetData)
  return (
    <div className="tweet">
      <ProfileImage profileImage = {props.tweetData.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User name = {props.tweetData.user.name} handle = {props.tweetData.user.handle}></User>

          <Timestamp timestamp={props.tweetData.timestamp}></Timestamp>
        </div>

      <Message message={props.tweetData.message}></Message>
       <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
