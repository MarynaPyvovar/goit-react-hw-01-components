import css from 'components/Profile/Profile.module.css';
import PropTypes from "prop-types";

export const Profile = ({ avatar, username, tag, location, stats: {followers, views, likes} }) => {
    return (<div className={css.profile}>
        <div className="description">
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
    </div>)
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}