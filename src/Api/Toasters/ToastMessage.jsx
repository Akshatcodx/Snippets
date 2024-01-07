export const toastMessage = (type, msg) => {
  if (type === "success") {
    toast.dismiss();
    toast.success(msg);
  } else {
    toast.dismiss();
    toast.error(msg);
  }
};
