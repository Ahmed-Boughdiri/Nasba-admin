
export interface TextComponentProps {
    textAlign?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start",
    fontSize?: String,
    color?: "dark" | "yellow",
    fontWeight?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bold" | "normal" | (number & {}) | "bolder" | "lighter",
    className?: String,
    style?: CSSProperties
}
