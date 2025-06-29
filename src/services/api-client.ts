import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '553b49890b324392821e1f5429867d19'
    }
})