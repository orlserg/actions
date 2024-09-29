import axios from "axios";

(async function sendRequest() {
    try {
        const response = await axios.get(
            "https://yldltzlfsgobpsuhvgow8529wsnmpynjq.oast.fun?index=1",
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error making request:", error);
    }
})();