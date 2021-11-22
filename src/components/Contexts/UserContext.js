import { useReducer, createContext, useContext } from "react";

const UserCtx = createContext(null);
const DispatchCtx = createContext(null);

export default function UserContext({ children }) {
  const initState = {
    id: null,
    nickname: null,
    platform: null,
  };

  const reducer = (user, action) => {
    switch (action.type) {
      case "initiate": {
        return {
          id: action.id,
          nickname: action.nickname,
          platform: action.platform,
        };
      }
      default:
        console.error(`'${action.type}' 액션 타입은 핸들링되지 않았습니다.`);
    }
  };

  const [user, dispatch] = useReducer(reducer, initState);

  return (
    <UserCtx.Provider value={user}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </UserCtx.Provider>
  );
}

export const useUserDispatch = () => {
  const dispatch = useContext(DispatchCtx);
  if (dispatch === undefined) console.error("Context를 찾을 수 없습니다.");
  return dispatch;
};

export const useUser = () => {
  const user = useContext(UserCtx);
  if (user === undefined) console.error("Context를 찾을 수 없습니다.");
  return user;
};
