import { useHistory } from "react-router-dom";

const history = useHistory();

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => {
    if (isBrowser() && window.sessionStorage.getItem("User")) {
        return JSON.parse(window.sessionStorage.getItem("User"));
    }
    else {
        return null
    }
}

const setUser = user =>
    isBrowser() ? window.sessionStorage.setItem("User", JSON.stringify(user)) : null

export const handleLogin = user => {
    if (isBrowser()) {
        setUser(user);
        window.location.href = "/blog-author/home";
    }
    else {
        return null
    }
}

export const isLoggedIn = () => {
    if (isBrowser() && getUser()) {
        return true
    }
    else {
        return null
    }
}

export const logout = () => {
    if (isBrowser()) {
        window.sessionStorage.clear()
        window.location.href = "/blog-author";
    }
    else {
        return null
    }
}
