import { AppRouter } from "../../router/AppRouter"
import { FooterComponent } from "../Components/Footer"
import { HeaderComponet } from "../Components/Header"
import { ScreenComponent } from "./Screen"

export const HomePage = () => {
    return (
        <div id="container">
        <HeaderComponet/>
        <ScreenComponent/>
        <FooterComponent/>
        </div>
    )
}