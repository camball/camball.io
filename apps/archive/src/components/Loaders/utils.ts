export const durationUnitRegex = /[a-zA-Z]/;

export const range = (size: number, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);