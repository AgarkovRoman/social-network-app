export const required = value => {
    return value ? undefined : 'Field is required'
}

export const maxLengtCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Max symbols is ${maxLength}` : undefined
}