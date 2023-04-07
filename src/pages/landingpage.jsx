import { Navigation } from "../components/navigation";
import { Stock } from "../components/stock";
import { Practice } from "../components/practice";
import { Trade } from "../components/trade";
import { Yourself } from "../components/yourself";
import { Faqs } from "../components/faqs";
import {Footer} from "../components/footer";

export const LandingPage = () => {
    return (
        <div>
            <Navigation/>
            <Stock/>
            <Practice/>
            <Trade/>
            <Yourself/>
            <Faqs />
            <Footer/>
        </div>
    )
}