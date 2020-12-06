export const JsonPrettyPrint = (obj: Record<string, unknown>): string => {
    const result = JSON.stringify(obj, undefined, 4)
    return result
}
