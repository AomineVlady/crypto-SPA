export const setLSData = (valueName: string, value: any) => {
  localStorage.setItem(valueName, JSON.stringify(value));
};

export const getLSData = (valueName: string) => JSON.parse(localStorage.getItem(valueName) || '[]');

export const removeLSData = (valueName: string) => {
  delete localStorage[valueName];
};
