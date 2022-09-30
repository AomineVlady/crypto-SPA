import { round } from "./calcs"

export const getBankDiffText = (value: number): string => value < 0 ? `${round(value, 3)}` : `+${round(value, 3)}`;
