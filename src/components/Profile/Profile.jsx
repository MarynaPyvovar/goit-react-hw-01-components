import { ProfileThumb, DescriptionWrapper, StatsWrapper } from './ProfileStyled'
import PropTypes from "prop-types";

export const Profile = ({ avatar, username, tag, location, stats: {followers, views, likes} }) => {
  return (<ProfileThumb>
    <DescriptionWrapper>
        <img src={avatar} alt={username}/>
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
    </DescriptionWrapper>
    <StatsWrapper>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </StatsWrapper>
  </ProfileThumb>)
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}