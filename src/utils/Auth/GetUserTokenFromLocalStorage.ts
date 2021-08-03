
// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    try {
        return localStorage.getItem("ADMIN_PANEL_USER_TOKEN");
    } catch(err) {
        throw err;
    }
}
