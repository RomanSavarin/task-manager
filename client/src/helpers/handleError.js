/*
 I didn't want to spend time on implementing this feature 
 so decided to use external solution
 */
import { toastr } from 'react-redux-toastr'

export default function(message, error) {
  console.error('Error while fetching the processes', error)
  toastr.error('Error', message);
}