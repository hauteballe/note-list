const CONVERT_TO_SECONDS_OPERAND = 1000;

export const getTimestamp = () => {
  return Math.floor(Date.now() / CONVERT_TO_SECONDS_OPERAND);
};
