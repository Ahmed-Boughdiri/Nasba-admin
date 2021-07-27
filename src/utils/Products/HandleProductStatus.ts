
// eslint-disable-next-line import/no-anonymous-default-export
export default function(status: "AVAILABLE" | "NOT AVAILABLE") {
    switch(status) {
        case "AVAILABLE":
            return {
                bg: "success",
                name: "AVAILABLE"
            }
        case "NOT AVAILABLE":
            return {
                bg: "danger",
                name: "NOT AVAILABLE"
            }
        default:
            return {
                bg: "danger",
                name: "NOT AVAILABLE"
            }
    }
}
