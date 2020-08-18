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

export const handleLogin = (user, hist) => {
    if (isBrowser()) {
        setUser(user);
        hist.push("/home");
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

export const logout = (hist) => {
    if (isBrowser()) {
        window.sessionStorage.clear()
        hist.replace("/");
    }
    else {
        return null
    }
}
