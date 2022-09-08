import { FriendListWrapper, FriendListItem } from './FriendListStyled';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
    return (<FriendListWrapper>
        {friends.map(({id,avatar, name, isOnline}) => <FriendListItem key={id} isOnline={isOnline}>
            <span></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </FriendListItem>)}
    </FriendListWrapper>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}