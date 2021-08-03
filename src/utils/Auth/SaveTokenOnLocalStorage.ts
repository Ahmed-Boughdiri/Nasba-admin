
// eslint-disable-next-line import/no-anonymous-default-export
export default async function(token: String) {
    try {
        await localStorage.setItem("ADMIN_PANEL_USER_TOKEN", token as string);
    } catch(err) {
        throw err;
    }
}
