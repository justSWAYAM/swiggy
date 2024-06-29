import { render ,screen , fireEvent} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header Component with  a login button" , () => {
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});
    
    fireEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument();
});