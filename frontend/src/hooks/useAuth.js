// useLoginStatus.js
import {useSelector} from 'react-redux';

export function useLoginStatus() {
    const {isLoggedIn} = useSelector((state) => state.user);
    return isLoggedIn;
}
