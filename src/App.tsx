import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/modules/footer/footer";
import { SignIn } from "./components/views/sign-in/signin";
import { User } from "./components/views/user/user";
import { Welcome } from "./components/views/welcome/welcome";
import "./css/global.css";
import { setUser } from "./features/user/userSlice";
import { loadFromSessionStorage } from "./store";

function App() {
  const dispatch = useDispatch();
  const storage = loadFromSessionStorage();

  if (storage) {
    dispatch(setUser(storage.user));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
