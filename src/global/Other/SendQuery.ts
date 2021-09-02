import Axios from "./Axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(query: String) {
    try {
        const req = await Axios.post("/graphql", { query });
        const res = await req.data;
        return res.data;
    } catch(err) {
        throw err;
    }
}
