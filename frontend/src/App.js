import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { useEffect } from "react";
import { setSocket } from "./store/socketSlice/socketSllice";
import { setOnlineUsers } from "./store/authSllice/authSliceReducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);
function App() {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socket);
  const { userAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (userAuth) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: userAuth._id,
        },
      });
      dispatch(setSocket(socket));
      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [userAuth]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
