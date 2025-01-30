export const redirectTo = (url: string) => {
  if (!url || typeof url !== 'string') {
    console.error('URL inválida');
    return;
  }
  window.location.href = url;
};
