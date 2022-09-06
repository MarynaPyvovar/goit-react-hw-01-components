import user from 'components/user.json';
import data from 'components/data.json';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    </div>
  );
};
