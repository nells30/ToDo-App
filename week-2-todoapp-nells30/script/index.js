// function main() {}
window.addEventListener('load', () => {
	const search = document.querySelector('#search');
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	
	// console.log(search)
	// search.addEventListener('keyup', (e) => {
	// 	console.log(e.target.value)
	// });
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		/*-------- Time setting -------*/
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let month = today.toLocaleString('default', { month: 'long' })
		let yyyy = today.getFullYear();
		let day =today.toLocaleString('en-us', {weekday: 'long'})
		let min = String(today.getMinutes()).padStart(2, '0');
		let hr = String(today.getHours()).padStart(2, '0');
		today = day + ', ' + " " + dd + " "+ month + ' ' + yyyy + ', ' + hr + ":"+ min;
		
		
		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		const cur_time = document.createElement('div');
        cur_time.classList.add('time');
        const current_time = document.createElement('h4');
        current_time.innerHTML = today

        cur_time.appendChild(current_time);
        task_content_el.appendChild(cur_time)


		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
// module.exports = { main }