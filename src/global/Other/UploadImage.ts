import Axios from "./Axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(
    images: File[] | null,
    productID: String
) {
    const data = new FormData();
    console.log("Images: ", images);
    if(images) {
        for(let i=0;i<images.length;i++)
            data.append("images", images[i] as Blob);
        data.append("productID", productID as string);
    } else {
        return
    }
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const req = await Axios.post("/upload/image", data, config);
        const res = await req.data;
        return res;
    } catch(err) {
        throw err;
    }
}
