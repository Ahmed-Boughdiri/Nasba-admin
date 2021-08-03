
// eslint-disable-next-line import/no-anonymous-default-export
export default async function(data: {
    fullName: String,
    email: String,
    id: String
}) {
    try {
        await localStorage.setItem("ADMIN_PANEL_USER_CREDENTIALS", JSON.stringify(data));
    } catch(err) {
        throw err;
    }
}
