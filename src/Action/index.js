const submitForm = formData => ({
  type: 'SUBMIT',
  payload: formData,
})
export const appliedJobTitle = jobItemDetails => ({
  type: 'APPLY',
  payload: jobItemDetails,
})

export default submitForm
