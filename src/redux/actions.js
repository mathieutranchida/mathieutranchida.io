export const receiveNewLanguage = (content) => ({
  type: "RECEIVE_NEW_LANGUAGE",
  content,
});

export const updateEmailTemplate = (templateId) => ({
  type: "UPDATE_EMAIL_TEMPLATE",
  templateId,
});
