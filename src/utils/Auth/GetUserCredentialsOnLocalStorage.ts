
// eslint-disable-next-line import/no-anonymous-default-export
export default async function() {
    try {
        const result = await localStorage.getItem("ADMIN_PANEL_USER_CREDENTIALS");
        return JSON.parse(result || "");
    } catch(err) {
        return {}
    }
}
