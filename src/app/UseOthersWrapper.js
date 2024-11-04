// UseOthersWrapper.js
import { useOthers } from '@liveblocks/react/suspense';

const UseOthersWrapper = ({ children }) => {
    const others = useOthers();
    console.log("others count ", others)
    return children(others);  // Call the children function with the data
};

export default UseOthersWrapper;