export function classNames(...classNames: (string | undefined)[]) {
    return classNames.filter((className) => typeof className == "string").join(" ")
}