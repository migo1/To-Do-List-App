export default function editTask(text, task) {
  text.contentEditable = false;
  const updatedText = text.innerText;
  task.desc = updatedText;
}
