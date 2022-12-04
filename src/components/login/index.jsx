import { api } from "../../services/api";
import { StyledLogin } from "./style"
import { StyledTitle } from "../../styles/fonts"

export const LoginPage = () => {
    const APIRequest = async () => {
        const response = await api.get('users')
        console.log(response.data);
    }
    APIRequest()

    return(
        <StyledLogin >
            <StyledTitle >login</StyledTitle>
        </StyledLogin>
    )
}