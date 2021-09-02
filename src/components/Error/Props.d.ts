
export interface ErrorProps {
    type: "component" | "screen" | "alert",
    errorMsg?: String,
    width?: Number
}

export interface ErrorComponentProps {
    errorMsg: String
}

export interface AlertComponentProps {
    errorMsg: String,
    width?: Number
}
